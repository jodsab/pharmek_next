import type { AuthResponse, RegisterUserDto, User } from '../entities/User'

export interface AuthRepository {
  register(data: RegisterUserDto): Promise<AuthResponse>
  login(email: string, password: string): Promise<AuthResponse>
  logout(): Promise<void>
  getCurrentUser(): Promise<User | null>
}
