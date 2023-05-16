// Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

// Routes
import Root from "./routes/root"
import Error404 from "./routes/error-404"
import Home from "./routes/home"
import Buy from "./routes/buy"

// css
import "./index.css"

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error404/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "buy",
        element: <Buy/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
