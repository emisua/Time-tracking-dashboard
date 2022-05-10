import './App.css'
import React, { useState } from 'react'
import Menu from './components/Menu'
import GridCards from './components/GridCards'

const App = () => {
  const [ time, setTime ] = useState('daily')
  const updateTime = (value) => {
    return setTime(value)
  }

  return (
    <>
      <Menu time={time} updateTime={updateTime} />
      <GridCards time={time} updateTime={updateTime} />
    </>
  )
}

export default App
