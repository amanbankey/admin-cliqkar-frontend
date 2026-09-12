import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)
 const [mode, setMode] = useState("login");
  return (
    <>
      <Routes> 
        <Route path="/" element={<Layout />}>
       
         <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
   
         </Route>
      </Routes>
    </>
  )
}

export default App
