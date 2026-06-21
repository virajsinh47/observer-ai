import React from 'react'
import { Eye, Terminal, Layers, Crosshair, Code2, Github } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">
          <Eye size={28} />
          <span>Observer AI</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#integration">Integration</a>
        </div>
        <a href="https://github.com/virajsinh47/observer-ai" target="_blank" rel="noreferrer" className="github-btn">
          <Github size={18} />
          Star on GitHub
        </a>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-badge">
          <span className="badge-pulse"></span>
          v1.0 is now live — Open Source
        </div>
        <h1 className="hero-title">
          Screenshots are <span className="gradient-text">dead.</span><br />
          Point. Click. Code.
        </h1>
        <p className="hero-subtitle">
          The ultimate visual bridge between human designers and AI coding assistants. 
          Stop guessing. Feed Cursor, Copilot, and Claude exact DOM math, layout context, and typography data instantly.
        </p>
        
        <div className="hero-cta">
          <a href="https://github.com/virajsinh47/observer-ai" target="_blank" rel="noreferrer" className="btn-primary">
            <Github size={20} />
            View Documentation
          </a>
          <a href="#features" className="btn-secondary">
            See how it works
          </a>
        </div>

        {/* Code Window Mockup */}
        <div className="code-window">
          <div className="code-header">
            <div className="code-dot dot-red"></div>
            <div className="code-dot dot-yellow"></div>
            <div className="code-dot dot-green"></div>
          </div>
          <div className="code-content">
            <span className="code-comment">### 🔵 Annotation 1: button 'Submit Order'</span><br/><br/>
            <span className="code-keyword">**Visual Context:**</span> Size: 120px x 44px (at X:450px, Y:800px) | Margin: 0px | Padding: 12px 24px<br/>
            <span className="code-keyword">**Typography & Color:**</span> Color: <span className="code-value">rgb(255, 255, 255)</span> | Background: <span className="code-value">rgb(59, 130, 246)</span> | Font: 600 16px Inter<br/>
            <span className="code-keyword">**Layout Context:**</span> flex (row) [gap: 8px]<br/>
            <span className="code-keyword">**Parent Constraints:**</span> display: flex, flexDirection: column, alignItems: center<br/>
            <span className="code-keyword">**Component Source:**</span> <span className="code-string">`&lt;ObserverProvider&gt; &lt;App&gt; &lt;CheckoutForm&gt; [src/components/Checkout.tsx:42:10]`</span><br/>
            <span className="code-keyword">**User Feedback:**</span> <span className="code-string">'make the background color lighter and increase the font size'</span><br/>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">Why Observer is <span className="gradient-text">Better</span></h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Crosshair size={24} />
            </div>
            <h3 className="feature-title">Zero Hallucinations</h3>
            <p className="feature-desc">
              AI models are visually blind. Observer extracts the exact X/Y coordinates, padding, margins, and flex gaps so the AI never guesses.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Terminal size={24} />
            </div>
            <h3 className="feature-title">Deep Component Tracing</h3>
            <p className="feature-desc">
              Instantly know exactly which React, Vue, or Angular file rendered the element, right down to the exact line number.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Layers size={24} />
            </div>
            <h3 className="feature-title">Parent Constraints</h3>
            <p className="feature-desc">
              Captures the parent container's Grid and Flex rules, so the AI knows exactly why your CSS isn't working.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="steps-section">
        <div className="container">
          <h2 className="section-title">Drop-in Workflow</h2>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Toggle Observer Mode</h3>
                <p>Press <code>Shift + O</code> anywhere in your app to activate the visual inspector.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Point & Click</h3>
                <p>Hover over the broken UI element, click it, and type what you want the AI to fix.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Paste & Let AI Code</h3>
                <p>Press <code>Shift + C</code> to copy the rich Markdown payload. Paste it into Cursor or Claude Code and watch it write flawless CSS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Eye size={32} color="var(--accent-cyan)" />
          <p className="footer-text">
            Built with precision by <span className="footer-creators">Zala Viraj</span> and <span className="footer-creators">Sakshi Patel</span>
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Open Source under the MIT License.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
