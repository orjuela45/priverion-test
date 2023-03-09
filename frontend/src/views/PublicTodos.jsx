import { useEffect, useState } from "react";
import { Pagination } from "../Components/pagination/Pagination";
import axiosClient from "../helpers/AxiosClient";

export const PublicTodos = () => {

  const [todos, setTodos] = useState([])
  const [pagination, setPagination] = useState(null)
  const [url, setUrl] = useState("/todos/public")
  
  useEffect(() => {
    getTodos();
  },[])

  const getTodos = async() => {
    try {
      const {data, status} = await axiosClient.get(url);
      if(status == 200) {
        setTodos(data.data)
        setPagination(data.meta)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // TODO no se esta cambiando el url, tengo que pulsar dos veces
  const handleChangeUrl = (newURL) => {
    setUrl(newURL)
    getTodos();
  }

  return (
    <div className="mt-5">
      <h3>Public todo list</h3>
      <table className="table table-striped border">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">User</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.user && todo.user.name}</td>
                <td>{todo.status ? 'Open' : 'Closed'}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {
        pagination && <Pagination data={pagination} handleChangeUrl={handleChangeUrl}/>
      }
    </div>
  )
}
