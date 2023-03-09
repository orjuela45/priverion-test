import { Link } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../helpers/AxiosClient";
import { ItemsDefault } from "./ItemsDefault";
import { ItemsGuest } from "./ItemsGuest";

export const Navbar = () => {

  const {token, setUser, setToken, user} = useStateContext()

  const handleLogout = async() => {
    const {status} = await axiosClient.post("/logout")
    if (status === 204){
      setUser({})
      setToken(null)
    }
  }
  
  return (
    <nav className="navbar navbar-dark bg-dark ps-5 pe-5 p-2">
      <a className="navbar-brand col-3" href="/">Priverion Test</a>
      <div className="justify-content-end col-8">
        {
          token ? <ItemsDefault user={user} handleLogout={handleLogout} /> : <ItemsGuest />
        }
      </div>
    </nav>
  )
}
