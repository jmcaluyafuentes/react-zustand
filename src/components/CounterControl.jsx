import useCounter from "../../stores/counterStore";

const CounterControl = () => {
  // Refactor: Pull out the functions individually from useCounter by passing a callback function.
  // The previous method where we call the useCounter without any argument and deconstructing the returned object 
  // is not efficient since the component triggers a re-render every time any state in the store changes
  // even if that is not related to what the component needs.
  const incrementCounter = useCounter(state => state.incrementCounter);
  const resetCounter = useCounter(state => state.resetCounter);

  return (
    <>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={resetCounter}>Reset counter</button>
    </>
  );
};

export default CounterControl;
