import { create } from 'zustand'

import type { User } from '@/core/domain/entities/User'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  logout: () => void
  clearUser: () => void
}

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  isAuthenticated: false,
  setUser: user => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false }),
  clearUser: () => set({ user: null, isAuthenticated: false })
}))
