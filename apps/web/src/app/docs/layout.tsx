"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const gettingStartedLinks = [
    { title: 'Overview', path: '/docs' },
    { title: 'Installation', path: '/docs/install' },
  ]

  const coreConceptsLinks = [
    { title: 'Features in Detail', path: '/docs/features' },
    { title: 'LLM Payload', path: '/docs/output' },
  ]

  const integrationsLinks = [
    { title: 'Frameworks Setup', path: '/docs/frameworks' },
    { title: 'MCP Server', path: '/docs/mcp' },
  ]

  return (
    <div className="docs-container">
      {/* Sidebar Navigation */}
      <aside className="docs-sidebar">
        <div className="sidebar-back-wrapper">
          <Link href="/" className="sidebar-back-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            Back to Home
          </Link>
        </div>
        <div className="sidebar-group">
          <h4 className="sidebar-title">Getting Started</h4>
          <ul className="sidebar-links">
            {gettingStartedLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  className={`sidebar-link ${pathname === link.path ? 'active' : ''}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-group">
          <h4 className="sidebar-title">Core Concepts</h4>
          <ul className="sidebar-links">
            {coreConceptsLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  className={`sidebar-link ${pathname === link.path ? 'active' : ''}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-group">
          <h4 className="sidebar-title">Integrations</h4>
          <ul className="sidebar-links">
            {integrationsLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  className={`sidebar-link ${pathname === link.path ? 'active' : ''}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="docs-content">
        <article className="docs-article">
          {children}
        </article>
      </main>
    </div>
  )
}
