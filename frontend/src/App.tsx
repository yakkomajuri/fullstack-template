import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { useEffect } from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useAuthStore } from './store/authStore'
import './App.css'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    return isAuthenticated ? children : <Navigate to="/login" />
}

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    return isAuthenticated ? <Navigate to="/" /> : children
}

function App() {
    const initializeAuth = useAuthStore((state) => state.initializeAuth)

    useEffect(() => {
        initializeAuth()
    }, [initializeAuth])

    return (
        <ConfigProvider>
            <Router>
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <PublicRoute>
                                <Signup />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </ConfigProvider>
    )
}

export default App
