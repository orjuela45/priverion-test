import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout, GuestLayout } from "./Components/layouts";
import { Login, NotFound, Signup } from "./views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: []
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router;