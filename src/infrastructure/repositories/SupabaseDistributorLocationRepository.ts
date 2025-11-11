// src/infrastructure/repositories/SupabaseDistributorLocationRepository.ts
import type { PostgrestError } from '@supabase/supabase-js'
import type {
  DistributorLocationRepository,
  LocationFilters,
} from '@/core/domain/repositories/DistributorLocationRepository'
import type { DistributorLocation } from '@/core/domain/entities/DistributorLocation'
import supabase from '@/libs/supabase'

// -- Tipos "raw" (lo que esperamos del select)
type RawEmbed = { id: number; name: string }
type RawLocation = {
  id: number
  created_at: string
  cellphone: string | null
  address: string | null
  businessHours: string | null
  id_district: number | null
  id_distributor: number
  longitude: string | null
  latitude: string | null
  googleUrl: string | null
  distributor?: RawEmbed | null
  district?: RawEmbed | null
}

export class SupabaseDistributorLocationRepository implements DistributorLocationRepository {
  // SELECT con embeds; el Parser de tipos a veces falla con cross-schema.
  // Forzamos el tipo más abajo (cast) para evitar "ParserError".
  private readonly baseSelect = `
    *,
    distributor:distributors ( id, name ),
    district:geolocation.districts ( id, name )
  `

  // Si tu PostgREST no admite cross-schema en el parser de tipos, intenta esta variante por FK:
  // (ajusta el nombre del constraint si difiere en tu BD)
  // private readonly baseSelect = `
  //   *,
  //   distributor:distributors ( id, name ),
  //   district:districts!distributorsLocations_id_district_fkey ( id, name )
  // `

  private handleError(error: PostgrestError | Error): never {
    throw error
  }

  // Guard sencillo para cerciorarnos de que vienen las claves mínimas
  private isRawLocation = (r: any): r is RawLocation =>
    r && typeof r.id === 'number' && typeof r.created_at === 'string'

  private mapRow = (r: RawLocation): DistributorLocation => ({
    id: r.id,
    created_at: r.created_at,
    id_distributor: r.id_distributor,
    ...(r.cellphone !== null ? { cellphone: r.cellphone } : {}),
    ...(r.address !== null ? { address: r.address } : {}),
    ...(r.businessHours !== null ? { businessHours: r.businessHours } : {}),
    ...(r.id_district !== null ? { id_district: r.id_district } : {}),
    ...(r.longitude !== null ? { longitude: r.longitude } : {}),
    ...(r.latitude !== null ? { latitude: r.latitude } : {}),
    ...(r.googleUrl !== null ? { googleUrl: r.googleUrl } : {}),
    ...(r.distributor !== null ? { distributor: r.distributor as any } : {}),
    ...(r.district !== null ? { district: r.district as any } : {}),
  })

  async findAll(filters?: LocationFilters): Promise<DistributorLocation[]> {
    let query = supabase
      .from('distributorsLocations')
      // 👇 anulamos la inferencia con `as unknown as string`
      .select(this.baseSelect as unknown as string)
      .order('id', { ascending: true })

    if (filters?.distributorIds?.length) query = query.in('id_distributor', filters.distributorIds)
    if (filters?.districtIds?.length) query = query.in('id_district', filters.districtIds)
    if (filters?.text && filters.text.trim() !== '') {
      const t = filters.text.trim()
      query = query.or(`address.ilike.%${t}%,cellphone.ilike.%${t}%`)
    }

    const { data, error } = await query
    if (error) this.handleError(error)

    // ✅ Esquivamos el ParserError y validamos mínimamente
    const rows = (Array.isArray(data) ? data : []) as unknown[]
    const safe = rows.filter(this.isRawLocation).map(this.mapRow)
    return safe
  }

  async findById(id: number): Promise<DistributorLocation | null> {
    const { data, error } = await supabase
      .from('distributorsLocations')
      .select(this.baseSelect as unknown as string)
      .eq('id', id)
      .maybeSingle()

    if (error) this.handleError(error)
    if (!data || !this.isRawLocation(data)) return null

    return this.mapRow(data)
  }

  async findByDistributor(distributorId: number): Promise<DistributorLocation[]> {
    const { data, error } = await supabase
      .from('distributorsLocations')
      .select(this.baseSelect as unknown as string)
      .eq('id_distributor', distributorId)
      .order('id', { ascending: true })

    if (error) this.handleError(error)

    const rows = (Array.isArray(data) ? data : []) as unknown[]
    const safe = rows.filter(this.isRawLocation).map(this.mapRow)
    return safe
  }

  async upsert(
    loc: Partial<DistributorLocation> & { id_distributor: number }
  ): Promise<DistributorLocation> {
    const payload: Record<string, unknown> = {
      id: loc.id ?? undefined,
      cellphone: loc.cellphone ?? null,
      address: loc.address ?? null,
      businessHours: loc.businessHours ?? null,
      id_district: loc.id_district ?? null,
      id_distributor: loc.id_distributor,
      longitude: loc.longitude ?? null,
      latitude: loc.latitude ?? null,
      googleUrl: loc.googleUrl ?? null,
    }

    const { data, error } = await supabase
      .from('distributorsLocations')
      .upsert(payload)
      .select(this.baseSelect as unknown as string)
      .single()

    if (error) this.handleError(error)
    if (!data || !this.isRawLocation(data)) this.handleError(new Error('Upsert sin datos válidos'))

    return this.mapRow(data)
  }

  async batchUpdateGeo(
    rows: Array<{ id: number; latitude?: string | null; longitude?: string | null; googleUrl?: string | null }>
  ): Promise<void> {
    if (!rows?.length) return
    const payload = rows.map((r) => ({
      id: r.id,
      latitude: r.latitude ?? null,
      longitude: r.longitude ?? null,
      googleUrl: r.googleUrl ?? null,
    }))
    const { error } = await supabase.from('distributorsLocations').upsert(payload, { onConflict: 'id' })
    if (error) this.handleError(error)
  }
}

export default SupabaseDistributorLocationRepository
