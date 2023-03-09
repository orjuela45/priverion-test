export const ItemsDefault = ({user, handleLogout}) => {
  return (
    <>
      <span className="text-white me-4">Hola {user.name}</span>
      <a onClick={handleLogout} className="navbar-brand btn">logout</a>
    </>
  )
}
