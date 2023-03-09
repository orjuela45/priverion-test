import { useState } from "react";
import { Link } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../helpers/AxiosClient";
import { useForm } from "../../hooks/useForm";

export const SignupForm = () => {

  const {setUser, setToken} = useStateContext()

  const {name, email, password, onInputChange, onResetForm} = useForm({
    name: "",
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState()

  const onSubmit = async (e) => {
    setErrors()
    e.preventDefault();
    const payload = {
      name,
      email,
      password
    };
    try {
      const {status, data } = await axiosClient.post("/signup", payload);
      if(status === 200){
        setUser(data.user);
        setToken(data.token);
      }
    } catch (error) {
      const {errors} = error.response.data
      setErrors(errors)
    }
  }

  return (
    <form className="border border-dark rounded col-6 bg-white p-4 row justify-content-center" onSubmit={onSubmit}>
      <h1 className="text-center">Login</h1>
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
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" onChange={onInputChange} value={name} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" onChange={onInputChange} value={email} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" onChange={onInputChange} value={password} />
      </div>
      <div className="mb-3 text-center">
        <small>Do you have an account? <Link to={"/login"}>Login here</Link></small>
      </div>
      <button type="submit" className="btn btn-primary col-auto">Submit</button>
    </form>
  )
}
