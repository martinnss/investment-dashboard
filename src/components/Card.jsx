import React from 'react'

import '../styles/card.css'

const Card = (user) => {
  return (
    <div className="card">
        <img src={user.images[0]} alt={user.title} />
        <div className="user-info">
            <div>
                <p>${user.price}</p>
                <p>{user.title}</p>
            </div>
        </div>
    </div>
  )
}

export default Card