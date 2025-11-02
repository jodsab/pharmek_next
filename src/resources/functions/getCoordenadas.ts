export function getCoordinatesFromGoogleMapsUrl(url: string): { lat: number; lng: number } {
  const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/
  const match = url.match(regex)

  if (!match) {
    throw new Error('No se encontraron coordenadas en la URL proporcionada.')
  }

  //       0    1       2
  // match = ["@lat,lng", "lat", "lng"]
  const [, latStr, lngStr] = match

  if (latStr === undefined || lngStr === undefined) {
    throw new Error('No se pudieron extraer los grupos de lat/lng.')
  }

  const lat = parseFloat(latStr)
  const lng = parseFloat(lngStr)

  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    throw new Error('Coordenadas inválidas en la URL.')
  }

  return { lat, lng }
}
