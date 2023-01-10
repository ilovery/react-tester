import React from "react"

import { Route, Routes } from "react-router-dom"

import TodoContainer from "./TodoContainer"
import About from "./pages/About"
import NotMatch from "./pages/NotMatch"
import Navbar from "./NavBar"



const App = () => {

  return (
    <>
        <Navbar /> 
        <Routes>
        <Route path = "/" exact="true" element = {<TodoContainer />}>  
        </Route>
        <Route path="/about/*" element = {<About />} >
        </Route>
        <Route path="*" element = {<NotMatch />}>
        </Route>
        </Routes>
    </>
  )
}

export default App