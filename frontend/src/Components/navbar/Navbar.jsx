import { Link } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../helpers/AxiosClient";

export const Navbar = () => {

  const {token, setUser, setToken} = useStateContext()

  const handleLogout = async() => {
    const {status} = await axiosClient.post("/logout")
    if (status === 204){
      setUser({})
      setToken(null)
    }
  }

  let itemNavbar = (
    <>
      <Link to={"/login"} className="navbar-brand">Login</Link>
      <Link to={"/signup"} className="navbar-brand">Signup</Link>
    </>
  )
  if (token){
    itemNavbar = (<a onClick={handleLogout} className="navbar-brand btn">logout</a>)
  }

  return (
    <nav className="navbar navbar-dark bg-dark ps-5 pe-5 p-2">
      <a className="navbar-brand" href="/">Priverion Test</a>
      <div className="justify-content-end">
        {
          itemNavbar
        }
      </div>
    </nav>
  )
}
