import { Link } from "react-router-dom"

export const ItemsGuest = () => {
  return (
    <>
      <Link to={"/login"} className="navbar-brand">Login</Link>
      <Link to={"/signup"} className="navbar-brand">Signup</Link>
    </>
  )
}
