import { create } from 'zustand'

interface AuthState {
    isAuthenticated: boolean
    user: { username: string } | null
    login: (username: string, password: string) => Promise<boolean>
    signup: (username: string, email: string, password: string) => Promise<boolean>
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    login: async (username: string, password: string) => {
        try {
            const response = await fetch('http://localhost:8000/api/user/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })

            if (response.ok) {
                const data = await response.json()
                localStorage.setItem('token', data.token)
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
            const response = await fetch('http://localhost:8000/api/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            })

            if (response.ok) {
                const data = await response.json()
                localStorage.setItem('token', data.token)
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
        fetch('http://localhost:8000/api/user/logout/', { method: 'POST' }).catch(console.error)
    },
}))
