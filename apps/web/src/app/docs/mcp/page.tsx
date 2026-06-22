export default function MCP() {
  return (
    <>
      <h1>Model Context Protocol (MCP) Server</h1>
      <p>
        While using <code>Shift + C</code> to copy and paste markdown payloads is incredibly fast, you can completely automate the workflow by connecting an AI agent directly to the Observer AI <strong>MCP Server</strong>.
      </p>

      <h2>What is the MCP?</h2>
      <p>
        The Model Context Protocol (MCP) is an open standard introduced by Anthropic that allows AI models to securely connect to external tools and data sources.
      </p>
      <p>
        By running the Observer MCP Server, AI agents (like Claude Desktop, or specialized coding agents) can <strong>actively query your browser's DOM</strong> without you needing to do anything.
      </p>

      <h2>How to Setup the MCP Server</h2>
      
      <p><strong>1. Start your local development server</strong> (e.g., <code>npm run dev</code>) and ensure the Observer AI provider is wrapped around your app.</p>
      
      <p><strong>2. Run the MCP Sync Server</strong> in a separate terminal:</p>
      <pre><code>npx @observer-ai/mcp start --port 4000</code></pre>

      <p><strong>3. Configure your AI Agent</strong></p>
      <p>Add the following to your Claude Desktop config (or equivalent MCP client configuration):</p>
      <pre><code>{`{
  "mcpServers": {
    "observer-ai": {
      "command": "npx",
      "args": ["-y", "@observer-ai/mcp", "connect", "--url", "http://localhost:4000"]
    }
  }
}`}</code></pre>

      <h2>How Agents use the MCP Server</h2>
      <p>
        Once connected, your AI agent gains access to powerful tools:
      </p>
      <ul>
        <li><code>get_element_context</code>: The AI can ask for the exact layout math and visual styling of a specific component by name.</li>
        <li><code>list_components</code>: The AI can ask the browser for a list of all currently rendered components on the screen.</li>
        <li><code>highlight_element</code>: The AI can make the browser flash a specific element on your screen to confirm it knows what it's editing.</li>
      </ul>

      <h2>The Autonomous Workflow</h2>
      <p>With MCP, you can simply type to your AI: <em>"Make the submit button on the checkout page look more modern."</em></p>
      <p>The AI will autonomously query the Observer MCP server, find the button in your DOM, read its current padding and Flexbox rules, locate the source file, and write the exact CSS needed to fix it—all without you lifting a finger.</p>
    </>
  )
}
