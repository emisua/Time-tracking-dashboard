import React from 'react'
import Card from './Card'
import data from '../../data.json'

function GridCards({ time }) {
  return data.map((bloque, index) => {
    const iconImg = bloque.title.toLocaleLowerCase().replace(' ', '-')
    return (
      <Card
        key={index}
        className={bloque.title.toLowerCase().replace(' ', '-')}
        title={bloque.title}
        actualHours={bloque.timeframes[time].current}
        prevHours={bloque.timeframes[time].previous}
        icon={iconImg}
        time={time}
      />
    )
  })
}

export default GridCards
