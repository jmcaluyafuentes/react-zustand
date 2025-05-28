import React from 'react'

const CounterControl = ({ counter, setCounter }) => {
  return (
    <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
  )
}

export default CounterControl