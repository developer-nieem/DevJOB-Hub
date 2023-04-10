import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Header from './components/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const JobsContext = createContext();

function App() {

const jobs = useLoaderData()
  return (
    <>
       <JobsContext.Provider value={jobs}>
       <Header></Header>
       <Outlet></Outlet>
       <Footer></Footer>
       </JobsContext.Provider>
       <ToastContainer></ToastContainer>
    </>
  )
}

export default App
