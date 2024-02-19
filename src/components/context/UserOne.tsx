import React, { useContext } from 'react'
import { UserContext } from './UserContext'


const UserOne = () => {
  const userContext = useContext(UserContext)

  const handleLogin = () => {
      userContext.setUser({
        name: 'Saqib',
        email: 'Saqib@gmail.com'
      })
  }
  const handleLogout = () => {
      userContext.setUser(null)
  }


  return (
    <div>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>User is {userContext.user?.name}</div>
    <div>Email is {userContext.user?.email}</div>
</div>
  )
}

export default UserOne