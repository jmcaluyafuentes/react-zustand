import { create } from 'zustand';

const useCounter = create(set => {
  return {
    counter: 0
  }
})

export default useCounter;