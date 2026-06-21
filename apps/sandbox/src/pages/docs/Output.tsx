export default function Output() {
  return (
    <>
      <h1>The LLM Payload</h1>
      <p>
        When you select an element with Observer AI and press <code>Shift + C</code>, the following Markdown payload is copied to your clipboard.
        This format has been rigorously tested to provide the highest accuracy rate when fed into models like GPT-4o and Claude 3.5 Sonnet.
      </p>
      
      <h2>Example Payload</h2>
      <pre><code>{`### 🔵 Annotation 1: button 'Submit Order'

**Visual Context:** 
Size: 120px x 44px (at X:450px, Y:800px) 
Margin: 0px 
Padding: 12px 24px

**Typography & Color:** 
Color: rgb(255, 255, 255) 
Background: rgb(59, 130, 246) 
Font: 600 16px Inter

**Layout Context:** 
flex (row) [gap: 8px]

**Parent Constraints:** 
display: flex
flexDirection: column
alignItems: center

**Component Source:** 
<ObserverProvider> <App> <CheckoutForm> 
[src/components/Checkout.tsx:42:10]

**User Feedback:** 
'make the background color lighter and increase the font size'
`}</code></pre>

      <h2>How to use it</h2>
      <p>
        Simply open your IDE's AI assistant (like Cursor Chat or Copilot Chat), paste the payload, and hit enter. 
        The AI will instantly know exactly what file to edit and what CSS values to change.
      </p>
    </>
  )
}
