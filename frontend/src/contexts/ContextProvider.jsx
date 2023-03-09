import { useContext } from "react";
import { createContext, useState } from "react"

const StateContext = createContext({
  currentUser: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
})

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem("ACCES_TOKEN"))

  const setToken = (token) => {
    _setToken(token);
    token ? localStorage.setItem('ACCESS_TOKEN', token) : localStorage.removeItem("ACCES_TOKEN")
  }

  return (
    <StateContext.Provider value={{
      user,
      setUser,
      token,
      setToken
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)