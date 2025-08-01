"use client"

import { createContext, useState, useEffect, type ReactNode, useContext } from "react"
import type { UserProps } from "../types/UserType"
//import { mockUsers } from "../mocks/UserMock"
import { apiUser } from "../services/intex"

export interface AuthContextType {
  currentUser: UserProps | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isLoading: true,
  login: async () => { },
  register: async () => { },
  logout: () => { },
})

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("currentUser")
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Simula chamada de API
    return new Promise<void>((resolve, reject) => {
      setTimeout(async () => {
        //const user = mockUsers.find((u) => u.email === email && u.password === password)
        try {
          const response = await apiUser.login({ email, password })
          setCurrentUser(response.data.user)
          localStorage.setItem("currentUser", JSON.stringify(response.data.user))
          localStorage.setItem("token", response.data.access_token)
          resolve()
        } catch (e) {
          reject(new Error(String(e)))
        }
      }, 500)
    })
  }

  const register = async (name: string, email: string, password: string) => {
    // Simula chamada de API
    return new Promise<void>((resolve, reject) => {
      setTimeout(async () => {
        try {
          //const existingUser = mockUsers.find((u) => u.email === email)
          await apiUser.register({ name, email, password })
          /*
          const setUser = { id: user.id, name: user.name, email: user.email, role: user.role }
          setCurrentUser(setUser)
          
          if (existingUser) {
            reject(new Error("Email already in use"))
          } else {
            const newUser: UserProps = {
              id: `user-${Date.now()}`,
              name,
              email,
              password,
              role: "user",
            }
  
            // Em um aplicativo real, você enviaria isso para uma API
            //mockUsers.push(newUser)
  
            // Remove password antes de armazenar
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password: _, ...userWithoutPassword } = newUser
            setCurrentUser(userWithoutPassword)
          localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword))
            */
          resolve()
        } catch (e) {
          reject(new Error(`E-mail ou senha inválidos: ${e}`))
        }
      }, 500)
    })
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem("currentUser")
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado com AuthProvider");
  }
  return context;
}