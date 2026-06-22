export default function Output() {
  return (
    <>
      <h1>The LLM Payload</h1>
      <p>
        When you select an element with Observer AI and press <code>Shift + C</code>, the following Markdown payload is copied to your clipboard.
        This payload is specifically engineered to give Large Language Models (LLMs) maximum context with minimum token usage.
      </p>

      <h2>Example Payload</h2>
      <pre><code>{`### 🔵 Annotation 1: div 'Card Container'

**Visual Context:**
- Size: 320px x 400px (at X: 150px, Y: 200px)
- Margin: 0px 16px
- Padding: 24px

**Typography & Color:**
- Color: rgb(255, 255, 255)
- Background: rgba(255, 255, 255, 0.05)
- Font: 400 14px Inter, sans-serif

**Layout Context:**
- display: flex (column)
- gap: 16px
- align-items: flex-start

**Parent Constraints:**
- parent node: grid (grid-template-columns: repeat(3, 1fr))
- gap: 32px

**Component Source:**
- <App> <Dashboard> <FeatureCard> [src/components/FeatureCard.tsx:14:5]

**User Feedback:**
'make the background glow slightly when hovered and increase the gap between items'`}</code></pre>

      <h2>Why this format?</h2>
      <p>
        LLMs process code sequentially. By providing the exact visual context first, followed by layout math and parent constraints, the LLM builds a mental model of the UI before attempting to write CSS or Tailwind classes. This prevents the common issue where an LLM suggests <code>margin-top</code> when the parent is actually using a Flex <code>gap</code>.
      </p>
    </>
  )
}
