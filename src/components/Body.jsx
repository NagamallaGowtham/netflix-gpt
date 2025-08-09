import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            errorElement: <Error />,
        },
        {
            path: "/browse",
            element: <Browse />,
            errorElement: <Error />
        },
        {
            path: "/error",
            element: <Error />,
        },
        {
            path: "*",
            element: <Error />
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body