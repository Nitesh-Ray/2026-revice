import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // 👈 Import this
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <h1>Day 13 – Styling with Tailwind CSS</h1>
    <BrowserRouter>   {/* 👈 Wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)