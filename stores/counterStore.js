import { create } from 'zustand';

const useCounter = create(set => {
  return {
    counter: 0,
    incrementCounter: () => set(state => ({ counter: state.counter + 1 })),
    resetCounter: () => set({ counter: 0 })
  }
})

export default useCounter;