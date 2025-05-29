import React from 'react'
import useCounter from '../../stores/counterStore'

const CounterControl = () => {
  const { incrementCounter, resetCounter } = useCounter();

  return (
    <>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={resetCounter}>Reset counter</button>
    </>
  )
}

export default CounterControl