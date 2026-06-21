import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import DocsLayout from './pages/DocsLayout'
import Overview from './pages/docs/Overview'
import Install from './pages/docs/Install'
import Features from './pages/docs/Features'
import Output from './pages/docs/Output'
import Frameworks from './pages/docs/Frameworks'
import './App.css'

function Navbar({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) {
  const location = useLocation()
  
  return (
    <nav className="navbar" style={{ padding: '1.5rem 2rem', margin: '0 auto', maxWidth: '1400px' }}>
      <Link to="/" className="nav-brand" style={{ textDecoration: 'none' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        <span>Observer AI</span>
      </Link>
      
      <div className="nav-links">
        <Link to="/docs">Documentation</Link>
        {location.pathname === '/' && (
          <>
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
          </>
        )}
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button onClick={toggleTheme} className="theme-toggle" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', cursor: 'pointer' }}>
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          )}
        </button>
        <a href="https://github.com/virajsinh47/observer-ai" target="_blank" rel="noreferrer" className="github-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
          Star on GitHub
        </a>
      </div>
    </nav>
  )
}

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <BrowserRouter>
      <div style={{ borderBottom: '1px solid var(--glass-border)' }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<Overview />} />
          <Route path="install" element={<Install />} />
          <Route path="features" element={<Features />} />
          <Route path="output" element={<Output />} />
          <Route path="frameworks" element={<Frameworks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
