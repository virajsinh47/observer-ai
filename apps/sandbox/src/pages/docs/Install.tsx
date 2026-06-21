export default function Install() {
  return (
    <>
      <h1>Installation</h1>
      <p>
        Observer AI is designed to be a frictionless drop-in wrapper. It only runs during local development, ensuring zero performance impact on your production builds.
      </p>
      
      <h2>1. Install via NPM</h2>
      <p>Install the core package into your repository:</p>
      <pre><code>npm install @observer-ai/react</code></pre>

      <h2>2. Wrap your Application</h2>
      <p>In your main entry file (e.g., <code>main.tsx</code> or <code>App.tsx</code>), wrap your entire application with the <code>ObserverProvider</code>.</p>
      <pre><code>{`import { ObserverProvider } from '@observer-ai/react';

function App() {
  return (
    <ObserverProvider>
      <YourApplication />
    </ObserverProvider>
  );
}`}</code></pre>

      <h2>3. Start your Server</h2>
      <p>Run your standard development server:</p>
      <pre><code>npm run dev</code></pre>
      
      <p>
        That's it! You can now press <code>Shift + O</code> on your keyboard at any time to toggle the visual inspector.
      </p>
    </>
  )
}
