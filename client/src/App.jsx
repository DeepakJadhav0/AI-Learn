import { createBrowserRouter } from "react-router"
import Navbar from "./pages/auth/navbar/AuthNavbar"
import LoginPage from "./pages/auth/login/LoginPage"
import AuthLayout from "./pages/auth/AuthLayout"
import RegisterPage from "./pages/auth/register/RegisterPage"
import { RouterProvider } from "react-router-dom"

function App() {

  const routes = createBrowserRouter([
    {
      path : "/auth",
      element : <AuthLayout/>,
      children : [
        {
          index: true,  
          path : "login",
          element : <LoginPage/>
        },
        {
          path : "signup",
          element : <RegisterPage/>
        },
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
