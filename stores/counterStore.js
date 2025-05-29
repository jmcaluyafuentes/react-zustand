import { create } from 'zustand';

const useCounter = create(set => {
  return {
    counter: 0,
    incrementCounter: () => set(state => ({...state, counter: state.counter + 1}))
  }
})

export default useCounter;