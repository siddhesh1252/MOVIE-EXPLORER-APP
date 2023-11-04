import React from 'react'
import Home from "./Home"
import Single from "./Single"
import {Routes,Route} from "react-router-dom";
import Error from "./Error"

const App = () => {
  return (
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Error/>}/>  
      <Route path="movie/:id" element={<Single/>}/>
      </Routes>
  )
}

export default App