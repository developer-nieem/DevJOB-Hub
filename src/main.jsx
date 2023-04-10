import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './components/Statistics/Statistics'
import Home from './components/Home/Home'
import AppliedJob from './components/AppliedJob/AppliedJob'
import Blog from './components/Blog/Blog'
import getFeatureJobs from './loaders/featuresJobs'
import JobDetails from './components/Home/JobDetails'
import ErrorPage from './components/ErrorPage/ErrorPage'



const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: getFeatureJobs,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        
        
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
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
      }
    ]
    },
      
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
