import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecentStore = create(
  persist(
    (set) => ({
      recent: [],
      addRecent: (product) =>
        set((state) => {
          const filtered = state.recent.filter((p) => p.id !== product.id);
          return { recent: [product, ...filtered].slice(0, 20) };
        }),
    }),
    { name: 'recent-products' }
  )
);