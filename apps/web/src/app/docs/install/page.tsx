"use client"

import { useState } from 'react'

const frameworks = [
  { id: 'react', label: 'React', pkg: '@observer-ai/react' },
  { id: 'next', label: 'Next.js', pkg: '@observer-ai/next' },
  { id: 'vue', label: 'Vue', pkg: '@observer-ai/vue' },
  { id: 'angular', label: 'Angular', pkg: '@observer-ai/angular' },
  { id: 'ionic', label: 'Ionic', pkg: '@observer-ai/ionic' },
  { id: 'vanilla', label: 'HTML/CSS', pkg: 'vanilla' }
]

const packageManagers = [
  { id: 'npm', label: 'npm', prefix: 'npm install', suffix: '--save-dev' },
  { id: 'yarn', label: 'yarn', prefix: 'yarn add', suffix: '-D' },
  { id: 'pnpm', label: 'pnpm', prefix: 'pnpm add', suffix: '-D' },
  { id: 'bun', label: 'bun', prefix: 'bun add', suffix: '-D' }
]

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="docs-code-block">
      <pre><code>{code}</code></pre>
      <button className="docs-copy-btn" onClick={handleCopy} aria-label="Copy code">
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        )}
      </button>
    </div>
  )
}

export default function Install() {
  const [activeTab, setActiveTab] = useState('react')
  const [activePm, setActivePm] = useState('npm')

  const activePkg = frameworks.find(f => f.id === activeTab)?.pkg
  const pm = packageManagers.find(p => p.id === activePm)
  
  let installCommand = ''
  if (activeTab !== 'vanilla') {
    installCommand = `${pm?.prefix} ${activePkg} ${pm?.suffix}`
  }

  return (
    <>
      <h1>Installation</h1>
      <p>
        Observer AI is designed to be a frictionless drop-in wrapper. It only runs during local development, ensuring zero performance impact on your production bundles.
      </p>

      {/* Tabs */}
      <div className="docs-tabs">
        {frameworks.map(f => (
          <button 
            key={f.id}
            className={`docs-tab ${activeTab === f.id ? 'active' : ''}`}
            onClick={() => setActiveTab(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <h2>Step 1: Install the package</h2>
      {activeTab === 'vanilla' ? (
        <p>No installation required. Include the script tag in your HTML file.</p>
      ) : (
        <>
          <p>Install the core package via your preferred package manager.</p>
          <div className="pm-docs-tabs">
            {packageManagers.map(p => (
              <button
                key={p.id}
                className={`pm-docs-tab ${activePm === p.id ? 'active' : ''}`}
                onClick={() => setActivePm(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
          <CodeBlock code={installCommand} />
        </>
      )}

      <h2>Step 2: Wrap your Application</h2>
      {activeTab === 'vanilla' ? (
        <p>Drop this script tag into the <code>&lt;head&gt;</code> of your <code>index.html</code>.</p>
      ) : (
        <p>
          Locate your root layout or main entry point. Wrap your application with the <code>ObserverProvider</code> (or Plugin/Module in Vue/Angular).
        </p>
      )}

      {activeTab === 'react' && (
        <CodeBlock code={`import { ObserverProvider } from '@observer-ai/react'

export default function App({ children }) {
  return (
    <ObserverProvider>
      {children}
    </ObserverProvider>
  )
}`} />
      )}
      
      {activeTab === 'next' && (
        <CodeBlock code={`import { ObserverProvider } from '@observer-ai/next'

export default function RootLayout({ children }) {
  return (
    <ObserverProvider>
      {children}
    </ObserverProvider>
  )
}`} />
      )}

      {activeTab === 'vue' && (
        <CodeBlock code={`import { createApp } from 'vue'
import { ObserverPlugin } from '@observer-ai/vue'
import App from './App.vue'

const app = createApp(App)
app.use(ObserverPlugin)
app.mount('#app')`} />
      )}

      {activeTab === 'angular' && (
        <CodeBlock code={`import { NgModule } from '@angular/core'
import { ObserverModule } from '@observer-ai/angular'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    ObserverModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }`} />
      )}

      {activeTab === 'ionic' && (
        <CodeBlock code={`import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { ObserverIonicModule } from '@observer-ai/ionic'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    IonicModule.forRoot(),
    ObserverIonicModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }`} />
      )}

      {activeTab === 'vanilla' && (
        <CodeBlock code={`<!-- Drop this script tag into your index.html head -->\n<script src="https://unpkg.com/@observer-ai/vanilla" defer></script>`} />
      )}

      <h2>Step 3: Start Observing</h2>
      <p>
        Start your local development server. Press <code>Shift + O</code> on your keyboard to toggle the Observer overlay.
      </p>
    </>
  )
}
