import { createBrowserRouter, Navigate } from "react-router-dom";
import { DefaultLayout, GuestLayout } from "./Components/layouts";
import { CreateTodo, Login, MineTodos, NotFound, PublicTodos, Signup } from "./views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/mine"} />
      },
      {
        path: "/mine",
        element: <MineTodos />
      },
      {
        path: "/public",
        element: <PublicTodos />
      },
      {
        path: "/create",
        element: <CreateTodo />
      },
    ]
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