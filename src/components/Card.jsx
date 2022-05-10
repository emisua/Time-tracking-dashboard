import React from 'react'
import './Card.css'

const Card = ({ className, title, actualHours, prevHours, icon, time }) => {
  return (
    <div className={`card ${className}`}>
      <div className='icon'>
        <img src={`./images/icon-${icon}.svg`} alt={title} />
      </div>
      <div className='content'>
        <h3>{title}</h3>
        <img className='ellipsis' src='./images/icon-ellipsis.svg' alt='More...' />
        <h1>{actualHours}hrs</h1>
        <p>
          Last {time === 'daily' ? 'day' : time === 'weekly' ? 'week' : 'month'} - {prevHours} hrs
        </p>
      </div>
    </div>
  )
}

export default Card
