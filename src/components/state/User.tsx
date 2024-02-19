import React, { useState } from 'react'

type AuthUser = {
  name: string;
  email: string;
}

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
        name: 'Saqi',
        email: 'saqib@gmail.com'
      })
  }


  return (
    <div>
    <button onClick={handleLogin}>Login</button>
    <div>User is {user?.name}</div>
    <div>Email is {user?.email}</div>
</div>
  )
}

export default User