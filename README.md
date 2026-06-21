# 👁️ Observer AI

<p align="left">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/@observer-ai/core?color=blue&style=flat-square">
  <img alt="License" src="https://img.shields.io/npm/l/@observer-ai/core?style=flat-square">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square">
</p>

**Created by [Zala Viraj](https://github.com/virajsinh47) & [Sakshi Patel](https://github.com/sakshipatel15)**

**The ultimate visual bridge between human designers and AI coding assistants.**

Observer AI is a framework-agnostic, drop-in browser tool that completely eliminates the need for screenshots when prompting AI assistants like Cursor, GitHub Copilot, or Claude. 

Instead of typing *"make the button next to the logo a little bigger"*, you simply point, click, and Observer AI generates a mathematically perfect Markdown payload containing the exact DOM path, component source, bounding box sizing, typography, colors, and parent layout constraints.

## ✨ Why this exists

AI models are incredibly smart, but they are visually blind. When you ask an AI to fix a layout or tweak a design, it has to guess the current state of your UI.

Observer AI acts as a digital measuring tape. When you click an element on your screen, it silently captures:
- **Exact Sizing:** X/Y coordinates, Width, and Height.
- **Deep Layout Math:** Padding, Margins, Flex properties, and Gaps.
- **Parent Constraints:** The Flex/Grid rules of the parent container that might be blocking your CSS from working.
- **Typography & Colors:** Exact hex codes, font weights, and sizes.
- **Element Identity:** Roles, ARIA labels, and data-testids.
- **Source Tracing:** The exact React/Vue/Angular file and line number that rendered the element.

## 🚀 How it works

1. Open your web app and press `Shift + O` to toggle Observer Mode.
2. Hover over any element on your screen and click to drop a marker.
3. Type your feedback (e.g., "Make this text lighter").
4. Press `Shift + C` to copy the ultra-structured Markdown payload to your clipboard.
5. Paste it directly into Cursor or ChatGPT. Watch the AI write flawless CSS on the first try.

### What the AI sees (The Magic Payload):
```markdown
### 🔵 Annotation 1: button 'Submit Order'
**Visual Context:** Size: 120px x 44px (at X:450px, Y:800px) | Margin: 0px | Padding: 12px 24px
**Typography & Color:** Color: rgb(255, 255, 255) | Background: rgb(59, 130, 246) | Font: 600 16px Inter
**Layout Context:** flex (row) [gap: 8px]
**Parent Constraints:** display: flex, flexDirection: column, alignItems: center
**Component Source:** `<ObserverProvider> <App> <CheckoutForm> [src/components/Checkout.tsx:42:10]`
**User Feedback:** 'make the background color lighter and increase the font size'
```

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Shift + O` | Toggle Observer Mode On/Off |
| `Shift + C` | Copy all markers to clipboard instantly |
| `1`, `2`, `3` | Press numbers while modal is open to copy a specific marker |
| `Escape` | Close the popup modal |

## 💻 Framework Usage

Observer AI hooks into any modern tech stack seamlessly. 

### React & Next.js
Install the React wrapper:
```bash
npm install @observer-ai/react
```
Wrap your root application in the Provider:
```tsx
import { ObserverProvider } from '@observer-ai/react';

function App() {
  return (
    <ObserverProvider>
      <YourApp />
    </ObserverProvider>
  );
}
```

### Angular, Ionic, Vue & Vanilla Web
For non-React frameworks, use our highly optimized Web Component.
```bash
npm install @observer-ai/web
```
Import it in your main entry file (like `main.ts` or `app.component.ts`):
```typescript
import '@observer-ai/web';
```
Then, drop the web component directly into your main HTML file or root template:
```html
<observer-provider></observer-provider>
```

### React Native & Expo
For iOS and Android development, Observer AI uses native `View` measurements.
```bash
npm install @observer-ai/native
```
Wrap your root `App.tsx` (or `_layout.tsx` if using Expo Router):
```tsx
import { ObserverProvider } from '@observer-ai/native';

export default function App() {
  return (
    <ObserverProvider>
      <YourApp />
    </ObserverProvider>
  );
}
```

## 📦 Packages

Observer AI is built as a monorepo using Turborepo, allowing it to hook into any stack:
- `@observer-ai/core`: Vanilla TS engine for UI highlighting and Markdown generation.
- `@observer-ai/web`: Web Component wrapper for Angular, Ionic, and Vanilla JS.
- `@observer-ai/react`: React wrapper for seamless Next.js and React integration.
- `@observer-ai/native`: React Native engine using native View measurements.
- `@observer-ai/mcp`: Local Model Context Protocol server for seamless deep-integration with Cursor and Claude Code.

## ⚡ Quick Start

```bash
git clone https://github.com/virajsinh47/observer-ai.git
cd observer-ai
npm install
npm run dev
```

Open `localhost:5173` to play with the sandbox environment.

## 🐛 Support & Feedback
If you encounter any bugs, issues, or have feature requests, please **[open an issue](https://github.com/virajsinh47/observer-ai/issues)** on this GitHub repository. 

You can also reach out to the creators directly on GitHub:
- [@virajsinh47](https://github.com/virajsinh47)
- [@sakshipatel15](https://github.com/sakshipatel15)

## 🤝 Contributing
Pull requests are welcome! Since this tool operates strictly on the DOM, it is highly extensible. If you want to add better specific support for a new framework, open an issue or submit a PR.

## 📄 License
MIT License
