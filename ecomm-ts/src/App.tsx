import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Components
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home"
import AllProducts from "./pages/AllProducts"
import AllCategories from "./pages/AllCategories"

import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <AllProducts />,
    },
    {
      path: "/categories",
      element: <AllCategories />,
    },
  ])

  return (
    <>
    <RouterProvider router={router} />
    <Provider store={store}>
      <Navbar />
      <Footer />
    </Provider>
    </>
  )
}

export default App
