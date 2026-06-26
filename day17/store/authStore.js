// src/store/authStore.js,      -export to ProctedRoute.jsx & LoginPage.jsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null, // { username } or null
      login: (username) => set({ user: { username } }),
      logout: () => set({ user: null }),
    }),
    { name: 'auth-storage' }
  )
);