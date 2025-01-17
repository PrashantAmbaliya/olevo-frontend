import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Scan from "./pages/Scan"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Details from "./pages/Details"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "scan",
        element: <Scan />,
      },
      {
        path: "details",
        element: <Details />,
      },
    ],
  },
])

const Routing: React.FC = () => {
  return <RouterProvider router={router} />
}

export default Routing
