import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../src/Pages/Home/Home"
import EditorPage from "./Pages/Editor/EditorPage"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editor/:roomId' element={<EditorPage/>}/>
      </Routes>
    </>
  )
}

export default App