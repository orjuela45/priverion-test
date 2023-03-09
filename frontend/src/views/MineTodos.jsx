import { useEffect, useState } from "react"
import axiosClient from "../helpers/AxiosClient"

export const MineTodos = () => {

  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    getTodos();
  },[])

  const getTodos = async() => {
    try {
      const {data, status} = await axiosClient.get("/todos");
      if(status == 200) setTodos(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCloseTodo = async(id) => {
    try {
      const {status} = await axiosClient.put(`/todos/close/${id}`);
      if(status == 200) getTodos()
    } catch (error) {
      console.log(error)
    }
  }

  const handleSwitchShare = async(id) => {
    try {
      const {status} = await axiosClient.put(`/todos/public/${id}`);
      if(status == 200) getTodos()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteTodo = async(id) => {
    try {
      const {status} = await axiosClient.delete(`/todos/${id}`);
      if(status == 200) getTodos()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mt-5">
      <h3>My Todo list</h3>
      <table className="table table-striped border">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Share</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.status ? 'Open' : 'Closed'}</td>
                <td>{todo.public ? 'Public' : 'Private'}</td>
                <td>
                  {
                    todo.status ? <button className="btn btn-success m-1" onClick={() => handleCloseTodo(todo.id)}>Close</button> : ''
                  }
                  <button className="btn btn-primary m-1" onClick={() => handleSwitchShare(todo.id)}>{todo.public ? 'Private' : 'Public'}</button>
                  <button className="btn btn-danger m-1" onClick={() => handleDeleteTodo(todo.id)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
