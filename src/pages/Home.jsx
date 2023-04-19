import React from 'react'
import '../styles/homepage.css'

const Home = () => {
    return (
        <div>
            <div className='intro'>
                <div className="circle top-left"></div>
                <div className="circle bottom-right"></div>
                <h1 className='title-intro'>Advanced for wealth management. <br /> Accessible for everyone.</h1>
                <p className='title-subtitle'>Take control of your financial future with our user-friendly investment tracker. <br /> Our intuitive tools make monitoring and managing your investments easy, so you can grow your wealth with confidence</p>
                <div className='intro-buttons'>
                    <button className='button-primary'>Sign Up</button>
                    <button className='button-secondary'>Login</button>
                </div>
            </div>
            <h1>revisar mobile</h1>
        </div>
    )
}

export default Home