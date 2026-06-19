import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Day 12 – Zustand (Simple Global State, No Provider) </h1>
    <App />
  </StrictMode>,
)