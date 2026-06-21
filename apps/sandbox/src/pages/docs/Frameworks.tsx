export default function Frameworks() {
  return (
    <>
      <h1>Framework Guides</h1>
      <p>Observer AI works beautifully across all major modern JavaScript frameworks.</p>
      
      <h2>React & Next.js</h2>
      <p>Install <code>@observer-ai/react</code>.</p>
      <pre><code>{`import { ObserverProvider } from '@observer-ai/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ObserverProvider>
          {children}
        </ObserverProvider>
      </body>
    </html>
  );
}`}</code></pre>

      <h2>Angular, Ionic, Vue & Vanilla</h2>
      <p>Install <code>@observer-ai/web</code> which exposes a standard Web Component.</p>
      <pre><code>{`import '@observer-ai/web';

// In your index.html or root component:
<observer-provider>
  <app-root></app-root> /* Your app here */
</observer-provider>`}</code></pre>

      <h2>React Native & Expo</h2>
      <p>Install <code>@observer-ai/native</code>.</p>
      <pre><code>{`import { ObserverProvider } from '@observer-ai/native';

export default function App() {
  return (
    <ObserverProvider>
      <YourApp />
    </ObserverProvider>
  );
}`}</code></pre>
    </>
  )
}
