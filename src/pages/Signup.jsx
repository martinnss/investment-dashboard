import React from 'react'

const Signup = () => {
  return (
    <div className='form-box'>
        <div className='form'>
            <h2>Save. Invest. Login<a href="">.</a> </h2>
            <p className='already-member'>Not part of the club? <a href="./Signup.jsx"> Signup</a> and save!</p>
            <div className='login form'>
                <form action='/signup' method='POST'>
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

export default Signup