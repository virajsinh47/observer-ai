export default function Overview() {
  return (
    <>
      <h1>Overview</h1>
      <p>
        Observer AI is a drop-in developer tool that extracts the exact spatial coordinates, typography rules, layout math (Flex/Grid), and parent constraints of any DOM element in your application.
      </p>
      
      <h2>The Problem with Screenshots</h2>
      <p>
        When you give a screenshot to an AI coding assistant (like Claude, ChatGPT, or Copilot), the AI is forced to <strong>guess</strong> the implementation details. It doesn't know if that gap is <code>margin-top: 16px</code> or <code>gap: 1rem</code> in a flex container. It doesn't know the exact hex code of your brand color. It hallucinates CSS classes.
      </p>

      <h2>The Observer Solution</h2>
      <p>
        Observer AI eliminates guesswork. When you activate the Observer and click on a broken UI element, it instantly calculates the absolute truth of the browser DOM and packages it into an AI-optimized Markdown payload.
      </p>

      <h2>How it Works</h2>
      <ul>
        <li><strong>Injects cleanly:</strong> Wraps your root application component.</li>
        <li><strong>Listens silently:</strong> Zero performance overhead until activated via <code>Shift + O</code>.</li>
        <li><strong>Traverses deeply:</strong> Maps the clicked DOM node back to its original React/Vue component source file.</li>
        <li><strong>Exports neatly:</strong> Formats the data instantly to your clipboard via <code>Shift + C</code>.</li>
      </ul>
    </>
  )
}
