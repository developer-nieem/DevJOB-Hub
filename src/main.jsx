import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './components/Statistics/Statistics'
import Home from './components/Home/Home'
import AppliedJob from './components/AppliedJob/AppliedJob'
import Blog from './components/Blog/Blog'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    children: [
      {
        path:'/',
        element: <Home></Home> ,
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied-job',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
