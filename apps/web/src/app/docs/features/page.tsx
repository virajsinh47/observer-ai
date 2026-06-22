export default function Features() {
  return (
    <>
      <h1>Features in Detail</h1>
      <p>
        Observer AI is designed to eliminate the translation gap between human visual perception and AI coding assistants. Here is exactly how our engine works under the hood.
      </p>

      <h2>🎯 Surgical DOM Precision</h2>
      <p>
        When you capture an element, Observer AI bypasses basic CSS scraping and directly queries the browser's <code>getBoundingClientRect()</code> API. 
        It feeds the AI the exact mathematical reality of the UI:
      </p>
      <ul>
        <li><strong>Absolute Coordinates:</strong> Exact X and Y pixel positions relative to the viewport.</li>
        <li><strong>Dimensions:</strong> Real computed width and height.</li>
        <li><strong>Box Model:</strong> The exact computed Padding, Border, and Margin in pixels.</li>
      </ul>

      <h2>🧬 Layout Math Engine</h2>
      <p>
        Screenshots can't tell an AI if an element is centered using Flexbox, CSS Grid, or absolute positioning. 
        Observer deeply analyzes the <strong>parent node</strong> and its relationship to the child.
      </p>
      <ul>
        <li><strong>Flexbox Parsing:</strong> Extracts <code>flex-direction</code>, <code>align-items</code>, <code>justify-content</code>, and <code>gap</code>.</li>
        <li><strong>CSS Grid Parsing:</strong> Understands <code>grid-template-columns</code>, <code>grid-template-rows</code>, and track sizes.</li>
        <li><strong>Positioning Context:</strong> Identifies if the parent establishes a stacking context (<code>position: relative</code>) and how the child is positioned within it.</li>
      </ul>

      <h2>🎨 Computed Typography & Colors</h2>
      <p>
        Instead of guessing colors from pixels (which are affected by screen profiles and monitor settings), Observer reads the actual computed styles applied by the browser engine.
      </p>
      <ul>
        <li><strong>RGB & Hex Values:</strong> Captures the exact computed color and background-color.</li>
        <li><strong>Font Typography:</strong> Extracts exact <code>font-family</code> stacks, <code>font-weight</code>, <code>font-size</code>, <code>line-height</code>, and <code>letter-spacing</code>.</li>
        <li><strong>Opacity & Visibility:</strong> Knows exactly how transparent an element is.</li>
      </ul>

      <h2>🔍 Source Code Mapping (Fiber Traversal)</h2>
      <p>
        Perhaps the most powerful feature: Observer AI maps the visual DOM element back to your actual source code files. 
      </p>
      <p>
        For React and Next.js applications, Observer traverses the internal React Fiber tree (<code>__reactFiber$</code>) to find the exact component name, file path, and even the line and column number where the element was rendered. 
      </p>
      <p>
        This allows an AI to immediately know: <em>"To fix this button, I need to edit line 42 of src/components/Checkout.tsx."</em>
      </p>
    </>
  )
}
