import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Header from './components/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';


export const JobsContext = createContext();

function App() {

const jobs = useLoaderData()
  return (
    <>
       <JobsContext.Provider value={jobs}>
       <Header></Header>
       <Outlet></Outlet>
       </JobsContext.Provider>
    </>
  )
}

export default App
