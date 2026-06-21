export default function Features() {
  return (
    <>
      <h1>Core Features</h1>
      
      <h2>🎯 Surgical Precision</h2>
      <p>
        Observer AI calculates the exact `getBoundingClientRect` data for your components. 
        It feeds the AI the exact X and Y coordinates, height, width, and absolute positioning constraints.
      </p>

      <h2>🔍 Deep Component Tracing</h2>
      <p>
        Ever struggled to find which file rendered a specific generic <code>&lt;div&gt;</code>? 
        Observer hooks into the React Fiber tree (and equivalents for Vue/Angular) to trace the exact file path and line number of the component you clicked.
      </p>

      <h2>📦 Parent Constraint Analysis</h2>
      <p>
        A button's width might be restricted because its parent is a <code>flex-column</code> with <code>align-items: center</code>. 
        Observer automatically traverses up the DOM tree and extracts parent Grid/Flex constraints so the AI understands <em>why</em> the CSS isn't working.
      </p>

      <h2>📋 One-Click LLM Payload</h2>
      <p>
        When you click an element, Observer automatically generates a Markdown-formatted payload optimized for LLM tokenization. 
        Press <code>Shift + C</code> to instantly copy it to your clipboard.
      </p>
    </>
  )
}
