// src/app/api/register/route.js
import { NextResponse } from 'next/server'

import supabaseAdmin from '@/libs/supaBaseAdmin'
import { normalizeError } from '@/utils/errorMessages'

export async function POST(req) {
  try {
    const { email, password, full_name, user_name, celular } = await req.json()

    // 1️⃣ Insertar en usuarios
    const { data: userData, error: insertError } = await supabaseAdmin
      .from('usuarios')
      .insert([{ email, full_name, user_name, celular }])
      .select()
      .single()

    if (insertError) throw insertError

    // 2️⃣ Crear usuario en Auth
    const { data: authData, error: authError } = await supabaseAdmin.auth.signUp({
      email,
      password,
      options: { data: { full_name, user_name, celular } }
    })

    return NextResponse.json({ user: authData.user })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        user: null,
        error: true,
        message: normalizeError(error),
        detail: error
      },
      { status: 400 }
    )
  }
}
