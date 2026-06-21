import { ObserverEngine } from '@observer-ai/core';

class ObserverElement extends HTMLElement {
  private engine: ObserverEngine;
  private button: HTMLButtonElement;
  private isActive: boolean = false;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.engine = new ObserverEngine();
    
    this.button = document.createElement('button');
    this.button.innerText = 'Inspect UI';
    this.setupStyles();
    
    this.button.addEventListener('click', () => {
      this.isActive = !this.isActive;
      this.button.innerText = this.isActive ? 'Stop Inspecting' : 'Inspect UI';
      this.button.style.backgroundColor = this.isActive ? '#3b82f6' : '#333';
      
      if (this.isActive) {
        this.engine.start();
      } else {
        this.engine.stop();
      }
    });

    this.shadowRoot?.appendChild(this.button);
  }

  private setupStyles() {
    const style = document.createElement('style');
    style.textContent = `
      button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999999;
        background-color: #333;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      }
    `;
    this.shadowRoot?.appendChild(style);
  }
}

if (!customElements.get('observer-ai')) {
  customElements.define('observer-ai', ObserverElement);
}

export { ObserverElement };
