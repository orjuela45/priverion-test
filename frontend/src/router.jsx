import { createBrowserRouter } from "react-router-dom";
import { Login, NotFound, Signup } from "./views";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router;