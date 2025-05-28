import React from 'react'
import useCounter from '../../stores/counterStore'

const DisplayCounter = () => {
  const { counter } = useCounter();

  return (
    <h2>Count: {counter}</h2>
  )
}

export default DisplayCounter