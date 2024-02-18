import React from 'react'
import './App.css'
import Register from './Comps/Register/Register.jsx'
import Login from './Comps/Login/Login.jsx'
import { Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link> |<Link to="/register">Register</Link> |
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
