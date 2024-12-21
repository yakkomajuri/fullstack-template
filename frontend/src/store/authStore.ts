import { create } from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  user: { username: string } | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (username: string, password: string) => {
    try {
      // TODO: Replace with actual API call
      if (username && password) {
        set({ isAuthenticated: true, user: { username } })
        return true
      }
      return false
    } catch (error) {
      console.error('Login failed:', error)
      return false
    }
  },
  logout: () => {
    set({ isAuthenticated: false, user: null })
  },
})) 