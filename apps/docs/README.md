# Observer AI Documentation

Welcome to the Observer AI documentation! This tool is a comprehensive, framework-agnostic visual annotation tool.

## Installation
You can install Observer AI using npm, yarn, or pnpm.

### For React / Next.js
\`\`\`bash
npm install @observer-ai/react
\`\`\`
Wrap your application in the \`<ObserverProvider>\`.
\`\`\`tsx
import { ObserverProvider } from '@observer-ai/react';

export default function App({ Component, pageProps }) {
  return (
    <ObserverProvider>
      <Component {...pageProps} />
    </ObserverProvider>
  );
}
\`\`\`

### For Angular / Ionic / Vanilla JS
\`\`\`bash
npm install @observer-ai/web
\`\`\`
Import the web component:
\`\`\`ts
import '@observer-ai/web';
\`\`\`
Then drop \`<observer-ai></observer-ai>\` into your HTML.

### For React Native
\`\`\`bash
npm install @observer-ai/native
\`\`\`
\`\`\`tsx
import { ObserverNativeOverlay } from '@observer-ai/native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* Your app */}
      <ObserverNativeOverlay />
    </View>
  )
}
\`\`\`

## Using with AI Agents (MCP)
Start the local MCP server so Claude Code, Cursor, and Antigravity can read your annotations directly!

\`\`\`bash
npx @observer-ai/mcp
\`\`\`
