export default function Frameworks() {
  return (
    <>
      <h1>Framework Setup & Data</h1>
      <p>
        Observer AI works perfectly across almost all modern web frameworks. Below is the exact data on how to set it up for your specific stack, and what level of support you can expect.
      </p>

      <h2>⚛️ React & Next.js</h2>
      <p><strong>Support Level:</strong> Full (Includes Fiber Tree Source Mapping)</p>
      <p>
        Because Observer AI taps directly into the React Fiber tree, it provides the most comprehensive data for React apps, including exact file paths and line numbers.
      </p>
      <pre><code>{`// Install
npm install @observer-ai/react --save-dev

// Usage in Next.js (app/layout.tsx)
import { ObserverProvider } from '@observer-ai/react'

export default function RootLayout({ children }) {
  return (
    <ObserverProvider>
      {children}
    </ObserverProvider>
  )
}`}</code></pre>

      <h2>🟢 Vue 3 & Nuxt</h2>
      <p><strong>Support Level:</strong> High (Includes VNode Mapping)</p>
      <p>
        Observer hooks into the Vue Virtual DOM to map elements back to their `.vue` component files.
      </p>
      <pre><code>{`// Install
npm install @observer-ai/vue --save-dev

// Usage in Vue 3 (main.ts)
import { createApp } from 'vue'
import { observerPlugin } from '@observer-ai/vue'
import App from './App.vue'

const app = createApp(App)
if (process.env.NODE_ENV === 'development') {
  app.use(observerPlugin)
}
app.mount('#app')`}</code></pre>

      <h2>🔥 Svelte & SvelteKit</h2>
      <p><strong>Support Level:</strong> High (Includes Component Mapping)</p>
      <p>
        Svelte doesn't use a Virtual DOM, so Observer maps elements back using Svelte's development mode component instances.
      </p>
      <pre><code>{`// Install
npm install @observer-ai/svelte --save-dev

// Usage in SvelteKit (src/routes/+layout.svelte)
<script>
  import { ObserverWrapper } from '@observer-ai/svelte'
</script>

<ObserverWrapper>
  <slot />
</ObserverWrapper>`}</code></pre>

      <h2>🅰️ Angular</h2>
      <p><strong>Support Level:</strong> Moderate (DOM + DebugElement Mapping)</p>
      <p>
        Observer uses Angular's <code>ng.probe()</code> and DebugElement APIs to trace elements back to their component classes.
      </p>
      <pre><code>{`// Install
npm install @observer-ai/angular --save-dev

// Usage in app.module.ts
import { ObserverModule } from '@observer-ai/angular'

@NgModule({
  imports: [
    BrowserModule,
    // Only import in development
    ...(isDevMode() ? [ObserverModule] : [])
  ]
})
export class AppModule { }`}</code></pre>

      <h2>🟨 Vanilla JS & Web Components</h2>
      <p><strong>Support Level:</strong> Basic (Visual & Layout Data Only)</p>
      <p>
        For non-framework applications, you can inject the core script. While it cannot provide file-level source mapping (since there is no framework context), it will still perfectly extract all visual, layout, and typography math.
      </p>
      <pre><code>{`<!-- Add to the bottom of your <body> -->
<script src="https://cdn.jsdelivr.net/npm/@observer-ai/core/dist/browser.js"></script>
<script>
  if (location.hostname === 'localhost') {
    ObserverAI.init();
  }
</script>`}</code></pre>
    </>
  )
}
