import { createBrowserRouter } from "react-router-dom";
import { Login, Signup } from "./views";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signup",
    element: <Signup />
  },
])

export default router;