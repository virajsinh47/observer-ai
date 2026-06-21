export interface Annotation {
  id: string;
  tagName: string;
  text: string;
  location: string;
  source: string;
  feedback: string;
  colorHex: string;
  colorName: string;
  computedStyles?: Record<string, string>;
  elementIdentity?: Record<string, string>;
  parentConstraints?: Record<string, string>;
  forensicProps?: string;
  kind?: 'annotation' | 'placement' | 'wireframe';
  placementRect?: { top: number; left: number; width: number; height: number };
  status?: 'open' | 'acknowledged' | 'resolved' | 'dismissed';
  dismissReason?: string;
  viewportContext?: { width: number; height: number };
  cssTweaks?: Record<string, string>;
}

export interface ObserverSettings {
  outputDetail: 'Compact' | 'Standard' | 'Detailed' | 'Forensic';
  frameworkComponents: boolean;
  hideUntilRestart: boolean;
  markerColor: string;
  clearOnCopy: boolean;
  blockInteractions: boolean;
  applyCssTweaks: boolean;
}

export const COLORS = [
  { name: 'Purple', hex: '#5E5CE6', emoji: '🟣' },
  { name: 'Blue', hex: '#0A84FF', emoji: '🔵' },
  { name: 'Cyan', hex: '#32ADE6', emoji: '💠' },
  { name: 'Green', hex: '#34C759', emoji: '🟢' },
  { name: 'Yellow', hex: '#FFD60A', emoji: '🟡' },
  { name: 'Orange', hex: '#FF9F0A', emoji: '🟠' },
  { name: 'Red', hex: '#FF453A', emoji: '🔴' }
];

const ICONS = {
  pause: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`,
  play: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
  layout: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
  eye: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  copy: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
  trash: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
  settings: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  close: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  sun: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8e8e93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  help: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8e8e93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="check-icon" style="width:12px; height:12px; opacity: 0; transition: 0.2s;"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`
};

export class ObserverEngine {
  private isActive = false;
  private isPaused = true;
  private showSettings = false;
  private showLayoutMode = false;
  private isMinimized = false;
  private hideMarkers = false;
  private animationsPaused = false;
  
  private activeElement: HTMLElement | null = null;
  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private justClosedPanel = false;
  private selectionBox: HTMLDivElement | null = null;
  private highlightOverlay: HTMLDivElement | null = null;
  private highlightTooltip: HTMLDivElement | null = null;
  private shadowRoot: ShadowRoot | null = null;
  private uiContainer: HTMLDivElement | null = null;
  
  private activeLayoutComponent: string | null = null;
  private isWireframeMode: boolean = false;
  private wireframeOverlay: HTMLElement | null = null;
  
  // Layout placement interactions
  private isDraggingLayoutBox: boolean = false;
  private isResizingLayoutBox: boolean = false;
  private activeLayoutBoxId: string | null = null;
  private layoutDragStartPos = { x: 0, y: 0 };
  private layoutDragStartRect = { top: 0, left: 0, width: 0, height: 0 };
  
  private annotations: Annotation[] = [];
  private selectedElement: HTMLElement | null = null;
  
  private settings: ObserverSettings = {
    outputDetail: 'Standard',
    frameworkComponents: true,
    hideUntilRestart: false,
    markerColor: '#0A84FF',
    clearOnCopy: false,
    blockInteractions: true,
    applyCssTweaks: true
  };

  private loadSettings() {
    try {
      const saved = localStorage.getItem('observer-ai-settings');
      if (saved) {
        this.settings = { ...this.settings, ...JSON.parse(saved) };
      }
    } catch(e) {}
  }

  private saveSettings() {
    try {
      localStorage.setItem('observer-ai-settings', JSON.stringify(this.settings));
    } catch(e) {}
  }

