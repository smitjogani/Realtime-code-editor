import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../src/Pages/Home/Home"
import EditorPage from "./Pages/Editor/EditorPage"
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success:{
              theme: {
                primary: '#4aed88'
              }
            }
          }}
        />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editor/:roomId' element={<EditorPage />} />
      </Routes>
    </>
  )
}

export default App