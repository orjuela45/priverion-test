import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider";
import { Navbar } from "../navbar/Navbar";

export const GuestLayout = () => {

  const {token} = useStateContext();

  if(token){
    return <Navigate to={"/"} />
  }
  
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
