import { Link, Outlet, useLocation } from 'react-router-dom'
import './DocsLayout.css'

export default function DocsLayout() {
  const location = useLocation()

  const navLinks = [
    { title: 'Overview', path: '/docs' },
    { title: 'Install', path: '/docs/install' },
    { title: 'Features', path: '/docs/features' },
    { title: 'Output', path: '/docs/output' },
    { title: 'Frameworks', path: '/docs/frameworks' }
  ]

  return (
    <div className="docs-container">
      {/* Sidebar */}
      <aside className="docs-sidebar">
        <div className="sidebar-group">
          <h3 className="sidebar-title">Getting Started</h3>
          <ul className="sidebar-links">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`sidebar-link ${location.pathname === link.path ? 'active' : ''}`}
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
        <div className="docs-article">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
