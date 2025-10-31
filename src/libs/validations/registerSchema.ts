import { z } from 'zod'

export const registerSchema = z
  .object({
    full_name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
    user_name: z.string().min(3, 'El nombre de usuario debe tener al menos 3 caracteres'),
    email: z.string().email('Debe ser un email válido'),
    celular: z.string().regex(/^[0-9]{9}$/, 'Debe ser un número de 9 dígitos'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword']
  })

export type RegisterFormData = z.infer<typeof registerSchema>
