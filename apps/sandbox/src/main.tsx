import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ObserverProvider } from '@observer-ai/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ObserverProvider>
      <App />
    </ObserverProvider>
  </StrictMode>,
)
