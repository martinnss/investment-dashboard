import React from 'react'

import '../styles/login.css'

const Login = () => {
  return (
    <div className='form-box'>
        <div className='form'>
            <h2>Create new account<a href="">.</a> </h2>
            <p className='already-member'>Already a member? <a href="./Login.jsx"> Log in</a></p>
            <div className='login form'>
                <form action='/signup' method='POST'>
                    <label for="name">First name</label>
                    <input type="text" id="name" name="name" required />
                    <label for="lastname">Last name</label>
                    <input type="text" id="lastname" name="lastname" required />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    
                </form>
            </div>
            <button type="submit" className='button-primary'>Sign up</button>
        </div>
    </div>
  )
}

export default Login