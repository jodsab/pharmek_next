export interface User {
  id: string
  email: string
  full_name: string
  user_name: string
  celular: string
  created_at?: string
}

export interface RegisterUserDto {
  email: string
  password: string
  full_name: string
  user_name: string
  celular: string
}

export interface AuthResponse {
  ok: boolean
  message: string
  user?: User
}

export interface LoginDto {
  email: string
  password: string
}