  constructor() {
    this.loadSettings();
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  private pollInterval: any = null;

  public start() {
    if (this.isActive) return;
    this.isActive = true;
    this.isPaused = true;
    this.setupUI();
    document.addEventListener('mousemove', this.handleMouseMove, true);
    document.addEventListener('click', this.handleClick, true);
    document.addEventListener('keydown', this.handleKeyDown, true);
    document.addEventListener('mousedown', this.handleMouseDown, true);
    document.addEventListener('mouseup', this.handleMouseUp, true);
    
    if (!this.animationsPaused) {
      this.togglePauseAnimations(true);
    }
    this.startPolling();
  }

  public stop() {
    this.isActive = false;
    this.stopPolling();
    document.removeEventListener('mousemove', this.handleMouseMove, true);
    document.removeEventListener('click', this.handleClick, true);
    document.removeEventListener('keydown', this.handleKeyDown, true);
    document.removeEventListener('mousedown', this.handleMouseDown, true);
    document.removeEventListener('mouseup', this.handleMouseUp, true);
    if (this.uiContainer) {
      this.uiContainer.remove();
      this.uiContainer = null;
      this.shadowRoot = null;
    }
    if (this.highlightOverlay) {
      this.highlightOverlay.remove();
      this.highlightOverlay = null;
    }
  }

  private showToast(message: string) {
    if (!this.shadowRoot) return;
    const existing = this.shadowRoot.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    this.shadowRoot.appendChild(toast);
    
    // trigger reflow
    void toast.offsetWidth;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  private setupUI() {
    this.uiContainer = document.createElement('div');
    this.uiContainer.id = 'observer-ai-root';
    this.uiContainer.style.position = 'fixed';
    this.uiContainer.style.top = '0';
    this.uiContainer.style.left = '0';
    this.uiContainer.style.width = '100vw';
    this.uiContainer.style.height = '100vh';
    this.uiContainer.style.pointerEvents = 'none';
    this.uiContainer.style.zIndex = '999999';
    document.body.appendChild(this.uiContainer);

    this.shadowRoot = this.uiContainer.attachShadow({ mode: 'open' });
    
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;700&family=Inter:wght@400;500;600&display=swap');
      
      * { box-sizing: border-box; font-family: 'Inter', -apple-system, sans-serif; }
      
      .toast {
        position: fixed;
        top: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(-20px);
        background: rgba(0, 0, 0, 0.95);
        color: #fff;
        padding: 12px 24px;
        border-radius: 999px;
        font-size: 14px;
        font-weight: 500;
        border: 1px solid rgba(255,255,255,0.1);
        box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 99999;
      }
      .toast.show {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0);
      }
      
      .wireframe-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(2px);
        z-index: 999995;
        pointer-events: none;
        display: none;
      }
      
      .layout-placement-box {
        position: absolute;
        border: 2px dashed rgba(50, 173, 230, 0.5);
        background-color: rgba(50, 173, 230, 0.05);
        z-index: 999996;
        pointer-events: auto;
        border-radius: 6px;
        cursor: move;
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        transition: border-color 0.2s, background-color 0.2s;
      }
      
      .layout-placement-box:hover {
        border-color: rgba(50, 173, 230, 0.8);
        background-color: rgba(50, 173, 230, 0.1);
      }

      /* --- High-Fidelity Wireframe Styles --- */
      
      /* Default / Text */
      .box-text, .box-generic, .box-hero, .box-section, .box-banner, .box-table, .box-grid, .box-list, .box-chart, .box-code-block, .box-map, .box-timeline, .box-calendar, .box-accordion, .box-carousel, .box-logo, .box-faq, .box-gallery, .box-button, .box-input, .box-search, .box-form, .box-tabs, .box-dropdown {
        border: 2px solid #0A84FF;
        background-color: rgba(10, 132, 255, 0.03);
        background-image: 
          linear-gradient(to bottom right, transparent 49%, rgba(10, 132, 255, 0.15) 49.5%, rgba(10, 132, 255, 0.15) 50.5%, transparent 51%),
          linear-gradient(to top right, transparent 49%, rgba(10, 132, 255, 0.15) 49.5%, rgba(10, 132, 255, 0.15) 50.5%, transparent 51%);
        background-size: 100% 100%;
      }
      
      /* Header */
      .box-header, .box-navigation {
        border: 2px solid #0A84FF;
        background-color: rgba(10, 132, 255, 0.03);
        background-image: 
          radial-gradient(circle at 30px center, #0A84FF 12px, transparent 13px),
          linear-gradient(to right, #0A84FF, #0A84FF),
          linear-gradient(to right, #0A84FF, #0A84FF),
          linear-gradient(to right, #0A84FF, #0A84FF),
          linear-gradient(to right, rgba(10,132,255,0.2), rgba(10,132,255,0.2));
        background-size: 100% 100%, 40px 6px, 40px 6px, 40px 6px, 100% 2px;
        background-position: 0 0, calc(100% - 130px) center, calc(100% - 80px) center, calc(100% - 30px) center, bottom left;
        background-repeat: no-repeat;
      }

      /* Sidebar */
      .box-sidebar {
        border: 2px solid #0A84FF;
        background-color: rgba(10, 132, 255, 0.03);
        background-image: 
          repeating-linear-gradient(to bottom, transparent 0, transparent 10px, rgba(10, 132, 255, 0.4) 10px, rgba(10, 132, 255, 0.4) 20px, transparent 20px, transparent 40px);
        background-size: calc(100% - 40px) 100%;
        background-position: 20px 20px;
        background-repeat: no-repeat;
      }

      /* Card */
      .box-card {
        border: 2px solid #0A84FF;
        border-radius: 12px;
        background-color: rgba(10, 132, 255, 0.03);
        background-image: 
          linear-gradient(to bottom right, transparent 48%, rgba(10, 132, 255, 0.3) 49%, rgba(10, 132, 255, 0.3) 51%, transparent 52%),
          linear-gradient(to top right, transparent 48%, rgba(10, 132, 255, 0.3) 49%, rgba(10, 132, 255, 0.3) 51%, transparent 52%),
          linear-gradient(to bottom, rgba(10, 132, 255, 0.1) 120px, transparent 120px),
          linear-gradient(to right, rgba(10, 132, 255, 0.8), rgba(10, 132, 255, 0.8)),
          repeating-linear-gradient(to bottom, transparent 0, transparent 8px, rgba(10, 132, 255, 0.4) 8px, rgba(10, 132, 255, 0.4) 14px, transparent 14px, transparent 24px);
        background-size: 100% 120px, 100% 120px, 100% 120px, 60% 14px, 80% 100%;
        background-position: top center, top center, top center, 20px 140px, 20px 170px;
        background-repeat: no-repeat;
      }

      /* Modal & Drawer */
      .box-modal, .box-drawer {
        border: 2px solid #0A84FF;
        border-radius: 16px;
        box-shadow: 0 24px 48px rgba(0,0,0,0.2);
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(16px);
        background-image: 
          radial-gradient(circle at 20px 20px, #FF453A 6px, transparent 7px),
          linear-gradient(to right, rgba(10, 132, 255, 0.8), rgba(10, 132, 255, 0.8)),
          repeating-linear-gradient(to bottom, transparent 0, transparent 8px, rgba(10, 132, 255, 0.2) 8px, rgba(10, 132, 255, 0.2) 14px, transparent 14px, transparent 24px);
        background-size: 100% 100%, 40% 14px, 80% 100%;
        background-position: 0 0, center 40px, center 80px;
        background-repeat: no-repeat;
      }

      /* Footer */
      .box-footer {
        border: 2px solid #0A84FF;
        border-top-width: 4px;
        background-color: rgba(10, 132, 255, 0.03);
        background-image: 
          linear-gradient(to right, rgba(10, 132, 255, 0.4), rgba(10, 132, 255, 0.4)),
          linear-gradient(to right, rgba(10, 132, 255, 0.4), rgba(10, 132, 255, 0.4)),
          linear-gradient(to right, rgba(10, 132, 255, 0.4), rgba(10, 132, 255, 0.4)),
          repeating-linear-gradient(to bottom, transparent 0, transparent 8px, rgba(10, 132, 255, 0.2) 8px, rgba(10, 132, 255, 0.2) 14px, transparent 14px, transparent 24px),
          repeating-linear-gradient(to bottom, transparent 0, transparent 8px, rgba(10, 132, 255, 0.2) 8px, rgba(10, 132, 255, 0.2) 14px, transparent 14px, transparent 24px),
          repeating-linear-gradient(to bottom, transparent 0, transparent 8px, rgba(10, 132, 255, 0.2) 8px, rgba(10, 132, 255, 0.2) 14px, transparent 14px, transparent 24px);
        background-size: 20% 14px, 20% 14px, 20% 14px, 20% 100%, 20% 100%, 20% 100%;
        background-position: 10% 20px, 50% 20px, 90% 20px, 10% 50px, 50% 50px, 90% 50px;
        background-repeat: no-repeat;
      }

      /* Image / Video */
      .box-image, .box-video {
        border: 2px solid #32ADE6;
        background-image: linear-gradient(to bottom right, transparent 48%, rgba(50, 173, 230, 0.4) 49%, rgba(50, 173, 230, 0.4) 51%, transparent 52%),
                          linear-gradient(to top right, transparent 48%, rgba(50, 173, 230, 0.4) 49%, rgba(50, 173, 230, 0.4) 51%, transparent 52%);
      }
      .layout-resize-handle {
        position: absolute;
        width: 12px;
        height: 12px;
        bottom: -4px;
        right: -4px;
        background: #32ADE6;
        border: 2px solid #fff;
        border-radius: 50%;
        cursor: se-resize;
        z-index: 999997;
      }
      
      .layout-delete-btn {
        position: absolute;
        top: -6px;
        right: -6px;
        width: 16px;
        height: 16px;
        background: #FF453A;
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 999998;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }
      .layout-delete-btn:hover {
        background: #D70015;
      }
      
      .layout-placement-label {
        position: absolute;
        top: 0;
        left: 0;
        background: #32ADE6;
        color: #fff;
        padding: 4px 8px;
        font-size: 12px;
        font-weight: 600;
        border-bottom-right-radius: 4px;
        border-top-left-radius: 2px;
      }

      /* Premium Glassmorphism Toolbar */
      .toolbar {
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-radius: 999px;
        padding: 8px 12px;
        display: flex;
        gap: 8px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        pointer-events: auto;
        align-items: center;
        border: 1px solid rgba(255,255,255,0.08);
        z-index: 100;
        transition: all 0.3s ease;
      }
      
      .status-indicator-wrap {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0 4px;
        padding: 4px;
      }
      
      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        box-shadow: 0 0 6px rgba(0,0,0,0.4);
        transition: background-color 0.3s ease;
      }
      
      .status-tooltip {
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(0px);
        background: rgba(20, 20, 20, 0.95);
        color: white;
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 500;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        border: 1px solid rgba(255,255,255,0.1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        margin-bottom: 8px;
      }
      
      .status-indicator-wrap:hover .status-tooltip {
        opacity: 1;
        transform: translateX(-50%) translateY(-4px);
      }
      
      .icon-btn {
        position: relative;
        background: transparent;
        border: none;
        color: #a1a1aa;
        cursor: pointer;
        padding: 8px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        transition: all 0.2s ease;
      }
      .icon-btn:hover { color: #fff; background: rgba(255,255,255,0.1); }
      .icon-btn.active { color: var(--active-color, #0A84FF); }
      
      .icon-btn[data-tooltip]::after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(0px);
        background: rgba(20, 20, 20, 0.95);
        color: white;
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 500;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        border: 1px solid rgba(255,255,255,0.1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        margin-bottom: 8px;
        z-index: 10000;
      }
      .icon-btn:hover[data-tooltip]::after {
        opacity: 1;
        transform: translateX(-50%) translateY(-4px);
      }
      
      /* Vertical Divider */
      .divider {
        width: 1px;
        height: 20px;
        background: rgba(255,255,255,0.1);
        margin: 0 4px;
      }
      
      /* Settings Panel */
      .settings-panel {
        position: fixed;
        width: 280px;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 14px;
        padding: 16px;
        box-shadow: 0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
        pointer-events: auto;
        color: #fff;
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translateY(15px) scale(0.98);
        transform-origin: bottom right;
      }
      .settings-panel.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
      }
      .settings-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        font-weight: 600;
        font-size: 16px;
        font-family: 'Outfit', sans-serif;
        padding-bottom: 12px;
        border-bottom: 1px solid rgba(255,255,255,0.05);
      }
      .settings-header span { color: #8e8e93; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: normal; display: flex; align-items: center; gap: 6px; }
      .setting-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        font-size: 13px;
        color: #e5e5ea;
        font-weight: 500;
      }
      .help-icon { display: inline-flex; vertical-align: middle; margin-left: 6px; cursor: help; }
      
      /* Custom Toggle */
      .toggle {
        position: relative;
        width: 42px;
        height: 24px;
        background: #39393d;
        border-radius: 12px;
        cursor: pointer;
        transition: 0.3s;
      }
      .toggle.on { background: #fff; }
      .toggle::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 50%;
        transition: 0.3s;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }
      .toggle.on::after { background: #000; transform: translateX(18px); }

      /* Custom Checkbox */
      .custom-checkbox {
        width: 18px;
        height: 18px;
        border-radius: 4px;
        border: 1.5px solid #555;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.2s;
        background: transparent;
      }
      .custom-checkbox.checked { background: #0A84FF; border-color: #0A84FF; }
      .custom-checkbox.checked .check-icon { opacity: 1 !important; }

      /* Color Picker */
      .color-picker {
        display: flex;
        gap: 12px;
        margin-top: 12px;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(255,255,255,0.05);
      }
      .color-swatch {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.2s;
        position: relative;
      }
      .color-swatch:hover { transform: scale(1.1); }
      .color-swatch.active::after {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: 2px solid var(--swatch-color);
        border-radius: 50%;
      }

      .popup {
        position: fixed;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border-radius: 16px;
        width: 340px;
        padding: 20px;
        box-shadow: 0 32px 64px rgba(0,0,0,0.5), 0 2px 12px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08);
        pointer-events: auto;
      }
      .breadcrumb { 
        color: #a1a1aa; 
        font-size: 11px; 
        margin-bottom: 14px; 
        display: flex; 
        align-items: center; 
        gap: 6px; 
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      .textarea-wrapper {
        border: 1px solid #333;
        border-radius: 8px;
        overflow: hidden;
        background: #1c1c1e;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.4);
        transition: all 0.2s ease;
      }
      .textarea-wrapper:focus-within {
        border-color: var(--active-color, #0A84FF);
        background: #222224;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.4), 0 0 0 3px rgba(10, 132, 255, 0.15);
      }
      textarea {
        width: 100%;
        background: transparent;
        border: none;
        color: #fff;
        padding: 14px;
        resize: none;
        outline: none;
        min-height: 84px;
        font-size: 14px;
        line-height: 1.5;
      }
      textarea::placeholder {
        color: #636366;
      }
      .popup-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 16px; }
      .btn { padding: 8px 18px; border-radius: 24px; border: none; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;}
      .btn-cancel { background: transparent; color: #a1a1aa; }
      .btn-cancel:hover { background: rgba(255,255,255,0.08); color: #fff; }
      .btn-add { background: var(--active-color, #0A84FF); color: white; opacity: 0.4; box-shadow: 0 2px 8px rgba(10, 132, 255, 0.2); border-top: 1px solid rgba(255,255,255,0.2); }
      .btn-add.ready { opacity: 1; pointer-events: auto; box-shadow: 0 4px 14px rgba(10, 132, 255, 0.5); }
      .btn-add.ready:hover { filter: brightness(1.1); transform: translateY(-1px); box-shadow: 0 6px 16px rgba(10, 132, 255, 0.6); }

      .marker {
        position: fixed;
        width: 24px;
        height: 24px;
        background: var(--marker-color, #0A84FF);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        transform: translate(-50%, -50%);
        pointer-events: none;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        border: 2px solid rgba(255,255,255,0.9);
        font-size: 14px;
      }

      .marker-saved:not(.layout-placement-box) {
        pointer-events: auto;
        cursor: pointer;
        transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .marker-saved:not(.layout-placement-box):hover {
        transform: translate(-50%, -50%) scale(1.15);
      }

      /* Layout Panel */
      .layout-panel {
        position: fixed;
        width: 280px;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 14px;
        padding: 16px;
        box-shadow: 0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
        pointer-events: auto;
        color: #fff;
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translateY(15px) scale(0.98);
        transform-origin: bottom left;
      }
      .layout-panel.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
      }
      .layout-header { margin-bottom: 12px; }
      .layout-title { font-weight: 600; font-size: 14px; margin-bottom: 4px; }
      .layout-desc { font-size: 12px; color: #8e8e93; line-height: 1.4; margin-bottom: 12px; }
      
      .wireframe-btn {
        width: 100%;
        background: rgba(255,255,255,0.03);
        border: 1px dashed rgba(255,255,255,0.15);
        color: #a1a1aa;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        margin-bottom: 12px;
        transition: all 0.2s ease;
      }
      .wireframe-btn:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.3); color: #fff; }
      
      .layout-list { display: flex; flex-direction: column; gap: 2px; margin-bottom: 12px; }
      .layout-list::-webkit-scrollbar { width: 4px; }
      .layout-list::-webkit-scrollbar-track { background: transparent; }
      .layout-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
      .layout-list::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.25); }

      .layout-item {
        display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 6px; cursor: pointer; transition: 0.15s ease;
      }
      .layout-item:hover { background: rgba(255,255,255,0.08); }
      .layout-icon { color: #8e8e93; display: flex; align-items: center; justify-content: center; transform: scale(0.9); }
      .layout-item:hover .layout-icon { color: #fff; }
      .layout-text { font-size: 13px; font-weight: 500; color: #d1d1d6; }
      .layout-item:hover .layout-text { color: #fff; }
      
      .layout-footer {
        display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #8e8e93;
      }
      .clear-layout-btn { background: transparent; border: none; color: #8e8e93; cursor: pointer; font-size: 12px; transition: 0.2s; }
      .clear-layout-btn:hover { color: #ff453a; }

      .icon-btn.active-bg { background: #0A84FF; color: #fff; }
      .copy-wrap {
        position: relative;
        display: flex;
      }
      .counter {
        position: absolute;
        top: -2px;
        right: -2px;
        background: #FF453A;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        color: white;
        font-weight: bold;
        border: 2px solid #2C2C2E;
        pointer-events: none;
      }
      
      .mcp-btn {
        width: 100%;
        padding: 12px 0 0 0;
        background: transparent;
        border: none;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        transition: color 0.2s;
      }
      .mcp-btn:hover { color: #0A84FF; }

      /* MCP Modal */
      .mcp-modal-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.6);
        backdrop-filter: blur(4px);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
      }
      .mcp-modal {
        background: rgba(0, 0, 0, 0.95);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 16px;
        width: 400px;
        padding: 24px;
        box-shadow: 0 24px 48px rgba(0,0,0,0.5);
      }
      .mcp-header {
        display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;
      }
      .mcp-header h3 { margin: 0; font-size: 18px; font-weight: 600; color: #fff; font-family: 'Outfit', sans-serif;}
      .code-block {
        background: #000;
        padding: 12px;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
        border: 1px solid rgba(255,255,255,0.05);
      }
      .code-block code { font-family: monospace; color: #0A84FF; font-size: 13px; }
    `;
    this.shadowRoot.appendChild(style);

    this.renderToolbar();
    this.renderSettings();
    this.renderLayoutMode();

    this.highlightOverlay = document.createElement('div');
    this.highlightOverlay.style.position = 'fixed';
    this.highlightOverlay.style.border = '2px dashed ' + this.settings.markerColor;
    this.highlightOverlay.style.backgroundColor = this.settings.markerColor + '11';
    this.highlightOverlay.style.pointerEvents = 'none';
    this.highlightOverlay.style.zIndex = '999998';
    this.highlightOverlay.style.transition = 'all 0.1s ease-out';
    this.highlightOverlay.style.display = 'none';
    this.highlightOverlay.style.borderRadius = '6px';
    document.body.appendChild(this.highlightOverlay);

    this.highlightTooltip = document.createElement('div');
    this.highlightTooltip.style.position = 'absolute';
    this.highlightTooltip.style.top = 'calc(100% + 8px)';
    this.highlightTooltip.style.left = '50%';
    this.highlightTooltip.style.transform = 'translateX(-50%)';
    this.highlightTooltip.style.background = 'rgba(0, 0, 0, 0.9)';
    this.highlightTooltip.style.color = '#fff';
    this.highlightTooltip.style.padding = '6px 12px';
    this.highlightTooltip.style.borderRadius = '8px';
    this.highlightTooltip.style.fontSize = '12px';
    this.highlightTooltip.style.fontFamily = 'monospace';
    this.highlightTooltip.style.whiteSpace = 'nowrap';
    this.highlightTooltip.style.boxShadow = '0 8px 16px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)';
    this.highlightTooltip.style.display = 'none';
    this.highlightOverlay.appendChild(this.highlightTooltip);
  }

  private updateHighlightColor() {
    if (this.highlightOverlay) {
      this.highlightOverlay.style.border = '2px dashed ' + this.settings.markerColor;
      this.highlightOverlay.style.backgroundColor = this.settings.markerColor + '11';
    }
  }

  private showCopyModal() {
    if (!this.shadowRoot) return;
    if (this.annotations.length === 0) {
      this.showToast("No annotations to copy!");
      return;
    }
    const existing = this.shadowRoot.querySelector('.mcp-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'mcp-modal-overlay copy-modal-overlay';
    
    let listHtml = this.annotations.map((ann, i) => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px;">
        <div style="font-size: 13px; color: #e5e5ea; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">
          <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${ann.colorHex}; margin-right:8px;"></span>
          ${i + 1}. ${ann.tagName}
        </div>
        <button class="btn-copy-single" data-id="${ann.id}" style="background: rgba(10,132,255,0.15); border: none; color: #0A84FF; border-radius: 6px; cursor: pointer; padding: 4px 10px; font-size: 12px; font-weight: 600;">Copy</button>
      </div>
    `).join('');

    overlay.innerHTML = `
      <div class="mcp-modal" style="width: 360px;">
        <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #fff; font-family: 'Outfit', sans-serif;">Copy Annotations</h3>
        
        <div class="mcp-list" style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; max-height: 240px; overflow-y: auto;">
           ${listHtml}
        </div>

        <div style="display: flex; gap: 12px;">
          <button class="btn btn-cancel" style="flex: 1; padding: 10px; background: rgba(255,255,255,0.1); color: #fff; border-radius: 8px; border: none; cursor: pointer; font-weight: 600;">Close</button>
          <button class="btn btn-confirm" style="flex: 1; padding: 10px; background: #0A84FF; color: #fff; border-radius: 8px; border: none; cursor: pointer; font-weight: 600;">Copy All</button>
        </div>
      </div>
    `;
    
    // Add custom scrollbar for mcp-list
    const styleId = 'mcp-list-scrollbar-style';
    if (!this.shadowRoot.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .mcp-list::-webkit-scrollbar { width: 4px; }
          .mcp-list::-webkit-scrollbar-track { background: transparent; }
          .mcp-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
        `;
        this.shadowRoot.appendChild(style);
    }

    overlay.querySelector('.btn-cancel')?.addEventListener('click', () => overlay.remove());
    
    overlay.querySelectorAll('.btn-copy-single').forEach(btn => {
       btn.addEventListener('click', (e) => {
         const id = (e.currentTarget as HTMLElement).dataset.id;
         this.copyToClipboard(id);
         if (this.settings.clearOnCopy) {
            if (this.annotations.length === 0) overlay.remove();
            else (e.currentTarget as HTMLElement).parentElement?.remove();
         }
       });
    });

    overlay.querySelector('.btn-confirm')?.addEventListener('click', () => {
      this.copyToClipboard();
      if (this.settings.clearOnCopy) {
        overlay.remove();
      }
    });

    this.shadowRoot.appendChild(overlay);
  }

  private showConfirmClear() {
    if (!this.shadowRoot) return;
    if (this.annotations.length === 0) {
      this.showToast("No annotations to clear!");
      return;
    }
    const existing = this.shadowRoot.querySelector('.mcp-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'mcp-modal-overlay';
    
    let listHtml = this.annotations.map((ann, i) => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px;">
        <div style="font-size: 13px; color: #e5e5ea; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">
          <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${ann.colorHex}; margin-right:8px;"></span>
          ${i + 1}. ${ann.tagName}
        </div>
        <button class="btn-delete-single" data-id="${ann.id}" style="background: rgba(255,69,58,0.15); border: none; color: #ff453a; border-radius: 6px; cursor: pointer; padding: 4px 10px; font-size: 12px; font-weight: 600;">Remove</button>
      </div>
    `).join('');

    overlay.innerHTML = `
      <div class="mcp-modal" style="width: 360px;">
        <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #fff; font-family: 'Outfit', sans-serif;">Manage Annotations</h3>
        
        <div class="mcp-list" style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; max-height: 240px; overflow-y: auto;">
           ${listHtml}
        </div>

        <div style="display: flex; gap: 12px;">
          <button class="btn btn-cancel" style="flex: 1; padding: 10px; background: rgba(255,255,255,0.1); color: #fff; border-radius: 8px; border: none; cursor: pointer; font-weight: 600;">Close</button>
          <button class="btn btn-confirm" style="flex: 1; padding: 10px; background: #FF453A; color: #fff; border-radius: 8px; border: none; cursor: pointer; font-weight: 600;">Clear All</button>
        </div>
      </div>
    `;
    
    // Add custom scrollbar for mcp-list
    const styleId = 'mcp-list-scrollbar-style';
    if (!this.shadowRoot.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .mcp-list::-webkit-scrollbar { width: 4px; }
          .mcp-list::-webkit-scrollbar-track { background: transparent; }
          .mcp-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
        `;
        this.shadowRoot.appendChild(style);
    }

    overlay.querySelector('.btn-cancel')?.addEventListener('click', () => overlay.remove());
    
    overlay.querySelectorAll('.btn-delete-single').forEach(btn => {
       btn.addEventListener('click', (e) => {
         const id = (e.currentTarget as HTMLElement).dataset.id;
         this.annotations = this.annotations.filter(a => a.id !== id);
         this.syncDeleteWithLocalServer([id!]);
         
         const markerToRemove = this.shadowRoot?.querySelector(`.marker-saved[data-ann-id="${id}"]`);
         if (markerToRemove) markerToRemove.remove();

         const remainingMarkers = this.shadowRoot?.querySelectorAll('.marker-saved:not(.layout-placement-box)');
         if (remainingMarkers) {
            remainingMarkers.forEach(m => {
               const mId = m.getAttribute('data-ann-id');
               const newIdx = this.annotations.findIndex(a => a.id === mId);
               if (newIdx !== -1) {
                  (m as HTMLElement).innerText = (newIdx + 1).toString();
               }
            });
         }

         if (this.annotations.length === 0) {
            overlay.remove();
         } else {
            (e.currentTarget as HTMLElement).parentElement?.remove();
         }
         
         this.renderToolbar();
       });
    });

    overlay.querySelector('.btn-confirm')?.addEventListener('click', () => {
      const allIds = this.annotations.map(a => a.id);
      this.annotations = []; 
      this.shadowRoot?.querySelectorAll('.marker-saved').forEach(m => m.remove());
      this.syncDeleteWithLocalServer(allIds);
      this.renderToolbar(); 
      this.showToast("Annotations cleared.");
      overlay.remove();
    });

    this.shadowRoot.appendChild(overlay);
  }

  private openMcpModal() {
    if (!this.shadowRoot) return;
    const existing = this.shadowRoot.querySelector('.mcp-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'mcp-modal-overlay';
    overlay.innerHTML = `
      <div class="mcp-modal">
        <div class="mcp-header">
           <h3>Manage MCP Server</h3>
           <button class="icon-btn btn-close-mcp">${ICONS.close}</button>
        </div>
        <div class="mcp-content">
           <p style="color: #8e8e93; font-size: 13px; line-height: 1.5; margin: 0;">To connect Cursor or Claude Code to this UI, you need to run the Observer MCP server locally.</p>
           <div class="code-block">
              <code>npm start --workspace=@observer-ai/mcp</code>
              <button class="icon-btn btn-copy-code">${ICONS.copy}</button>
           </div>
           <p style="color: #8e8e93; font-size: 13px; margin: 16px 0 0 0;">Once running, add the absolute path to the build directory in your Cursor MCP settings.</p>
        </div>
      </div>
    `;
    
    overlay.querySelector('.btn-close-mcp')?.addEventListener('click', () => overlay.remove());
    overlay.querySelector('.btn-copy-code')?.addEventListener('click', () => {
       navigator.clipboard.writeText("npm start --workspace=@observer-ai/mcp");
       this.showToast("Command copied to clipboard!");
    });

    this.shadowRoot.appendChild(overlay);
  }

  private renderToolbar() {
    if (!this.shadowRoot) return;
    const existing = this.shadowRoot.querySelector('.toolbar');
    if (existing) existing.remove();

    const toolbar = document.createElement('div');
    toolbar.className = 'toolbar';

    const pauseBtn = this.createIconBtn('btn-pause', this.animationsPaused ? ICONS.play : ICONS.pause, () => {
      this.togglePauseAnimations();
    }, 'Pause/Play (P)');
    if (this.animationsPaused) pauseBtn.classList.add('active-bg');
    
    // Layout Mode
    const layoutBtn = this.createIconBtn('btn-layout', ICONS.layout, () => {
      this.showLayoutMode = !this.showLayoutMode;
      if (this.showLayoutMode) {
        this.showSettings = false;
        if (!this.animationsPaused) this.togglePauseAnimations();
      } else {
        if (this.animationsPaused) this.togglePauseAnimations();
      }
      this.renderSettings();
      this.renderLayoutMode();
      this.renderToolbar();
    }, 'Layout Mode (L)');
    layoutBtn.id = 'btn-layout';
    if (this.showLayoutMode) layoutBtn.classList.add('active-bg');

    const eyeBtn = this.createIconBtn('btn-eye', ICONS.eye, () => this.toggleHideMarkers(), 'Hide/Show Markers (H)');
    if (this.hideMarkers) eyeBtn.classList.add('active-bg');
    
    // Copy
    const copyWrap = document.createElement('div');
    copyWrap.className = 'copy-wrap';
    const copyBtn = this.createIconBtn('btn-copy', ICONS.copy, () => this.showCopyModal(), 'Copy Annotations (C, Shift+C for All)');
    copyWrap.appendChild(copyBtn);
    if (this.annotations.length > 0) {
      const badge = document.createElement('div');
      badge.className = 'counter';
      badge.innerText = this.annotations.length.toString();
      copyWrap.appendChild(badge);
    }

    const trashBtn = this.createIconBtn('btn-trash', ICONS.trash, () => { 
      this.showConfirmClear();
    }, 'Clear All (Backspace)');
    
    const settingsBtn = this.createIconBtn('btn-settings', ICONS.settings, () => {
      this.showSettings = !this.showSettings;
      if (this.showSettings) this.showLayoutMode = false;
      this.renderLayoutMode();
      this.renderSettings();
      this.renderToolbar();
    }, 'Settings (S)');
    settingsBtn.id = 'btn-settings';
    
    const closeBtn = this.createIconBtn('btn-close', ICONS.close, () => {
      this.isMinimized = true;
      this.showSettings = false;
      this.showLayoutMode = false;
      this.hideMarkers = true;
      this.shadowRoot?.querySelectorAll('.marker-saved').forEach(m => {
        (m as HTMLElement).style.display = 'none';
      });
      if (this.highlightOverlay) this.highlightOverlay.style.display = 'none';
      this.renderSettings();
      this.renderLayoutMode();
      this.renderToolbar();
    }, 'Minimize (Esc)');

    if (this.isMinimized) {
      toolbar.style.padding = '0';
      toolbar.style.borderRadius = '50%';
      toolbar.style.width = '44px';
      toolbar.style.height = '44px';
      toolbar.style.justifyContent = 'center';
      const restoreBtn = this.createIconBtn('btn-restore', ICONS.eye, () => {
        this.isMinimized = false;
        this.hideMarkers = false;
        this.shadowRoot?.querySelectorAll('.marker-saved').forEach(m => {
          (m as HTMLElement).style.display = 'flex';
        });
        this.renderToolbar();
      }, 'Restore (O)');
      restoreBtn.style.color = '#fff';
      restoreBtn.style.width = '100%';
      restoreBtn.style.height = '100%';
      toolbar.append(restoreBtn);

      if (this.annotations.length > 0) {
        const badge = document.createElement('div');
        badge.className = 'counter';
        badge.innerText = this.annotations.length.toString();
        // Adjust badge position for the circular minimized button
        badge.style.top = '0';
        badge.style.right = '0';
        toolbar.appendChild(badge);
      }
    } else {
      // Dividers
      const d1 = document.createElement('div'); d1.className = 'divider';
      const d2 = document.createElement('div'); d2.className = 'divider';
      
      const statusWrap = document.createElement('div');
      statusWrap.className = 'status-indicator-wrap';
      
      const statusDot = document.createElement('div');
      statusDot.className = 'status-dot';
      statusDot.style.backgroundColor = this.isSyncServerConnected ? '#34C759' : '#FF3B30';
      
      const statusTooltip = document.createElement('div');
      statusTooltip.className = 'status-tooltip';
      statusTooltip.innerText = this.isSyncServerConnected ? 'MCP Sync Connected' : 'MCP Sync Disconnected';
      
      statusWrap.append(statusDot, statusTooltip);
      
      toolbar.append(pauseBtn, layoutBtn, eyeBtn, copyWrap, trashBtn, settingsBtn, d1, statusWrap, closeBtn);
    }
    this.shadowRoot.appendChild(toolbar);
  }

  private renderSettings() {
    if (!this.shadowRoot) return;
    let panel = this.shadowRoot.querySelector('.settings-panel') as HTMLElement;
    
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'settings-panel';
      this.shadowRoot.appendChild(panel);
    }

    // Anchor above the toolbar, right aligned to the right edge of toolbar
    const toolbarEl = this.shadowRoot.querySelector('.toolbar');
    if (toolbarEl) {
      const rect = toolbarEl.getBoundingClientRect();
      panel.style.right = (window.innerWidth - rect.right) + 'px';
      panel.style.bottom = (window.innerHeight - rect.top + 16) + 'px';
    }

    if (this.showSettings) {
      panel.classList.add('show');
    } else {
      panel.classList.remove('show');
    }

    let colorSwatches = COLORS.map(c => `
      <div class="color-swatch ${this.settings.markerColor === c.hex ? 'active' : ''}" 
           style="background: ${c.hex}; --swatch-color: ${c.hex}" 
           data-color="${c.hex}"></div>
    `).join('');

    panel.innerHTML = `
      <div class="settings-header">
        Observer AI <span>v1.0.0 ${ICONS.sun}</span>
      </div>
      
      <div class="setting-row">
        <span>Output Detail <span class="help-icon">${ICONS.help}</span></span>
        <span style="font-weight:600; cursor:pointer; color: #fff;" id="toggle-detail">${this.settings.outputDetail} ⋮</span>
      </div>
      
      <div class="setting-row">
        <span>Framework Components <span class="help-icon">${ICONS.help}</span></span>
        <div class="toggle ${this.settings.frameworkComponents ? 'on' : ''}" id="toggle-react"></div>
      </div>
      
      <div class="setting-row">
        <span>Hide Until Restart <span class="help-icon">${ICONS.help}</span></span>
        <div class="toggle ${this.settings.hideUntilRestart ? 'on' : ''}" id="toggle-hide"></div>
      </div>

      <div class="setting-row">
        <span>Auto-apply CSS Tweaks <span class="help-icon">${ICONS.help}</span></span>
        <div class="toggle ${this.settings.applyCssTweaks ? 'on' : ''}" id="toggle-css"></div>
      </div>

      <div style="font-size: 13px; color: #8e8e93; margin-top: 20px; font-weight: 500;">Marker Color</div>
      <div class="color-picker">
        ${colorSwatches}
      </div>

      <div class="setting-row" style="justify-content: flex-start; gap: 12px; margin-bottom: 20px;">
        <div class="custom-checkbox ${this.settings.clearOnCopy ? 'checked' : ''}" id="check-clear">
          ${ICONS.check}
        </div>
        <span style="cursor:pointer" onclick="document.getElementById('check-clear').click()">Clear on copy/send <span class="help-icon">${ICONS.help}</span></span>
      </div>
      
      <div class="setting-row" style="justify-content: flex-start; gap: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px;">
        <div class="custom-checkbox ${this.settings.blockInteractions ? 'checked' : ''}" id="check-block">
          ${ICONS.check}
        </div>
        <span style="cursor:pointer" onclick="document.getElementById('check-block').click()">Block page interactions</span>
      </div>

      <button class="mcp-btn" id="btn-mcp">
        Manage MCP & Webhooks <span>${ICONS.chevronRight}</span>
      </button>
    `;

    // Bind events
    panel.querySelector('#toggle-detail')?.addEventListener('click', () => {
      const modes = ['Compact', 'Standard', 'Detailed', 'Forensic'] as const;
      const idx = modes.indexOf(this.settings.outputDetail as any);
      this.settings.outputDetail = modes[(idx + 1) % modes.length];
      this.renderSettings();
    });
    panel.querySelector('#toggle-react')?.addEventListener('click', () => {
      this.settings.frameworkComponents = !this.settings.frameworkComponents;
      this.renderSettings();
    });
    panel.querySelector('#toggle-hide')?.addEventListener('click', () => {
      this.settings.hideUntilRestart = !this.settings.hideUntilRestart;
      if (this.settings.hideUntilRestart) {
        this.stop(); // Implements hide until restart by destroying UI
      } else {
        this.renderSettings();
      }
    });
    panel.querySelector('#toggle-css')?.addEventListener('click', () => {
      this.settings.applyCssTweaks = !this.settings.applyCssTweaks;
      if (!this.settings.applyCssTweaks) {
         this.annotations.forEach(ann => {
            if (ann.cssTweaks && ann.location && !ann.location.startsWith('Coordinates:')) {
               const el = document.querySelector(ann.location) as HTMLElement;
               if (el) {
                  Object.keys(ann.cssTweaks).forEach(prop => el.style.removeProperty(prop));
               }
            }
         });
      }
      this.renderSettings();
      this.shadowRoot?.querySelectorAll('.marker-saved').forEach(m => m.remove());
      this.annotations.forEach(a => this.renderMarkerForAnnotation(a));
    });
    panel.querySelectorAll('.color-swatch').forEach(el => {
      el.addEventListener('click', (e) => {
        const hex = (e.target as HTMLElement).dataset.color!;
        this.settings.markerColor = hex;
        this.updateHighlightColor();
        this.renderSettings();
      });
    });
    panel.querySelector('#check-clear')?.addEventListener('click', (e) => {
      this.settings.clearOnCopy = !this.settings.clearOnCopy;
      this.renderSettings();
    });
    panel.querySelector('#check-block')?.addEventListener('click', (e) => {
      this.settings.blockInteractions = !this.settings.blockInteractions;
      this.renderSettings();
    });
    panel.querySelector('#btn-mcp')?.addEventListener('click', () => {
      this.openMcpModal();
    });

    this.saveSettings();
  }

  private renderLayoutMode() {
    if (!this.shadowRoot) return;
    let panel = this.shadowRoot.querySelector('.layout-panel') as HTMLElement;
    
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'layout-panel';
      this.shadowRoot.appendChild(panel);
    }

    const layoutBtn = this.shadowRoot.querySelector('#btn-layout');
    if (layoutBtn) {
      const rect = layoutBtn.getBoundingClientRect();
      panel.style.right = (window.innerWidth - rect.right) + 'px';
      panel.style.bottom = (window.innerHeight - rect.top + 16) + 'px';
    }

    if (this.showLayoutMode) {
      panel.classList.add('show');
    } else {
      panel.classList.remove('show');
    }
    this.updateMarkerVisibility();

    const categories = {
      Layout: ['Navigation', 'Header', 'Hero', 'Section', 'Sidebar', 'Footer', 'Modal', 'Banner'],
      Content: ['Card', 'Text', 'Image', 'Video', 'Table', 'Grid', 'List', 'Chart', 'Code Block', 'Map', 'Timeline', 'Calendar', 'Accordion', 'Carousel', 'Logo', 'FAQ', 'Gallery'],
      Controls: ['Button', 'Input', 'Search', 'Form', 'Tabs', 'Dropdown']
    };

    let itemsHtml = '';
    for (const [cat, items] of Object.entries(categories)) {
      itemsHtml += `<div class="layout-subtitle" style="padding: 10px 12px 4px; font-size: 10px; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.4); letter-spacing: 0.5px;">${cat}</div>`;
      itemsHtml += items.map(name => `
        <div class="layout-item" data-name="${name}">
          <span class="layout-icon">${ICONS.layout}</span>
          <span class="layout-text">${name}</span>
        </div>
      `).join('');
    }

    panel.innerHTML = `
      <div class="layout-header">
        <div class="layout-title">Layout Mode</div>
        <div class="layout-desc">Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary. <a href="#" style="color:#8e8e93; text-decoration:underline;">Learn more.</a></div>
      </div>
      
      <button class="wireframe-btn">
        ${ICONS.layout} Wireframe New Page
      </button>
      
      <div class="layout-list" style="max-height: 250px; overflow-y: auto;">
        ${itemsHtml}
      </div>
      
      <div class="layout-footer">
        <span>${this.annotations.filter(a => a.tagName === 'Layout').length} Change(s)</span>
        <button class="clear-layout-btn">Clear</button>
      </div>
    `;

    panel.querySelectorAll('.layout-item').forEach(el => {
      el.addEventListener('click', (e) => {
        const name = (e.currentTarget as HTMLElement).dataset.name!;
        this.activeLayoutComponent = name;
        document.body.style.cursor = 'crosshair';
        this.showLayoutMode = false;
        if (this.animationsPaused) this.togglePauseAnimations();
        this.renderLayoutMode();
        this.renderToolbar();
        this.showToast(`Draw area or click to place ${name}. Press Esc to cancel.`);
      });
    });
    
    panel.querySelector('.wireframe-btn')?.addEventListener('click', () => {
      this.isWireframeMode = !this.isWireframeMode;
      if (this.isWireframeMode) {
        this.showToast("Wireframe Mode ON. Draw layouts directly.");
        if (!this.wireframeOverlay) {
          this.wireframeOverlay = document.createElement('div');
          this.wireframeOverlay.className = 'wireframe-overlay';
          this.shadowRoot?.insertBefore(this.wireframeOverlay, this.shadowRoot.firstChild);
        }
        this.wireframeOverlay.style.display = 'block';
      } else {
        this.showToast("Wireframe Mode OFF.");
        if (this.wireframeOverlay) this.wireframeOverlay.style.display = 'none';
        this.activeLayoutComponent = null;
      }
      this.showLayoutMode = false;
      this.renderLayoutMode();
      this.renderToolbar();
    });

    panel.querySelector('.clear-layout-btn')?.addEventListener('click', () => {
      const layoutAnns = this.annotations.filter(a => a.tagName === 'Layout');
      const layoutIds = layoutAnns.map(a => a.id);
      this.annotations = this.annotations.filter(a => a.tagName !== 'Layout');
      
      if (layoutIds.length > 0) {
        this.shadowRoot?.querySelectorAll('.layout-placement-box').forEach(box => box.remove());
        this.syncDeleteWithLocalServer(layoutIds);
      }
      
      this.renderLayoutMode();
      this.renderToolbar();
      this.showToast("Layout requests cleared.");
    });
    
    // Toggle visibility of existing layout boxes
    this.shadowRoot?.querySelectorAll('.layout-placement-box').forEach((box: Element) => {
      (box as HTMLElement).style.display = this.showLayoutMode ? 'flex' : 'none';
    });
  }

  private addLayoutRequest(name: string) {
    this.annotations.push({
      id: Math.random().toString(36).substring(7),
      tagName: 'Layout',
      text: name,
      location: 'Global (New Component)',
      source: 'Observer AI Layout Mode',
      feedback: `User requested to wireframe/add a new **${name}** component.`,
      colorHex: '#32ADE6',
      colorName: '💠'
    });
    this.showToast(`${name} request added!`);
    this.renderToolbar();
  }

  private createIconBtn(id: string, iconHtml: string, onClick: () => void, title?: string) {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = 'icon-btn';
    btn.innerHTML = iconHtml;
    if (title) btn.setAttribute('data-tooltip', title);
    btn.onclick = onClick;
    return btn;
  }

  private handleMouseDown(e: MouseEvent) {
    if (!this.isActive || this.isMinimized || e.button !== 0) return;
    
    const target = (e.composedPath()[0] as HTMLElement) || (e.target as HTMLElement);
    const isResizeHandle = target.classList?.contains('layout-resize-handle');
    const isLayoutBox = target.classList?.contains('layout-placement-box') || target.classList?.contains('layout-placement-label');
    
    if (isResizeHandle || isLayoutBox) {
      e.preventDefault();
      e.stopPropagation();
      
      const box = isResizeHandle ? target.parentElement! : (target.classList.contains('layout-placement-label') ? target.parentElement! : target);
      this.activeLayoutBoxId = box.getAttribute('data-ann-id');
      
      if (isResizeHandle) {
        this.isResizingLayoutBox = true;
      } else {
        this.isDraggingLayoutBox = true;
      }
      
      this.layoutDragStartPos = { x: e.pageX, y: e.pageY };
      const rect = box.getBoundingClientRect();
      this.layoutDragStartRect = { top: rect.top + window.scrollY, left: rect.left + window.scrollX, width: rect.width, height: rect.height };
      return;
    }
    
    this.justClosedPanel = false;
    const isInsideShadow = this.shadowRoot ? e.composedPath().includes(this.shadowRoot) : false;

    if (!isInsideShadow && (e.target as HTMLElement).id !== 'observer-ai-root') {
      let closedSomething = false;
      if (this.showLayoutMode) {
        this.showLayoutMode = false;
        this.renderLayoutMode();
        closedSomething = true;
      }
      if (this.showSettings) {
        this.showSettings = false;
        this.renderSettings();
        closedSomething = true;
      }
      const existingPopup = this.shadowRoot?.querySelector('.popup');
      if (existingPopup) {
        const cancelBtn = existingPopup.querySelector('.btn-cancel') as HTMLButtonElement;
        if (cancelBtn) {
          cancelBtn.click();
        } else {
          existingPopup.remove();
        }
        closedSomething = true;
      }
      if (closedSomething) {
        this.renderToolbar();
        this.justClosedPanel = true;
        return;
      }
    }

    if (this.animationsPaused && !this.activeLayoutComponent) return;

    if (this.shadowRoot?.querySelector('.popup') || isInsideShadow || (e.target as HTMLElement).id === 'observer-ai-root') return;

    if (this.activeLayoutComponent || this.settings.blockInteractions) {
      e.preventDefault();
    }

    this.startX = e.clientX;
    this.startY = e.clientY;
    this.isDragging = false;
  }

  private handleMouseMove(e: MouseEvent) {
    if (this.isResizingLayoutBox || this.isDraggingLayoutBox) {
      if (!this.activeLayoutBoxId) return;
      const box = this.shadowRoot?.querySelector(`.layout-placement-box[data-ann-id="${this.activeLayoutBoxId}"]`) as HTMLElement;
      if (!box) return;

      const deltaX = e.pageX - this.layoutDragStartPos.x;
      const deltaY = e.pageY - this.layoutDragStartPos.y;

      if (this.isResizingLayoutBox) {
        const maxWidth = document.documentElement.scrollWidth - this.layoutDragStartRect.left;
        const maxHeight = document.documentElement.scrollHeight - this.layoutDragStartRect.top;
        const newWidth = Math.min(maxWidth, Math.max(20, this.layoutDragStartRect.width + deltaX));
        const newHeight = Math.min(maxHeight, Math.max(20, this.layoutDragStartRect.height + deltaY));
        box.style.width = `${newWidth}px`;
        box.style.height = `${newHeight}px`;
      } else if (this.isDraggingLayoutBox) {
        const newLeft = Math.max(0, this.layoutDragStartRect.left + deltaX);
        const newTop = Math.max(0, this.layoutDragStartRect.top + deltaY);
        box.style.left = `${newLeft}px`;
        box.style.top = `${newTop}px`;
      }
      return;
    }

    if (!this.isActive || this.isMinimized || (this.animationsPaused && !this.activeLayoutComponent) || this.shadowRoot?.querySelector('.popup')) return;



    const isInsideShadow = this.shadowRoot ? e.composedPath().includes(this.shadowRoot) : false;
    if (isInsideShadow || (e.target as HTMLElement).id === 'observer-ai-root') return;

    let target = e.target as HTMLElement;

    if (e.buttons === 1) {
      const dx = Math.abs(e.clientX - this.startX);
      const dy = Math.abs(e.clientY - this.startY);
      if (dx > 5 || dy > 5) {
        this.isDragging = true;
        if (this.highlightOverlay) this.highlightOverlay.style.display = 'none';

        if (!this.selectionBox) {
          this.selectionBox = document.createElement('div');
          this.selectionBox.style.position = 'fixed';
          this.selectionBox.style.border = '2px dashed #34C759';
          this.selectionBox.style.backgroundColor = 'rgba(52, 199, 89, 0.2)';
          this.selectionBox.style.zIndex = '999997';
          this.selectionBox.style.pointerEvents = 'none';
          document.body.appendChild(this.selectionBox);
          document.body.style.userSelect = 'none';
          window.getSelection()?.removeAllRanges();
        }

        const left = Math.min(e.clientX, this.startX);
        const top = Math.min(e.clientY, this.startY);
        this.selectionBox.style.left = left + 'px';
        this.selectionBox.style.top = top + 'px';
        this.selectionBox.style.width = dx + 'px';
        this.selectionBox.style.height = dy + 'px';
      }
      return;
    }

    this.activeElement = target;
    const rect = target.getBoundingClientRect();
    
    if (this.highlightOverlay) {
      if (this.animationsPaused) {
        this.highlightOverlay.style.display = 'none';
      } else {
        this.highlightOverlay.style.display = 'block';
        this.highlightOverlay.style.top = rect.top + 'px';
        this.highlightOverlay.style.left = rect.left + 'px';
        this.highlightOverlay.style.width = rect.width + 'px';
        this.highlightOverlay.style.height = rect.height + 'px';
        
        if (this.highlightTooltip) {
           if (this.settings.frameworkComponents) {
              const path = this.getFrameworkComponentPath(target);
              if (path.length > 0) {
                 const pathFormatted = path.map(p => `<span style="color:#abb2bf">&lt;</span><span style="color:#e5c07b">${p}</span><span style="color:#abb2bf">&gt;</span>`);
                 this.highlightTooltip.innerHTML = pathFormatted.join(' <span style="color:#5c6370; margin: 0 4px;">&gt;</span> ');
                 this.highlightTooltip.style.display = 'block';
                 
                 if (rect.bottom + 40 > window.innerHeight) {
                    this.highlightTooltip.style.top = 'auto';
                    this.highlightTooltip.style.bottom = 'calc(100% + 8px)';
                 } else {
                    this.highlightTooltip.style.top = 'calc(100% + 8px)';
                    this.highlightTooltip.style.bottom = 'auto';
                 }
              } else {
                 this.highlightTooltip.style.display = 'none';
              }
           } else {
              this.highlightTooltip.style.display = 'none';
           }
        }
      }
    }
  }

  private handleMouseUp(e: MouseEvent) {
    if (!this.isActive || this.isMinimized || e.button !== 0) return;

    if (this.isResizingLayoutBox || this.isDraggingLayoutBox) {
      if (this.activeLayoutBoxId) {
        const box = this.shadowRoot?.querySelector(`.layout-placement-box[data-ann-id="${this.activeLayoutBoxId}"]`) as HTMLElement;
        if (box) {
          const rect = box.getBoundingClientRect();
          const annotationIndex = this.annotations.findIndex(a => a.id === this.activeLayoutBoxId);
          if (annotationIndex !== -1) {
            this.annotations[annotationIndex].placementRect = {
              top: rect.top + window.scrollY,
              left: rect.left + window.scrollX,
              width: rect.width,
              height: rect.height
            };
            this.syncWithLocalServer(this.annotations[annotationIndex] as any);
          }
        }
      }
      this.isResizingLayoutBox = false;
      this.isDraggingLayoutBox = false;
      this.activeLayoutBoxId = null;
      return;
    }

    const isInsideShadow = this.shadowRoot ? e.composedPath().includes(this.shadowRoot) : false;
    
    if (isInsideShadow || (e.target as HTMLElement).id === 'observer-ai-root') return;

    if (this.justClosedPanel) {
      this.justClosedPanel = false;
      return;
    }

    if (this.animationsPaused && !this.activeLayoutComponent) return;

    if (this.settings.blockInteractions) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (this.isDragging && this.selectionBox) {
      const rect = this.selectionBox.getBoundingClientRect();
      this.selectionBox.remove();
      this.selectionBox = null;
      this.isDragging = false;
      this.selectedElement = null;
      document.body.style.userSelect = '';
      window.getSelection()?.removeAllRanges();

      if (this.activeLayoutComponent) {
        const colorHex = '#32ADE6';
        const annId = Math.random().toString(36).substring(7);
        const layoutAnn = {
          id: annId,
          tagName: 'Layout',
          text: this.activeLayoutComponent,
          location: 'Global (Placement)',
          source: 'Observer AI Layout Engine',
          feedback: `Placement for ${this.activeLayoutComponent}`,
          colorHex: colorHex,
          colorName: '💠',
          kind: 'placement' as const,
          placementRect: { top: rect.top + window.scrollY, left: rect.left + window.scrollX, width: rect.width, height: rect.height }
        };
        this.annotations.push(layoutAnn);
        this.syncWithLocalServer(layoutAnn as any);

        const componentClass = `box-${this.activeLayoutComponent.toLowerCase().replace(/\s+/g, '-')}`;
        const box = document.createElement('div');
        box.className = `layout-placement-box marker-saved ${componentClass}`;
        box.setAttribute('data-ann-id', annId);
        box.style.top = `${rect.top + window.scrollY}px`;
        box.style.left = `${rect.left + window.scrollX}px`;
        box.style.width = `${rect.width}px`;
        box.style.height = `${rect.height}px`;
        
        const label = document.createElement('div');
        label.className = 'layout-placement-label';
        label.textContent = this.activeLayoutComponent;
        box.appendChild(label);

        const deleteBtn = document.createElement('div');
        deleteBtn.className = 'layout-delete-btn';
        deleteBtn.innerHTML = '×';
        deleteBtn.title = 'Delete Layout Box';
        deleteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          box.remove();
          this.annotations = this.annotations.filter(a => a.id !== annId);
          this.syncDeleteWithLocalServer([annId]);
          this.renderToolbar();
        });
        box.appendChild(deleteBtn);
        
        const resizeHandle = document.createElement('div');
        resizeHandle.className = 'layout-resize-handle';
        box.appendChild(resizeHandle);
        
        this.shadowRoot?.appendChild(box);
        
        this.showToast(`${this.activeLayoutComponent} placed successfully.`);
        if (!this.isWireframeMode) {
           this.activeLayoutComponent = null;
           document.body.style.cursor = '';
        }
        this.renderToolbar();
      } else {
        this.showPopup(rect.right, rect.bottom, { customType: 'Area', areaRect: rect, customText: `Area Selection (${Math.round(rect.width)}x${Math.round(rect.height)})` });
      }
    } else {
      if (this.activeLayoutComponent) {
        const defaultWidth = 300;
        const defaultHeight = 100;
        const annId = Math.random().toString(36).substring(7);
        
        let pageX = e.pageX;
        let pageY = e.pageY;
        const maxLeft = document.documentElement.scrollWidth - defaultWidth;
        const maxTop = document.documentElement.scrollHeight - defaultHeight;
        pageX = Math.min(maxLeft, Math.max(0, pageX));
        pageY = Math.min(maxTop, Math.max(0, pageY));

        const layoutAnn = {
          id: annId,
          tagName: 'Layout',
          text: this.activeLayoutComponent,
          location: 'Global (Placement)',
          source: 'Observer AI Layout Engine',
          feedback: `Placement for ${this.activeLayoutComponent}`,
          colorHex: '#32ADE6',
          colorName: '💠',
          kind: 'placement' as const,
          placementRect: { top: pageY, left: pageX, width: defaultWidth, height: defaultHeight }
        };
        
        this.annotations.push(layoutAnn as any);
        this.syncWithLocalServer(layoutAnn as any);

        const componentClass = `box-${this.activeLayoutComponent.toLowerCase().replace(/\s+/g, '-')}`;
        const box = document.createElement('div');
        box.className = `layout-placement-box marker-saved ${componentClass}`;
        box.setAttribute('data-ann-id', annId);
        box.style.top = `${pageY}px`;
        box.style.left = `${pageX}px`;
        box.style.width = `${defaultWidth}px`;
        box.style.height = `${defaultHeight}px`;
        
        const label = document.createElement('div');
        label.className = 'layout-placement-label';
        label.textContent = this.activeLayoutComponent;
        box.appendChild(label);

        const deleteBtn = document.createElement('div');
        deleteBtn.className = 'layout-delete-btn';
        deleteBtn.innerHTML = '×';
        deleteBtn.title = 'Delete Layout Box';
        deleteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          box.remove();
          this.annotations = this.annotations.filter(a => a.id !== annId);
          this.syncDeleteWithLocalServer([annId]);
          this.renderToolbar();
        });
        box.appendChild(deleteBtn);
        
        const resizeHandle = document.createElement('div');
        resizeHandle.className = 'layout-resize-handle';
        box.appendChild(resizeHandle);
        
        this.shadowRoot?.appendChild(box);
        
        this.showToast(`${this.activeLayoutComponent} placed successfully.`);
        if (!this.isWireframeMode) {
           this.activeLayoutComponent = null;
           document.body.style.cursor = '';
        }
        this.renderToolbar();
        return;
      }

      this.selectedElement = e.target as HTMLElement;
      if (this.highlightOverlay) this.highlightOverlay.style.display = 'none';
      
      const selection = window.getSelection();
      const selectedText = selection?.toString().trim();
      
      if (selectedText && selectedText.length > 0) {
        const range = selection!.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        this.showPopup(rect.right, rect.bottom, { customType: 'Text', customText: selectedText });
      } else {
        this.showPopup(e.clientX, e.clientY);
      }
    }
  }

  private handleClick(e: MouseEvent) {
    if (!this.isActive || this.isMinimized || (this.animationsPaused && !this.activeLayoutComponent)) return;
    const isInsideShadow = this.shadowRoot ? e.composedPath().includes(this.shadowRoot) : false;
    if (isInsideShadow || (e.target as HTMLElement).id === 'observer-ai-root') return;
    if (this.settings.blockInteractions) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  private showPopup(x: number, y: number, options: { editAnn?: Annotation; editMarker?: HTMLElement; customType?: 'Area' | 'Text'; customText?: string; areaRect?: DOMRect; } = {}) {
    if (!this.shadowRoot) return;
    const existing = this.shadowRoot.querySelector('.popup');
    if (existing) existing.remove();
    
    this.shadowRoot.querySelectorAll('.marker:not(.marker-saved)').forEach(m => m.remove());

    const isArea = options.customType === 'Area';
    const isText = options.customType === 'Text';
    const currentColor = options.editAnn ? options.editAnn.colorHex : 
                         isArea ? '#34C759' :
                         isText ? '#32ADE6' :
                         this.settings.markerColor;

    let marker = options.editMarker;
    if (!marker) {
      marker = document.createElement('div');
      marker.className = 'marker';
      marker.innerText = '+';
      marker.style.left = x + 'px';
      marker.style.top = y + 'px';
      marker.style.setProperty('--marker-color', currentColor);
      this.shadowRoot.appendChild(marker);
    } else {
      marker.classList.remove('marker-saved');
      marker.classList.add('marker');
      marker.innerText = '+';
    }

    const popup = document.createElement('div');
    popup.className = 'popup';
    
    let px = x + 20;
    let py = y + 20;
    if (px + 320 > window.innerWidth) px = x - 340;
    if (py + 200 > window.innerHeight) py = y - 220;
    
    popup.style.left = px + 'px';
    popup.style.top = py + 'px';

    const repositionPopup = () => {
      let currentPx = px;
      let currentPy = py;
      popup.style.left = currentPx + 'px';
      popup.style.top = currentPy + 'px';
      const rect = popup.getBoundingClientRect();
      
      if (rect.bottom > window.innerHeight - 15) {
        currentPy = window.innerHeight - rect.height - 15;
      }
      if (rect.right > window.innerWidth - 15) {
        currentPx = window.innerWidth - rect.width - 15;
      }
      if (currentPy < 15) currentPy = 15;
      if (currentPx < 15) currentPx = 15;
      
      popup.style.left = currentPx + 'px';
      popup.style.top = currentPy + 'px';
    };

    let breadcrumbText = options.editAnn ? options.editAnn.tagName : 
                         isArea ? 'Area Selection' :
                         isText ? 'Text Selection' :
                         'element';
    if (!options.editAnn && !isArea && !isText && this.selectedElement) {
      if (this.selectedElement.className && typeof this.selectedElement.className === 'string') {
         const classes = this.selectedElement.className.split(' ').filter(c => c.length > 0);
         breadcrumbText = classes.length > 0 ? '.' + classes[0] : this.selectedElement.tagName.toLowerCase();
      } else {
         breadcrumbText = this.selectedElement.tagName.toLowerCase();
      }
    }

    const actionText = options.editAnn ? 'Save' : 'Add';

    let viewportWarningHtml = '';
    if (options.editAnn && options.editAnn.viewportContext) {
      const v = options.editAnn.viewportContext;
      if (Math.abs(window.innerWidth - v.width) > 100 || Math.abs(window.innerHeight - v.height) > 100) {
        viewportWarningHtml = `<div class="viewport-warning" style="font-size: 11px; color: #FF9F0A; background: rgba(255, 159, 10, 0.1); padding: 4px 8px; border-radius: 4px; margin-bottom: 8px; border: 1px solid rgba(255, 159, 10, 0.2);">⚠️ Reported on ${v.width}x${v.height} viewport</div>`;
      }
    }

    const hasTargetElement = !isArea && !isText && (this.selectedElement || options.editAnn);
    let cssTweakerHtml = '';
    let currentTweaks = options.editAnn?.cssTweaks || {};
    
    if (hasTargetElement) {
      cssTweakerHtml = `
        <div class="css-tweaker" style="margin-top: 14px; background: #151515; border: 1px solid #2a2a2a; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
          <div class="css-tweaker-header" style="padding: 10px 12px; font-size: 13px; font-weight: 600; color: #e5e5ea; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background: #1c1c1e; border-bottom: 1px solid #2a2a2a;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 14px;">🎨</span> <span>Tweak UI</span>
            </div>
            <svg class="chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8e8e93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.2s;"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <div class="css-tweaker-body" style="display: ${Object.keys(currentTweaks).length > 0 ? 'flex' : 'none'}; padding: 14px 12px; flex-direction: column; gap: 12px; font-size: 13px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: #a1a1aa; width: 80px; font-weight: 500;">Background</span>
              <div style="display: flex; align-items: center; background: #2c2c2e; border: 1px solid #3a3a3c; border-radius: 6px; padding: 6px 8px; width: 130px; box-sizing: border-box; transition: border-color 0.2s; box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);" onfocusin="this.style.borderColor='#666'" onfocusout="this.style.borderColor='#3a3a3c'">
                <input type="color" id="tweak-bg-picker" value="${(currentTweaks['background-color']?.startsWith('#') ? currentTweaks['background-color'].substring(0,7) : '#000000')}" style="width: 16px; height: 16px; padding: 0; border: none; border-radius: 4px; cursor: pointer; background: transparent; flex-shrink: 0;">
                <span style="color: #8e8e93; font-family: monospace; margin-left: 8px;">#</span>
                <input type="text" id="tweak-bg" value="${(currentTweaks['background-color'] || '').replace(/^#/, '')}" placeholder="000000" style="background: transparent; border: none; color: #fff; width: 100%; outline: none; font-family: monospace; font-size: 13px; padding: 0;">
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: #a1a1aa; width: 80px; font-weight: 500;">Text Color</span>
              <div style="display: flex; align-items: center; background: #2c2c2e; border: 1px solid #3a3a3c; border-radius: 6px; padding: 6px 8px; width: 130px; box-sizing: border-box; transition: border-color 0.2s; box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);" onfocusin="this.style.borderColor='#666'" onfocusout="this.style.borderColor='#3a3a3c'">
                <input type="color" id="tweak-color-picker" value="${(currentTweaks['color']?.startsWith('#') ? currentTweaks['color'].substring(0,7) : '#ffffff')}" style="width: 16px; height: 16px; padding: 0; border: none; border-radius: 4px; cursor: pointer; background: transparent; flex-shrink: 0;">
                <span style="color: #8e8e93; font-family: monospace; margin-left: 8px;">#</span>
                <input type="text" id="tweak-color" value="${(currentTweaks['color'] || '').replace(/^#/, '')}" placeholder="ffffff" style="background: transparent; border: none; color: #fff; width: 100%; outline: none; font-family: monospace; font-size: 13px; padding: 0;">
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: #a1a1aa; width: 80px; font-weight: 500;">Padding</span>
              <input type="text" id="tweak-padding" value="${currentTweaks['padding'] || ''}" placeholder="16px 24px" style="background: #2c2c2e; border: 1px solid #3a3a3c; color: #fff; padding: 6px 8px; border-radius: 6px; width: 130px; box-sizing: border-box; font-family: monospace; font-size: 13px; outline: none; transition: border-color 0.2s; box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);" onfocus="this.style.borderColor='#666'" onblur="this.style.borderColor='#3a3a3c'">
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: #a1a1aa; width: 80px; font-weight: 500;">Radius</span>
              <input type="text" id="tweak-radius" value="${currentTweaks['border-radius'] || ''}" placeholder="8px" style="background: #2c2c2e; border: 1px solid #3a3a3c; color: #fff; padding: 6px 8px; border-radius: 6px; width: 130px; box-sizing: border-box; font-family: monospace; font-size: 13px; outline: none; transition: border-color 0.2s; box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);" onfocus="this.style.borderColor='#666'" onblur="this.style.borderColor='#3a3a3c'">
            </div>
          </div>
        </div>
      `;
    }

    popup.innerHTML = `
      <div class="breadcrumb"><span>›</span> ${breadcrumbText}</div>
      ${viewportWarningHtml}
      <div class="textarea-wrapper" style="--active-color: ${currentColor}">
        <textarea placeholder="What should change?">${options.editAnn ? options.editAnn.feedback : ''}</textarea>
      </div>
      ${cssTweakerHtml}
      <div class="popup-actions">
        <button class="btn btn-cancel">Cancel</button>
        <button class="btn btn-add ${options.editAnn ? 'ready' : ''}" style="--active-color: ${currentColor}">${actionText}</button>
      </div>
    `;

    const textarea = popup.querySelector('textarea')!;
    const btnAdd = popup.querySelector('.btn-add') as HTMLButtonElement;
    const btnCancel = popup.querySelector('.btn-cancel') as HTMLButtonElement;

    textarea.addEventListener('input', () => {
      if (textarea.value.trim().length > 0) {
        btnAdd.classList.add('ready');
      } else {
        btnAdd.classList.remove('ready');
      }
    });

    let liveCssTweaks: Record<string, string> = { ...currentTweaks };
    if (hasTargetElement) {
      const header = popup.querySelector('.css-tweaker-header') as HTMLElement;
      const body = popup.querySelector('.css-tweaker-body') as HTMLElement;
      const chevron = popup.querySelector('.chevron') as HTMLElement;
      
      if (Object.keys(currentTweaks).length > 0) {
        chevron.style.transform = 'rotate(180deg)';
      }

      header.onclick = () => {
        const isHidden = body.style.display === 'none';
        body.style.display = isHidden ? 'flex' : 'none';
        chevron.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        repositionPopup();
      };

      const targetEl = (options.editAnn && options.editAnn.location) 
        ? (document.querySelector(options.editAnn.location) as HTMLElement) 
        : this.selectedElement;
      
      const applyTweak = (property: string, value: string) => {
        let val = value.trim();
        if (!val) {
          delete liveCssTweaks[property];
          if (targetEl) targetEl.style.removeProperty(property);
        } else {
          if ((property === 'color' || property === 'background-color') && /^[0-9a-fA-F]{3,8}$/.test(val)) {
            val = '#' + val;
          }
          liveCssTweaks[property] = val;
          if (targetEl) targetEl.style.setProperty(property, val, 'important');
        }
      };

      const inputs = [
        { id: '#tweak-bg', pickerId: '#tweak-bg-picker', prop: 'background-color' },
        { id: '#tweak-color', pickerId: '#tweak-color-picker', prop: 'color' },
        { id: '#tweak-padding', prop: 'padding' },
        { id: '#tweak-radius', prop: 'border-radius' }
      ];

      inputs.forEach(({ id, pickerId, prop }) => {
        const input = popup.querySelector(id) as HTMLInputElement;
        const picker = pickerId ? popup.querySelector(pickerId) as HTMLInputElement : null;
        
        if (input) {
          input.addEventListener('input', (e) => {
            let val = (e.target as HTMLInputElement).value;
            if (picker && val) {
              // Ensure val is a valid 6-char hex before syncing to picker to avoid warnings
              let syncVal = val;
              if (syncVal.length === 3) {
                 syncVal = syncVal.split('').map(c => c+c).join('');
              }
              if (/^[0-9a-fA-F]{6}$/.test(syncVal)) {
                picker.value = '#' + syncVal;
              }
            }
            if (pickerId) { // For color inputs, we need to prepend the # when applying
              applyTweak(prop, val ? '#' + val : '');
            } else {
              applyTweak(prop, val);
            }
          });
        }
        
        if (picker && input) {
          picker.addEventListener('input', (e) => {
            const val = (e.target as HTMLInputElement).value; // always starts with #
            input.value = val.substring(1);
            applyTweak(prop, val);
          });
        }
      });
    }

    btnCancel.onclick = () => {
      popup.remove();
      if (!options.editAnn) {
        marker!.remove();
      } else {
        marker!.classList.add('marker', 'marker-saved');
        marker!.innerText = (this.annotations.findIndex(a => a.id === options.editAnn!.id) + 1).toString();
      }
    };

    btnAdd.onclick = () => {
      if (textarea.value.trim().length === 0) return;
      let newAnn: Annotation;
      if (options.editAnn) {
        options.editAnn.feedback = textarea.value.trim();
        options.editAnn.cssTweaks = liveCssTweaks;
        newAnn = options.editAnn;
        this.showToast("Annotation updated!");
      } else {
        newAnn = this.saveAnnotation(textarea.value.trim(), currentColor, { ...options, cssTweaks: liveCssTweaks });
      }
      this.syncWithLocalServer(newAnn);
      popup.remove();
      
      marker!.classList.add('marker', 'marker-saved');
      marker!.style.position = 'fixed';
      marker!.style.width = '24px';
      marker!.style.height = '24px';
      marker!.style.background = currentColor;
      marker!.style.borderRadius = '50%';
      marker!.style.display = 'flex';
      marker!.style.alignItems = 'center';
      marker!.style.justifyContent = 'center';
      marker!.style.color = 'white';
      marker!.style.fontWeight = 'bold';
      marker!.style.transform = 'translate(-50%, -50%)';
      marker!.style.pointerEvents = 'auto';
      marker!.style.cursor = 'context-menu';
      marker!.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
      marker!.style.border = '2px solid rgba(255,255,255,0.8)';
      marker!.setAttribute('data-ann-id', newAnn.id);
      marker!.innerText = (this.annotations.findIndex(a => a.id === newAnn.id) + 1).toString();

      if (!options.editAnn) {
        const editHandler = (e: MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          const r = marker!.getBoundingClientRect();
          this.showPopup(r.left + r.width/2, r.top + r.height/2, { editAnn: newAnn, editMarker: marker! });
        };
        marker!.addEventListener('click', editHandler);
        marker!.addEventListener('contextmenu', editHandler);
      }

      this.renderToolbar();
    };

    this.shadowRoot.appendChild(popup);
    repositionPopup();
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }

  private saveAnnotation(feedback: string, colorHex: string, options: { customType?: 'Area' | 'Text'; customText?: string; areaRect?: DOMRect; cssTweaks?: Record<string, string>; }): Annotation {
    let tag = '';
    let text = '';
    let location = '';
    let source = 'Unknown Source';

    if (options.customType === 'Area') {
       tag = 'AreaSelection';
       text = options.customText || '';
       location = `Coordinates: ${Math.round(options.areaRect!.x)}, ${Math.round(options.areaRect!.y)} (${Math.round(options.areaRect!.width)}x${Math.round(options.areaRect!.height)})`;
    } else if (options.customType === 'Text') {
       tag = 'TextSelection';
       text = options.customText || '';
       if (this.selectedElement) {
         location = this.generateCssPath(this.selectedElement);
         source = this.extractReactSource(this.selectedElement);
       }
    } else {
      if (!this.selectedElement) throw new Error('No selected element');
      tag = this.selectedElement.tagName.toLowerCase();
      text = this.selectedElement.innerText || '';
      location = this.generateCssPath(this.selectedElement);
      source = this.extractReactSource(this.selectedElement);
    }
    
    if (text.length > 50) text = text.substring(0, 50) + '...';

    let computedStyles: Record<string, string> = {};
    let elementIdentity: Record<string, string> = {};
    let parentConstraints: Record<string, string> = {};
    if (this.selectedElement) {
       const s = window.getComputedStyle(this.selectedElement);
       const r = this.selectedElement.getBoundingClientRect();
       computedStyles = {
         color: s.color,
         backgroundColor: s.backgroundColor,
         fontFamily: s.fontFamily,
         fontSize: s.fontSize,
         fontWeight: s.fontWeight,
         padding: s.padding,
         margin: s.margin,
         borderRadius: s.borderRadius,
         width: `${Math.round(r.width)}px`,
         height: `${Math.round(r.height)}px`,
         x: `${Math.round(r.left)}px`,
         y: `${Math.round(r.top)}px`,
         display: s.display,
         flexDirection: s.display === 'flex' ? s.flexDirection : '',
         gap: s.gap !== 'normal' ? s.gap : ''
       };

       const attrs = ['data-testid', 'aria-label', 'role', 'href', 'placeholder', 'src', 'type', 'name'];
       attrs.forEach(attr => {
         const val = this.selectedElement!.getAttribute(attr);
         if (val) elementIdentity[attr] = val;
       });

       if (this.selectedElement.parentElement) {
         const ps = window.getComputedStyle(this.selectedElement.parentElement);
         parentConstraints = {
           display: ps.display,
           flexDirection: ps.display === 'flex' ? ps.flexDirection : '',
           alignItems: ps.alignItems,
           justifyContent: ps.justifyContent,
           gap: ps.gap !== 'normal' ? ps.gap : '',
           backgroundColor: ps.backgroundColor !== 'rgba(0, 0, 0, 0)' ? ps.backgroundColor : ''
         };
       }
    }

    const colorObj = COLORS.find(c => c.hex === colorHex) || COLORS[1];

    let forensicProps: string | undefined;
    if (this.settings.outputDetail === 'Forensic' && this.selectedElement) {
       try {
         const keys = Object.keys(this.selectedElement);
         const fiberKey = keys.find(k => k.startsWith('__reactFiber$'));
         if (fiberKey) {
            const fiber = (this.selectedElement as any)[fiberKey];
            if (fiber && fiber.memoizedProps) {
              forensicProps = JSON.stringify(fiber.memoizedProps, (k, v) => typeof v === 'function' ? '[Function]' : v, 2);
            }
         }
       } catch(e){}
    }

    const newAnn = {
      id: Math.random().toString(36).substring(7),
      tagName: tag,
      text: text.replace(/\n/g, ' '),
      location,
      source,
      feedback,
      colorHex: colorObj.hex,
      colorName: colorObj.emoji,
      computedStyles,
      elementIdentity,
      parentConstraints,
      forensicProps,
      viewportContext: { width: window.innerWidth, height: window.innerHeight },
      cssTweaks: options.cssTweaks
    };
    this.annotations.push(newAnn);
    return newAnn;
  }

  private async syncWithLocalServer(annotation: Annotation) {
    try {
      const res = await fetch('http://localhost:3042/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(annotation)
      });
      if (res.ok) {
        this.showToast('Synced to MCP server!');
      }
    } catch (e) {
      console.warn('[Observer AI] MCP Sync server not running. Proceeding locally.');
    }
  }

  private async syncDeleteWithLocalServer(ids: string[]) {
    if (ids.length === 0) return;
    ids.forEach(id => this.deletedAnnotationIds.add(id));
    try {
      const res = await fetch('http://localhost:3042/sync', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ids)
      });
      if (res.ok) {
        this.showToast('Deletions synced to MCP server!');
      }
    } catch (e) {
      console.warn('[Observer AI] MCP Sync server not running. Proceeding locally.');
    }
  }

  private isSyncServerConnected: boolean = false;
  private deletedAnnotationIds = new Set<string>();

  private startPolling() {
    this.pollInterval = setInterval(async () => {
      try {
        const res = await fetch('http://localhost:3042/sync');
        if (res.ok) {
          if (!this.isSyncServerConnected) {
            this.isSyncServerConnected = true;
            this.renderToolbar();
          }
          const remoteAnnotations: Annotation[] = await res.json();
          let changed = false;
          let countChanged = false;
          remoteAnnotations.forEach(remote => {
            if (this.deletedAnnotationIds.has(remote.id)) return;
            const local = this.annotations.find(a => a.id === remote.id);
            if (!local) {
              this.annotations.push(remote);
              this.renderMarkerForAnnotation(remote);
              changed = true;
              countChanged = true;
            } else if (local.status !== remote.status) {
              local.status = remote.status;
              local.dismissReason = remote.dismissReason;
              changed = true;
            }
          });
          if (changed) {
            this.updateMarkersUI();
          }
          if (countChanged) {
            this.renderToolbar();
          }
        } else {
          if (this.isSyncServerConnected) {
            this.isSyncServerConnected = false;
            this.renderToolbar();
          }
        }
      } catch (e) {
        if (this.isSyncServerConnected) {
          this.isSyncServerConnected = false;
          this.renderToolbar();
        }
      }
    }, 2000);
  }

  private stopPolling() {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
      this.pollInterval = null;
    }
  }

  private renderMarkerForAnnotation(ann: Annotation) {
    if (!this.shadowRoot) return;
    if (this.shadowRoot.querySelector(`.marker-saved[data-ann-id="${ann.id}"]`)) return;

    if (ann.kind === 'placement' && ann.placementRect) {
      const componentClass = `box-${(ann.text || 'generic').toLowerCase().replace(/\s+/g, '-')}`;
      const box = document.createElement('div');
      box.className = `layout-placement-box marker-saved ${componentClass}`;
      box.setAttribute('data-ann-id', ann.id);
      box.style.top = `${ann.placementRect.top}px`;
      box.style.left = `${ann.placementRect.left}px`;
      box.style.width = `${ann.placementRect.width}px`;
      box.style.height = `${ann.placementRect.height}px`;
      const isLayoutHidden = this.hideMarkers || this.animationsPaused || !this.showLayoutMode;
      box.style.display = isLayoutHidden ? 'none' : 'flex';
      box.style.pointerEvents = this.showLayoutMode ? 'auto' : 'none';

      const label = document.createElement('div');
      label.className = 'layout-placement-label';
      label.innerText = ann.text || 'Layout Component';
      box.appendChild(label);

      const deleteBtn = document.createElement('div');
      deleteBtn.className = 'layout-delete-btn';
      deleteBtn.innerHTML = '×';
      deleteBtn.title = 'Delete Layout Box';
      deleteBtn.style.display = this.showLayoutMode ? 'flex' : 'none';
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        box.remove();
        this.annotations = this.annotations.filter(a => a.id !== ann.id);
        this.syncDeleteWithLocalServer([ann.id]);
        this.renderToolbar();
      });
      box.appendChild(deleteBtn);

      const resizeHandle = document.createElement('div');
      resizeHandle.className = 'layout-resize-handle';
      resizeHandle.style.display = this.showLayoutMode ? 'block' : 'none';
      box.appendChild(resizeHandle);

      this.shadowRoot.appendChild(box);
    } else {
      let x = 0;
      let y = 0;
      if (ann.location && !ann.location.startsWith('Coordinates:')) {
        const targetEl = document.querySelector(ann.location) as HTMLElement;
        if (targetEl) {
          const rect = targetEl.getBoundingClientRect();
          x = rect.left;
          y = rect.top;
          if (this.settings.applyCssTweaks && ann.cssTweaks) {
            Object.entries(ann.cssTweaks).forEach(([prop, val]) => {
              targetEl.style.setProperty(prop, val, 'important');
            });
          }
        }
      } else if (ann.location && ann.location.startsWith('Coordinates:')) {
        const coordsMatch = ann.location.match(/Coordinates:\s*(-?\d+),\s*(-?\d+)/);
        if (coordsMatch) {
          x = parseInt(coordsMatch[1], 10);
          y = parseInt(coordsMatch[2], 10);
        }
      }

      if (x === 0 && y === 0 && ann.location) {
        // Fallback for missing elements, don't display at 0,0 arbitrarily 
        // unless it actually is 0,0. Better to just use some visible default if totally broken?
        // Let's just leave it at 0,0 or standard default
      }

      const marker = document.createElement('div');
      marker.classList.add('marker', 'marker-saved');
      marker.setAttribute('data-ann-id', ann.id);
      marker.style.position = 'fixed';
      marker.style.width = '24px';
      marker.style.height = '24px';
      marker.style.left = `${x}px`;
      marker.style.top = `${y}px`;
      const isHidden = this.hideMarkers || this.animationsPaused;
      marker.style.display = isHidden ? 'none' : 'flex';
      
      const editHandler = (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        // Fallback to current position if x/y are zero but we have styles
        const px = x === 0 ? parseInt(marker.style.left) || 0 : x;
        const py = y === 0 ? parseInt(marker.style.top) || 0 : y;
        this.showPopup(px, py, { 
          editAnn: ann, 
          editMarker: marker
        });
      };
      
      marker.addEventListener('click', editHandler);
      marker.addEventListener('contextmenu', editHandler);
      
      this.shadowRoot.appendChild(marker);
    }
  }

  private updateMarkersUI() {
    this.annotations.forEach(ann => {
      const marker = this.shadowRoot?.querySelector(`.marker-saved[data-ann-id="${ann.id}"]`) as HTMLElement;
      if (marker) {
        if (ann.kind === 'placement') {
          // It's a layout placement box, do not wipe innerText!
          if (ann.status === 'resolved') {
            marker.style.background = 'rgba(52, 199, 89, 0.2)'; // Green tint
            marker.style.borderColor = '#34C759';
          } else if (ann.status === 'acknowledged') {
            marker.style.background = 'rgba(255, 149, 0, 0.2)'; // Orange tint
            marker.style.borderColor = '#FF9500';
          } else if (ann.status === 'dismissed') {
            marker.style.background = 'rgba(142, 142, 147, 0.2)'; // Grey tint
            marker.style.borderColor = '#8E8E93';
            marker.style.opacity = '0.5';
          } else {
            marker.style.background = 'rgba(50, 173, 230, 0.1)'; // Original blue tint
            marker.style.borderColor = '#32ADE6';
            marker.style.opacity = '1';
          }
        } else {
          // Standard marker
          if (ann.status === 'resolved') {
            marker.style.background = '#34C759'; // Green check
            marker.innerText = '✓';
          } else if (ann.status === 'acknowledged') {
            marker.style.background = '#FF9500'; // Orange
            marker.innerText = '...';
          } else if (ann.status === 'dismissed') {
            marker.style.background = '#8E8E93'; // Grey
            marker.style.opacity = '0.5';
          } else {
            marker.style.background = ann.colorHex; // Open / original color
            marker.style.opacity = '1';
            marker.innerText = (this.annotations.findIndex(a => a.id === ann.id) + 1).toString();
          }
        }
      }
    });
  }

  private generateCssPath(el: HTMLElement): string {
    const path = [];
    let current: HTMLElement | null = el;
    while (current && current.tagName !== 'HTML') {
      let selector = current.tagName.toLowerCase();
      if (current.id) {
        selector += '#' + current.id;
        path.unshift(selector);
        break;
      } else if (current.className && typeof current.className === 'string') {
        const classes = current.className.split(' ').filter(c => c.trim() !== '');
        if (classes.length > 0) selector += '.' + classes[0];
      }
      path.unshift(selector);
      current = current.parentElement;
    }
    return path.join(' > ');
  }

  private extractReactSource(el: any): string {
    try {
      const keys = Object.keys(el);
      const fiberKey = keys.find(k => k.startsWith('__reactFiber$'));
      if (fiberKey && el[fiberKey]) {
        let fiber = el[fiberKey];
        let path = [];
        let srcStr = 'Unknown Source';

        while (fiber) {
          if (typeof fiber.type === 'function' && fiber.type.name) {
            path.unshift(`<${fiber.type.name}>`);
          }
          
          if (!srcStr.includes(':') && fiber._debugSource) {
            const src = fiber._debugSource;
            srcStr = src.fileName + ':' + src.lineNumber + ':' + (src.columnNumber || 0);
          }
          fiber = fiber.return;
        }

        if (path.length > 0) {
           return path.join(' ') + ' [' + srcStr + ']';
        }
        return srcStr;
      }
    } catch (e) {}
    
    const frameworkPath = this.getFrameworkComponentPath(el);
    if (frameworkPath.length > 0) {
      return frameworkPath.map(p => `<${p}>`).join(' ') + ' [DOM Component]';
    }

    return 'Unknown Source';
  }

  private getFrameworkComponentPath(el: any): string[] {
    const path: string[] = [];
    try {
      let current = el;
      while (current && current !== document.body) {
        const keys = Object.keys(current);
        const fiberKey = keys.find(k => k.startsWith('__reactFiber$'));
        if (fiberKey && current[fiberKey]) {
          let fiber = current[fiberKey];
          while (fiber) {
            if (typeof fiber.type === 'function' && fiber.type.name) {
              const name = fiber.type.name;
              if (!path.includes(name)) {
                path.unshift(name);
              }
            }
            fiber = fiber.return;
          }
          break;
        }
        current = current.parentElement;
      }
    } catch (e) {}

    try {
      let current = el;
      while (current && current !== document.body) {
        let vueInstance = current.__vue__ || current.__vueParentComponent;
        if (vueInstance && vueInstance.$options && vueInstance.$options.name) {
          const name = vueInstance.$options.name;
          if (!path.includes(name)) path.unshift(name);
        }
        current = current.parentElement;
      }
    } catch(e) {}

    if (path.length === 0) {
      try {
        let current = el;
        while (current && current !== document.body) {
          if (current.tagName && current.tagName.includes('-')) {
            const name = current.tagName.toLowerCase();
            if (!path.includes(name)) {
              path.unshift(name);
            }
          }
          current = current.parentElement;
        }
      } catch(e) {}
    }

    // Always append the specific hovered element to the end of the path for clarity
    if (el && el.tagName) {
      let targetName = el.tagName.toLowerCase();
      let targetClass = '';
      if (el.className && typeof el.className === 'string') {
        const classes = el.className.split(' ').filter((c: string) => c.trim()).join('.');
        if (classes) targetClass = '.' + classes;
      }
      
      // Keep class list reasonably short to avoid massive tooltips
      if (targetClass.length > 30) {
        targetClass = targetClass.substring(0, 30) + '...';
      }
      
      path.push(`${targetName}${targetClass}`);
    }

    return path.slice(-4);
  }

  private togglePauseAnimations(silent: boolean = false) {
    this.animationsPaused = !this.animationsPaused;
    let style = document.getElementById('observer-ai-pause-styles');
    if (this.animationsPaused) {
      if (this.highlightOverlay) this.highlightOverlay.style.display = 'none';
      if (!style) {
        style = document.createElement('style');
        style.id = 'observer-ai-pause-styles';
        style.textContent = `* { animation-play-state: paused !important; transition: none !important; }`;
        document.head.appendChild(style);
      }
      if (!silent) this.showToast("Animations Paused. Layout tracking suspended.");
    } else {
      if (style) style.remove();
      if (!silent) this.showToast("Animations Resumed");
    }
    this.updateMarkerVisibility();
    this.renderToolbar();
  }

  private updateMarkerVisibility() {
    this.shadowRoot?.querySelectorAll('.marker-saved').forEach(el => {
      const isLayout = el.classList.contains('layout-placement-box');
      const isHidden = this.hideMarkers || this.animationsPaused || (isLayout && !this.showLayoutMode);
      (el as HTMLElement).style.display = isHidden ? 'none' : 'flex';
      
      if (isLayout) {
        (el as HTMLElement).style.pointerEvents = this.showLayoutMode ? 'auto' : 'none';
        const resizeHandle = el.querySelector('.layout-resize-handle') as HTMLElement;
        const deleteBtn = el.querySelector('.layout-delete-btn') as HTMLElement;
        if (resizeHandle) resizeHandle.style.display = this.showLayoutMode ? 'block' : 'none';
        if (deleteBtn) deleteBtn.style.display = this.showLayoutMode ? 'flex' : 'none';
      }
    });
  }

  private toggleHideMarkers() {
    this.hideMarkers = !this.hideMarkers;
    this.updateMarkerVisibility();
    this.showToast(this.hideMarkers ? "Markers Hidden" : "Markers Visible");
    this.renderToolbar();
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || (e.target as HTMLElement).isContentEditable) {
      if (e.key === 'Escape') {
        const cancelBtn = this.shadowRoot?.querySelector('.popup .btn-cancel') as HTMLButtonElement;
        if (cancelBtn) cancelBtn.click();
      }
      return;
    }

    if (e.key === 'Escape') {
      const cancelBtn = this.shadowRoot?.querySelector('.popup .btn-cancel') as HTMLButtonElement;
      if (cancelBtn) {
        cancelBtn.click();
      } else if (this.shadowRoot?.querySelector('.popup')) {
        this.shadowRoot.querySelector('.popup')?.remove();
        this.shadowRoot.querySelectorAll('.marker:not(.marker-saved)').forEach(m => m.remove());
      } else if (this.activeLayoutComponent) {
        this.activeLayoutComponent = null;
        document.body.style.cursor = '';
        this.showToast("Layout placement cancelled.");
      } else if (this.isWireframeMode) {
        this.isWireframeMode = false;
        if (this.wireframeOverlay) this.wireframeOverlay.style.display = 'none';
        this.showToast("Wireframe Mode OFF.");
      } else if (this.showSettings) {
        this.showSettings = false;
        this.renderSettings();
      } else if (this.showLayoutMode) {
        this.showLayoutMode = false;
        this.renderLayoutMode();
        this.renderToolbar();
      } else if (!this.isMinimized) {
        this.shadowRoot?.getElementById('btn-close')?.click();
      }
      return;
    }

    const key = e.key.toLowerCase();
    
    if (this.isMinimized && key === 'o') {
      this.shadowRoot?.getElementById('btn-restore')?.click();
      return;
    }

    const copyModal = this.shadowRoot?.querySelector('.copy-modal-overlay');
    if (copyModal) {
      const num = parseInt(key);
      if (!isNaN(num) && num > 0 && num <= 9) {
        const idx = num - 1;
        if (idx < this.annotations.length) {
          const ann = this.annotations[idx];
          this.copyToClipboard(ann.id);
          if (this.settings.clearOnCopy) {
            const btn = copyModal.querySelector(`.btn-copy-single[data-id="${ann.id}"]`);
            if (btn) btn.parentElement?.remove();
            if (this.annotations.length === 0) copyModal.remove();
          }
        }
        return;
      }
    }

    if (this.isMinimized) return;
    if (this.shadowRoot?.querySelector('.popup')) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (key === 'l') {
      this.shadowRoot?.getElementById('btn-layout')?.click();
    } else if (key === 'p') {
      this.togglePauseAnimations();
    } else if (key === 'h') {
      this.toggleHideMarkers();
    } else if (key === 'c') {
      if (e.shiftKey) {
        this.copyToClipboard();
      } else {
        this.showCopyModal();
      }
    } else if (key === 's') {
      this.shadowRoot?.getElementById('btn-settings')?.click();
    } else if (key === 'delete' || key === 'backspace') {
      this.showConfirmClear();
    }
  }

  public generateMarkdown(singleAnnId?: string): string {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const path = window.location.pathname;

    let md = "# Observer AI Feedback: " + path + "\n**Viewport:** " + w + "x" + h + "\n\n---\n";

    const annsToProcess = singleAnnId ? this.annotations.filter(a => a.id === singleAnnId) : this.annotations;

    annsToProcess.forEach((ann, i) => {
      const originalIndex = this.annotations.findIndex(a => a.id === ann.id);
      const title = ann.kind === 'placement' ? `Layout Placement: ${ann.text}` : `Annotation ${originalIndex + 1}: ${ann.tagName} '${ann.text}'`;
      md += `### ${ann.colorName} ${title}\n`;
      
      if (ann.kind === 'placement' && ann.placementRect) {
         md += `\n**Coordinates:** Top: ${Math.round(ann.placementRect.top)}px, Left: ${Math.round(ann.placementRect.left)}px (Width: ${Math.round(ann.placementRect.width)}px, Height: ${Math.round(ann.placementRect.height)}px)\n`;
      }
      
      if (ann.viewportContext) {
        md += `**Viewport Context:** ${ann.viewportContext.width}x${ann.viewportContext.height}px\n`;
      }
      
      if (ann.cssTweaks && Object.keys(ann.cssTweaks).length > 0) {
        md += "**CSS Tweaks Applied:**\n```css\n";
        for (const [k, v] of Object.entries(ann.cssTweaks)) {
          md += `${k}: ${v};\n`;
        }
        md += "```\n";
      }
      
      if (this.settings.outputDetail !== 'Compact') {
        md += "**DOM Path:** `" + ann.location + "`\n";
        
        if (ann.elementIdentity && Object.keys(ann.elementIdentity).length > 0) {
          md += "**Element Identity:** `" + Object.entries(ann.elementIdentity).map(([k,v]) => `${k}="${v}"`).join(' ') + "`\n";
        }
        
        if (ann.computedStyles && ann.computedStyles.width) {
          md += `**Visual Context:** Size: ${ann.computedStyles.width} x ${ann.computedStyles.height} (at X:${ann.computedStyles.x}, Y:${ann.computedStyles.y}) | Margin: ${ann.computedStyles.margin || '0px'} | Padding: ${ann.computedStyles.padding || '0px'}\n`;
          
          const { color, backgroundColor, fontSize, fontWeight, fontFamily } = ann.computedStyles;
          const fontFirst = fontFamily ? fontFamily.split(',')[0].replace(/['"]/g, '') : '';
          md += `**Typography & Color:** Color: ${color} | Background: ${backgroundColor} | Font: ${fontWeight} ${fontSize} ${fontFirst}\n`;
          
          if (ann.computedStyles.display) {
             let disp = ann.computedStyles.display;
             if (disp === 'flex' && ann.computedStyles.flexDirection) disp += ` (${ann.computedStyles.flexDirection})`;
             if (ann.computedStyles.gap) disp += ` [gap: ${ann.computedStyles.gap}]`;
             md += `**Layout Context:** ${disp}\n`;
          }
        }
        
        if (ann.parentConstraints && Object.keys(ann.parentConstraints).length > 0) {
          const pc = Object.entries(ann.parentConstraints).filter(([_,v]) => v).map(([k,v]) => `${k}: ${v}`).join(', ');
          if (pc) md += `**Parent Constraints:** ${pc}\n`;
        }
      }
      if (['Detailed', 'Forensic'].includes(this.settings.outputDetail)) {
        md += "**Exact Text Output:** `" + ann.text + "`\n";
        if (ann.computedStyles && Object.keys(ann.computedStyles).length > 0) {
          md += "**Computed Styles:**\n```css\n";
          for (const [k, v] of Object.entries(ann.computedStyles)) {
            if (v && v !== 'rgba(0, 0, 0, 0)' && v !== '0px' && v !== 'none') {
              md += `${k}: ${v}\n`;
            }
          }
          md += "```\n";
        }
      }
      if (this.settings.outputDetail === 'Forensic' && ann.forensicProps) {
        md += "**Forensic React Props:**\n```json\n" + ann.forensicProps + "\n```\n";
      }
      if (this.settings.frameworkComponents && ann.source !== 'Unknown Source') {
        md += "**Component Source:** `" + ann.source + "`\n";
      }
      md += "**User Feedback:** '" + ann.feedback + "'\n\n";
    });

    return md.trim();
  }

  private async copyToClipboard(singleAnnId?: string) {
    if (this.annotations.length === 0) {
      this.showToast("No annotations to copy!");
      return;
    }
    const md = this.generateMarkdown(singleAnnId);
    
    const finishCopy = () => {
      this.showToast("Markdown Copied to Clipboard!");
      if (this.settings.clearOnCopy) {
        if (singleAnnId) {
          this.annotations = this.annotations.filter(a => a.id !== singleAnnId);
          this.shadowRoot?.querySelector(`.marker-saved[data-ann-id="${singleAnnId}"]`)?.remove();
          this.syncDeleteWithLocalServer([singleAnnId]);
        } else {
          const allIds = this.annotations.map(a => a.id);
          this.annotations = [];
          this.shadowRoot?.querySelectorAll('.marker-saved').forEach(m => m.remove());
          this.syncDeleteWithLocalServer(allIds);
        }
        this.renderToolbar();
      }
    };

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(md);
        finishCopy();
      } else {
        throw new Error('Clipboard API not available');
      }
    } catch (e) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = md;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        finishCopy();
      } catch (err) {
        console.error("Clipboard failed", err);
        this.showToast("Failed to copy. See console.");
      }
    }
  }
}

export const observer = new ObserverEngine();
