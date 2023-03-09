import { Link } from "react-router-dom"

export const ItemsDefault = ({user, handleLogout}) => {
  return (
    <div className="row justify-content-between">
      <div className="col-auto">
        <Link to={"/mine"} className='col-auto navbar-brand'>My todos</Link>
        <Link to={"/public"} className='col-auto navbar-brand'>Public todos</Link>
      </div>
      <div className="col-auto">
        <span className="text-white me-4">Hola {user.name}</span>
        <a onClick={handleLogout} className="navbar-brand btn">logout</a>
      </div>
    </div>
  )
}
