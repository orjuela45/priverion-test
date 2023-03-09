import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
import { Navbar } from "../navbar/Navbar";

export const DefaultLayout = () => {

  const {token} = useStateContext();

  if(!token){
    return <Navigate to={"/login"} />
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
