import useCounter from '../../stores/counterStore'

const DisplayCounter = () => {
  const counter = useCounter(state => state.counter); // Just returning the counter from useCounter hook

  return (
    <h2>Count: {counter}</h2>
  )
}

export default DisplayCounter