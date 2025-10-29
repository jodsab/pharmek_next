export const errorMessages = {
  // Errores de Auth
  user_already_exists: 'El correo ya está registrado.',
  invalid_credentials: 'Credenciales incorrectas. Verifica tu correo o contraseña.',
  email_not_confirmed: 'Tu correo no ha sido confirmado. Revisa tu bandeja de entrada.',
  weak_password: 'La contraseña debe tener al menos 6 caracteres.',

  // Fallback por message (Auth)
  'User already registered': 'El correo ya está registrado.',
  'Invalid login credentials': 'Credenciales incorrectas. Verifica tu correo o contraseña.',
  'Email not confirmed': 'Tu correo no ha sido confirmado. Revisa tu bandeja de entrada.',
  'Password should be at least 6 characters': 'La contraseña debe tener al menos 6 caracteres.',

  // Errores Postgres
  '23505:usuarios_celular_key': 'El número de celular ya está registrado.',
  '23505:usuarios_correo_key': 'El correo ya está registrado.'
}

// Normalizador
export function normalizeError(error) {
  if (!error) return 'Error desconocido'

  // Supabase AuthApiError puede venir con `code` y `message`
  const code = error.code || (error.error_code ?? null)
  const msg = error.message || (error.error_description ?? null)

  // Postgres duplicate key
  if (code === '23505') {
    if (msg.includes('usuarios_celular_key')) return errorMessages['23505:usuarios_celular_key']
    if (msg.includes('usuarios_correo_key')) return errorMessages['23505:usuarios_correo_key']
  }

  // Por message
  if (msg && errorMessages[msg]) return errorMessages[msg]

  // Por code
  if (code && errorMessages[code]) return errorMessages[code]

  return 'Ocurrió un error inesperado'
}
