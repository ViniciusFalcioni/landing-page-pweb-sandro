import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/index.tsx'
import './styles/index.css'
import './styles/utility.css'
import './styles/buttons.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
