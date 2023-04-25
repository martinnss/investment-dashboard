import React from 'react'
import Card from '../components/Card'
import '../styles/dashboard.css'


const Dashboard = () => {
    return (
        <div>
            <div>
                <div className='pie-chart'>
                </div>
                <div className='add-more'>
                </div>
            </div>
            <div className='dashboard'>
                <div className='line-graph'>
                </div>
                <div className='cards'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Dashboard