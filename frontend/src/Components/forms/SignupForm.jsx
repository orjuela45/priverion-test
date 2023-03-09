import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm";

export const SignupForm = () => {

  const {name, email, password, onInputChange, onResetForm} = useForm({
    name: "",
    email: "",
    password: "",
  })

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({name, email, password})
  }

  return (
    <form className="border border-dark rounded col-6 bg-white p-4 row justify-content-center" onSubmit={onSubmit}>
      <h1 className="text-center">Login</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" onChange={onInputChange} value={name} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" onChange={onInputChange} value={email} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" onChange={onInputChange} value={password} required/>
      </div>
      <div className="mb-3 text-center">
        <small>Do you have an account? <Link to={"/login"}>Login here</Link></small>
      </div>
      <button type="submit" className="btn btn-primary col-auto">Submit</button>
    </form>
  )
}
