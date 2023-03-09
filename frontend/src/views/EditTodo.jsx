import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { TodoForm } from "../Components/forms"
import axiosClient from "../helpers/AxiosClient"

export const EditTodo = () => {

  const [todo, setTodo] = useState(null)
  const {id} = useParams();

  const getTodo = async() =>{
    try {
      const {data} = await axiosClient.get(`/todos/${id}`);
      setTodo(data.data)
    } catch (error) {
    }  
  }

  useEffect(() => {
    getTodo()
  }, [])
  
  return (
    <div className="mt-5 row justify-content-center mt-5">
      {
        todo && <TodoForm action={"edit"} valuesTodo={todo} />
      }
    </div>
  )
}
