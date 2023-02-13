import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Counter from './Counter'
import Todo from './Todo'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/todos" element={<Todo/>} />
    </Routes>
  )
}

export default AllRoutes