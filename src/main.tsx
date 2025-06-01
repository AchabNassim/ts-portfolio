import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import Background from './components/ui/background/Background.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Background />
    <App />
  </StrictMode>,
)
