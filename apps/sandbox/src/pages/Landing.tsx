export default function Landing() {
  return (
    <>
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
            View GitHub
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
            </div>
            <h3 className="feature-title">Zero Hallucinations</h3>
            <p className="feature-desc">
              AI models are visually blind. Observer extracts the exact X/Y coordinates, padding, margins, and flex gaps so the AI never guesses.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            </div>
            <h3 className="feature-title">Deep Component Tracing</h3>
            <p className="feature-desc">
              Instantly know exactly which React, Vue, or Angular file rendered the element, right down to the exact line number.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
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
          <svg width="32" height="32" color="var(--accent-cyan)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          <p className="footer-text">
            Built with precision by <span className="footer-creators">Zala Viraj</span> and <span className="footer-creators">Sakshi Patel</span>
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Open Source under the MIT License.</p>
        </div>
      </footer>
    </>
  )
}
