import React, { useState } from 'react'

const Signup = () => {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [dob, setdob] = useState();
    const [username, setusername] = useState();
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();

    const handlesignup = (e) => {
        e.preventdefault();
        console.log(name,username,password)
    }

  return (
      <>
          <form
              onSubmit={handlesignup}
              
          >
              <input
                  type='name'
                  onChange={(e) => setname(e.target.value)}
                  required
                  value={name}
              placeholder='Enter your name'
              />
              <input type='email'
                  onChange={(e) => setemail(e.target.value)}
                  required
                  value={email}
                  placeholder='enter your email'
              />
              <input
                  type='date'
                  onChange={(e) => setdob(e.target.value)}
                  required
                  value={Date}
                  placeholder='enter your date of birth'
              />
              <input type='text'
                  onChange={(e) => setusername(e.target.value)}
                  required
                  value={username}
              placeholder='enter your username'/>
              <input type='password'
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  placeholder='enter your password'
                  required />
              <input type='password'
                  onChange={(e) => setconfirmpassword(e.target.value)}
                  required
                  placeholder='enter confirm password'
                  value={confirmpassword} />
              <button type='submit'>Signup</button>
          </form>
      
      </>
  )
}

export default Signup