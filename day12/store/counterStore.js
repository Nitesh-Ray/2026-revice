import {create} from "zustand";

// Create a store that returns a custom hook
export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1})),
  reset: () => set({count: 0}),
  addBy: (amount) => set((state) => ({count: state.count + amount})),
}));
