import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
import axiosClient from "../../helpers/AxiosClient";
import { Navbar } from "../navbar/Navbar";

export const DefaultLayout = () => {

  const {token, setUser} = useStateContext();

  if(!token){
    return <Navigate to={"/login"} />
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
        setUser(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
