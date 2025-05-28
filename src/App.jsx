import { useState } from 'react'
import DisplayCounter from './components/DisplayCounter';
import CounterControl from './components/CounterControl';

const App = () => {
  const [ counter, setCounter ] = useState(0);

  return (
    <>
      <DisplayCounter counter={counter} />
      <CounterControl counter={counter} setCounter={setCounter}/>
    </>
  )
}

export default App;