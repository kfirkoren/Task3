import React, { useEffect } from 'react'
import './App.css'
import Register from './Comps/Register/Register'
import Login from './Comps/Login/Login'
import EditDetails from './Comps/EditDetails/EditDetails'
import Profile from './Comps/Profile/Profile'

function App() {
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    console.log('Users:', users)
  }, [])

  return (
    <div>
      <Profile />
      <Login />
      <Register />
      <EditDetails />
    </div>
  )
}

export default App
