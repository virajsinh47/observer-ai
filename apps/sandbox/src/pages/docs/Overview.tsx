export default function Overview() {
  return (
    <>
      <h1>Overview</h1>
      <p>
        Observer AI is a drop-in developer tool that extracts the exact spatial coordinates, typography rules, layout math (Flex/Grid), and parent constraints of any UI element on your screen.
      </p>
      
      <h2>The Problem</h2>
      <p>
        Modern AI coding assistants (like Cursor, Copilot, and Claude) are incredibly smart at writing logic, but they are visually blind.
        When you take a screenshot of a broken UI and ask the AI to "fix the padding" or "center this button", it hallucinates CSS values because it has no mathematical context of the DOM.
      </p>

      <h2>The Solution</h2>
      <p>
        Observer AI bridges this gap. By dropping our provider into your React, Next.js, Angular, Vue, or React Native application, you gain a magical "Shift + O" shortcut.
        Clicking on any element extracts its exact computed styles into a perfectly formatted Markdown payload designed specifically for Large Language Models.
      </p>

      <ul>
        <li><strong>No more guessing margins.</strong></li>
        <li><strong>No more broken Flexbox layouts.</strong></li>
        <li><strong>No more hunting for the source component.</strong></li>
      </ul>
      
      <p>
        Just point, click, paste into your AI, and watch it write perfect CSS on the first try.
      </p>
    </>
  )
}
