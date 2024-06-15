import React, { useState } from 'react'

const Login = () => {
    const [username, setusername] = useState();
    const [password, setpassword] = useState();

    const handlelogin = (e) => {
        e.preventdefault();
        console.log(username,password)
    }
  return (
      <>
          <h2>Login</h2>
          <form onSubmit={handlelogin}>
              <input
                  type='text'
                  placeholder='username'
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  required
              />
              <input type='password' placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)}
                  required />
              <button type='submit' >Submit</button>
          </form>
          
      
      
      </>
  )
}

export default Login