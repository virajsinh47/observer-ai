"use client"

import { useState } from 'react'

const frameworks = [
  { id: 'react', label: 'React', pkg: '@observer-ai/react' },
  { id: 'next', label: 'Next.js', pkg: '@observer-ai/next' },
  { id: 'vue', label: 'Vue', pkg: '@observer-ai/vue' },
  { id: 'angular', label: 'Angular', pkg: '@observer-ai/angular' },
  { id: 'ionic', label: 'Ionic', pkg: '@observer-ai/ionic' },
  { id: 'vanilla', label: 'HTML/CSS', pkg: 'vanilla' },
]

const packageManagers = [
  { id: 'npm', label: 'npm', prefix: 'npm install', suffix: '--save-dev' },
  { id: 'yarn', label: 'yarn', prefix: 'yarn add', suffix: '-D' },
  { id: 'pnpm', label: 'pnpm', prefix: 'pnpm add', suffix: '-D' },
  { id: 'bun', label: 'bun', prefix: 'bun add', suffix: '-D' }
]

export default function QuickStart() {
  const [activeFramework, setActiveFramework] = useState('react')
  const [activePm, setActivePm] = useState('npm')
  const [copied, setCopied] = useState(false)

  const activePkg = frameworks.find(f => f.id === activeFramework)?.pkg
  const pm = packageManagers.find(p => p.id === activePm)
  
  let command = ''
  if (activeFramework === 'vanilla') {
    command = '<script src="https://cdn.observer.ai/v1.js"></script>'
  } else {
    command = `${pm?.prefix} ${activePkg} ${pm?.suffix}`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="quick-start-wrapper">
      <div className="quick-start-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>Quick Start</h2>
      </div>

      <div className="qs-window">
        <div className="qs-topbar">
          <div className="qs-left">
            <div className="qs-dots">
              <div className="code-dot dot-red"></div>
              <div className="code-dot dot-yellow"></div>
              <div className="code-dot dot-green"></div>
            </div>
            
            <div className="qs-tabs">
              {frameworks.map(f => (
                <button
                  key={f.id}
                  className={`qs-tab ${activeFramework === f.id ? 'active' : ''}`}
                  onClick={() => setActiveFramework(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="qs-right">
            <div className="qs-beta-badge">BETA</div>
          </div>
        </div>

        {activeFramework !== 'vanilla' && (
          <div className="pm-tabs">
            {packageManagers.map(p => (
              <button
                key={p.id}
                className={`pm-tab ${activePm === p.id ? 'active' : ''}`}
                onClick={() => setActivePm(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}

        <div className="qs-content">
          <div className="qs-comment">
            {activeFramework === 'vanilla' 
              ? '<!-- Drop this script tag into your index.html head. -->'
              : `# Install Observer AI as a dev dependency in your ${frameworks.find(f => f.id === activeFramework)?.label} project.`}
          </div>
          <div className="qs-command-row">
            <span className="qs-prompt">{activeFramework === 'vanilla' ? '' : '$'}</span>
            <span className="qs-command">{command}</span>
            <button className="qs-copy" onClick={handleCopy} aria-label="Copy command">
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      <p className="qs-footer">
        Works with React, Next.js, and Vite. Just drop it into your root layout.
      </p>

      <style jsx>{`
        .quick-start-wrapper {
          margin: 4rem auto 0;
          max-width: 850px;
          text-align: left;
        }
        .quick-start-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .qs-window {
          background: var(--code-bg);
          border: 1px solid var(--code-border);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--card-shadow);
        }
        .qs-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid var(--code-border);
        }
        .qs-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .qs-dots {
          display: flex;
          gap: 0.5rem;
        }
        .qs-tabs {
          display: flex;
          gap: 0.25rem;
        }
        .qs-tab {
          padding: 0.375rem 0.75rem;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #94a3b8; /* Forced light slate for dark topbar */
          border-radius: 6px;
          transition: all 0.2s;
        }
        .qs-tab:hover {
          color: #f8fafc;
          background: rgba(255, 255, 255, 0.05);
        }
        .qs-tab.active {
          background: rgba(99, 102, 241, 0.15);
          color: var(--brand-accent);
        }
        .qs-right {
          display: flex;
          align-items: center;
        }
        .qs-beta-badge {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 0.25rem 0.5rem;
          border: 1px solid var(--code-border);
          border-radius: 4px;
          color: var(--text-secondary);
        }
        .qs-content {
          padding: 2rem 1.5rem;
          position: relative;
        }
        .qs-comment {
          color: #64748b;
          font-family: var(--font-mono);
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }
        .qs-command-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: var(--font-mono);
          font-size: 1rem;
        }
        .qs-prompt {
          color: var(--brand-accent);
          font-weight: bold;
        }
        .qs-command {
          color: #e2e8f0;
          flex: 1;
        }
        .qs-copy {
          color: #64748b;
          padding: 0.5rem;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .qs-copy:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.1);
        }
        .qs-footer {
          margin-top: 1rem;
          text-align: center;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  )
}
