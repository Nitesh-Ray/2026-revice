import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DarkModeToggle from './DarkModeToggle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Day 3 – State & Events (useState)</h1>
    {/* <App /> */}
    <DarkModeToggle />
  </StrictMode>,
)