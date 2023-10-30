import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { IAuthContext } from '../../models/interfaces/auth-context.interface'
import { User } from '@auth0/auth0-react'
import {
  UserCredential,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../../services/firebase/config/firebase-auth.config'

interface UserContextState {
  isAuthenticated: boolean
  isLoading: boolean
  id?: string
}

const UserStateContext = createContext<UserContextState>({} as UserContextState)

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)

function useAuth(): IAuthContext {
  return useContext(AuthContext)
}

const AuthProvider = (props: any) => {
  const [user, setUser] = useState<User | null>(null)

  function signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    //function that firebase notifies you if a user is set
    const unsubsrcibe = auth.onAuthStateChanged((user: any) => {
      setUser(user)
    })
    return unsubsrcibe
  }, [])

  const values = {
    signUp,
    user,
    signIn,
    resetPassword,
    auth
  }

  return <AuthContext.Provider value={values} {...props} />
}

const useUserContext = (): UserContextState => {
  return useContext(UserStateContext)
}

export { AuthProvider, useUserContext, useAuth }
