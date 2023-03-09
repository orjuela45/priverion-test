import { useState } from "react";
import axiosClient from "../../helpers/AxiosClient";
import { useForm } from "../../hooks/useForm";

export const TodoForm = ({action = 'create', valuesTodo = {}}) => {
  
  const {title, description, onInputChange, onResetForm} = useForm({
    title: valuesTodo.title ?? "",
    description: valuesTodo.description ?? ""
  })

  const [errors, setErrors] = useState()

  const onSubmit = async (e) => {
    setErrors()
    e.preventDefault();
    const payload = {
      title,
      description
    };
    try {
      if (action == 'create')
        await axiosClient.post("/todos", payload);
      else
        await axiosClient.put("/todos/"+valuesTodo.id, payload);
      window.location.href = "/mine"
    } catch (error) {
      console.log(error)
      const {errors, message} = error.response.data
      setErrors(errors ?? {message: [message]})
    }
  }

  return (
    <form className="border border-dark rounded col-6 bg-white p-4 row justify-content-center" onSubmit={onSubmit}>
      <h1 className="text-center">{action} todo</h1>
      {errors &&
        <div className="alert alert-danger">
          <ul>
            {Object.keys(errors).map(key => (
              <li key={key}>{errors[key][0]}</li>
            ))}
          </ul>
        </div>
      }
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" name="title" onChange={onInputChange} value={title} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" name="description" onChange={onInputChange} value={description} />
      </div>
      <button type="submit" className="btn btn-primary col-auto">{action}</button>
    </form>
  )
}
