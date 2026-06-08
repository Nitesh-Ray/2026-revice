import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Day 5 – Forms, Validation & Controlled Components </h1>
    <App />
  </StrictMode>,
)