import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Pages/Home";
import Mens from "./components/Pages/Mens";
import Womens from "./components/Pages/Womens";
import Kids from "./components/Pages/Kids";
import Login from "./components/Pages/Login";
import Cart from "./components/Pages/Cart";


const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      { path: "/", element:<Home/> },
      { path: "/mens", element:<Mens/> },
      { path: "/womens", element:<Womens/> },
      { path: "/kids", element:<Kids/> },
      { path: "/login", element:<Login/> },
      { path: "/cart", element:<Cart/> },
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App