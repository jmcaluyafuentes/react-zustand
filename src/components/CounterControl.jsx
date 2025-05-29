import React from 'react'
import useCounter from '../../stores/counterStore'

const CounterControl = () => {
  const { incrementCounter } = useCounter();

  return (
    <button onClick={incrementCounter}>Increment Counter</button>
  )
}

export default CounterControl