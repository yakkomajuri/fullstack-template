import { create } from 'zustand'
import { api } from '@/lib/api'

interface AuthResponse {
    token: string
}

interface UserDetails {
    username: string
    email: string
}

interface AuthState {
    isAuthenticated: boolean
    user: { username: string } | null
    login: (username: string, password: string) => Promise<boolean>
    signup: (username: string, email: string, password: string) => Promise<boolean>
    logout: () => void
    initializeAuth: () => Promise<void>
}

// Function to check if there's a valid token and get user details
const validateToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) return null

    try {
        const response = await api.get<UserDetails>('/user/details/')
        if (response.data) {
            return response.data
        }
    } catch (error) {
        console.error('Token validation failed:', error)
        localStorage.removeItem('token')
    }
    return null
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    initializeAuth: async () => {
        const userDetails = await validateToken()
        if (userDetails) {
            set({ isAuthenticated: true, user: { username: userDetails.username } })
        }
    },
    login: async (username: string, password: string) => {
        try {
            const response = await api.post<AuthResponse>('/user/login/', { username, password })
            if (response.data) {
                localStorage.setItem('token', response.data.token)
                set({ isAuthenticated: true, user: { username } })
                return true
            }
            return false
        } catch (error) {
            console.error('Login failed:', error)
            return false
        }
    },
    signup: async (username: string, email: string, password: string) => {
        try {
            const response = await api.post<AuthResponse>('/user/', { username, email, password })
            if (response.data) {
                localStorage.setItem('token', response.data.token)
                set({ isAuthenticated: true, user: { username } })
                return true
            }
            return false
        } catch (error) {
            console.error('Signup failed:', error)
            return false
        }
    },
    logout: () => {
        localStorage.removeItem('token')
        set({ isAuthenticated: false, user: null })
        api.post('/user/logout/').catch(console.error)
    },
}))
