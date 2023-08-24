import { createContext, useState } from "react";

export const AuthenticationContext = createContext({
  error: null,
  data: null,
  loading: false,
  jwt: '',
  setAuthState: () => { },
})

export default function AuthContext({
  children
}) {
  const [authState, setAuthState] = useState({
    loading: false,
    data: null,
    error: null,
    jwt: '',
  })

  return <AuthenticationContext.Provider value={{
    ...authState,
    setAuthState
  }}>
    {children}
  </AuthenticationContext.Provider>
}