
export const Pagination = ({data, handleChangeUrl}) => {

  const changeUrl = (url) =>{
    if (!url) return
    handleChangeUrl(url)
  }

  return (
    <>
      <small className="mb-5">Current page: {data.current_page} | From: {data.from} to {data.to} | Last page: {data.last_page} | Total: {data.total}</small>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {
            data.links.map((link) => (
              <li key={link.label} className={`page-item ${link.active && 'active'}`} onClick={() => changeUrl(link.url)}><span className="page-link" >{link.label}</span></li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}
