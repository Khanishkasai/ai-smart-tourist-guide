# Design System Specification: "Spatial Obsidian"

> **Design Core:** Precision glassmorphism, obsidian depth, environmental illumination adaptivity, fluid spring physics, and Apple/Linear-grade typography.

---

## 1. Design Philosophy

### 1. Spatial Calm over Visual Clutter
The interface never feels busy. We use negative space as an active architectural element. The UI acts as a pristine glass layer suspended above cinematic environmental backdrops and spatial maps.

### 2. Environmental Illumination Adaptivity
The Obsidian UI system (`#08090C`) remains rock-solid and visually consistent. Destination personality is communicated through soft, ambient background light meshes (e.g., Tokyo Blue Dusk, Swiss Frost, Paris Golden Hour) radiating from behind the glass layers.

### 3. Tactile Micro-Physics
Every hover, click, focus, and state transition uses real physical spring dynamics (`stiffness: 180, damping: 24`). No linear or artificial easing.

---

## 2. 8px Spacing System

All spatial layouts, margins, paddings, and component dimensions adhere strictly to an 8px grid scale (with a 4px micro-step for dense components).

| Token | Size | CSS Variable | Common Usage |
| :--- | :--- | :--- | :--- |
| `space-0.5` | `4px` | `--space-0-5` | Micro gaps between icon & label |
| `space-1` | `8px` | `--space-1` | Compact internal padding, tag spacing |
| `space-2` | `16px` | `--space-2` | Button padding, card internal gap |
| `space-3` | `24px` | `--space-3` | Card container padding, stack spacing |
| `space-4` | `32px` | `--space-4` | Section gap, drawer margins |
| `space-6` | `48px` | `--space-6` | Large component separation |
| `space-8` | `64px` | `--space-8` | Hero section vertical padding |
| `space-12` | `96px` | `--space-12` | Viewport edge padding (Desktop) |

---

## 3. Grid System

### Desktop Grid (>= 1024px)
- **Container Max-Width:** `1440px` (centered)
- **Columns:** 12-column grid or 40/60 Split-Canvas Viewport
- **Gutter:** `24px` (`--space-3`)
- **Margin:** `48px` (`--space-6`)

### Mobile Grid (< 1024px)
- **Columns:** 4-column fluid layout
- **Gutter:** `16px` (`--space-2`)
- **Margin:** `16px` (`--space-2`)

---

## 4. Typography Scale

**Font Families:**
- **Primary Body & UI:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
- **Display & Headlines:** `Outfit`, `Inter`, `sans-serif`
- **Metrics & Technical HUD:** `JetBrains Mono`, `ui-monospace`, `monospace`

| Token | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `font-display-hero` | Outfit | `64px` (`4rem`) | 700 | `1.08` | `-0.035em` |
| `font-display-mobile`| Outfit | `38px` (`2.375rem`)| 700 | `1.12` | `-0.025em` |
| `font-heading-xl` | Outfit | `32px` (`2rem`) | 600 | `1.20` | `-0.02em` |
| `font-heading-lg` | Inter | `24px` (`1.5rem`) | 600 | `1.30` | `-0.015em` |
| `font-heading-md` | Inter | `18px` (`1.125rem`)| 600 | `1.40` | `-0.01em` |
| `font-body-lg` | Inter | `16px` (`1rem`) | 400 | `1.60` | `0em` |
| `font-body-md` | Inter | `14px` (`0.875rem`)| 400 | `1.50` | `0em` |
| `font-caption` | Inter | `12px` (`0.75rem`) | 500 | `1.40` | `0.02em` |
| `font-mono-hud` | Mono | `13px` (`0.8125rem`)| 500 | `1.40` | `0.05em` |

---

## 5. Color Tokens

### Obsidian Dark Theme Colors
```css
/* Base Canvas & Surfaces */
--color-obsidian-bg: #08090C;
--color-obsidian-surface-01: rgba(18, 20, 28, 0.65);
--color-obsidian-surface-02: rgba(26, 30, 42, 0.80);
--color-obsidian-surface-hover: rgba(35, 40, 56, 0.90);
--color-obsidian-surface-active: rgba(45, 52, 72, 0.95);

/* Borders & Dividers */
--color-border-subtle: rgba(255, 255, 255, 0.08);
--color-border-medium: rgba(255, 255, 255, 0.16);
--color-border-accent: rgba(96, 165, 250, 0.40);

/* Text Hierarchy */
--color-text-primary: #F3F4F6;
--color-text-secondary: #9CA3AF;
--color-text-tertiary: #6B7280;
--color-text-accent: #60A5FA;
--color-text-inverse: #08090C;

/* Environmental Illumination Gradients (Background Ambient Shaders) */
--env-tokyo-glow: radial-gradient(circle at 50% 25%, rgba(37, 99, 235, 0.28), rgba(8, 9, 12, 0) 70%);
--env-swiss-glow: radial-gradient(circle at 50% 25%, rgba(186, 230, 253, 0.22), rgba(8, 9, 12, 0) 70%);
--env-paris-glow: radial-gradient(circle at 50% 25%, rgba(251, 146, 60, 0.22), rgba(8, 9, 12, 0) 70%);
--env-iceland-glow: radial-gradient(circle at 50% 25%, rgba(52, 211, 153, 0.22), rgba(8, 9, 12, 0) 70%);
--env-amalfi-glow: radial-gradient(circle at 50% 25%, rgba(244, 114, 182, 0.22), rgba(8, 9, 12, 0) 70%);
```

---

## 6. Glassmorphism Specifications

| Glass Variant | Backdrop Blur | Saturation | Surface Fill | Border Gradient |
| :--- | :--- | :--- | :--- | :--- |
| `glass-panel` | `24px` | `180%` | `rgba(18, 20, 28, 0.65)` | `1px solid rgba(255,255,255,0.08)` |
| `glass-card-hover`| `28px` | `200%` | `rgba(26, 30, 42, 0.80)` | `1px solid rgba(255,255,255,0.18)` |
| `glass-pill` | `16px` | `160%` | `rgba(255, 255, 255, 0.05)`| `1px solid rgba(255,255,255,0.12)` |
| `glass-hud` | `32px` | `200%` | `rgba(10, 12, 18, 0.85)` | `1px solid rgba(96,165,250,0.30)` |

---

## 7. Shadows & Elevation System

```css
/* Elevation Layers */
--shadow-elevation-low: 0 4px 12px rgba(0, 0, 0, 0.30);
--shadow-elevation-md: 0 12px 28px -4px rgba(0, 0, 0, 0.45);
--shadow-elevation-high: 0 24px 48px -12px rgba(0, 0, 0, 0.65);
--shadow-modal-hero: 0 32px 64px -16px rgba(0, 0, 0, 0.80), 0 0 40px rgba(96, 165, 250, 0.15);
--shadow-glow-pin: 0 0 20px rgba(96, 165, 250, 0.60);
```

---

## 8. Border Radius System

```css
--radius-xs: 4px;      /* Status tags, micro-badges */
--radius-sm: 8px;      /* Inner buttons, small input fields */
--radius-md: 14px;     /* Timeline cards, dropdown containers */
--radius-lg: 24px;     /* Main glass panels, modal dialogs */
--radius-full: 9999px; /* Vibe chips, prompt bars, avatar badges */
```

---

## 9. Iconography Guidelines

- **Style:** Clean 1.75px vector line icons (Lucide React icon family).
- **Default Size:** `20px` (`--icon-size-md`).
- **Small Size:** `16px` (`--icon-size-sm`).
- **Hero Size:** `24px` (`--icon-size-lg`).
- **Color Rule:** Inherit parent text color with `opacity: 0.80` by default; `opacity: 1` on hover.

---

## 10. Button Variants

### 1. Primary Glass Button (`btn-primary-glass`)
- **Fill:** `rgba(255, 255, 255, 0.12)` + `backdrop-filter: blur(16px)`
- **Border:** `1px solid rgba(255, 255, 255, 0.20)`
- **Text:** `#F3F4F6` (Font weight 600)
- **Hover State:** Background lightens to `rgba(255, 255, 255, 0.20)`, scale transforms to `1.02`.

### 2. Vibe Pill Button (`btn-vibe-pill`)
- **Fill:** `rgba(255, 255, 255, 0.05)`
- **Border:** `1px solid rgba(255, 255, 255, 0.10)`
- **Radius:** `var(--radius-full)`
- **Hover State:** Glows with subtle ambient accent border (`rgba(96, 165, 250, 0.50)`).

### 3. Action Icon Button (`btn-icon-action`)
- **Dimensions:** `40px x 40px` (Circle)
- **Fill:** `rgba(18, 20, 28, 0.60)`
- **Hover State:** Rotate transform `90deg` or spring scale up `1.08`.

---

## 11. Input Components

### 1. Main Hero Prompt Bar (`input-hero-prompt`)
- **Container:** Full glass pill (`border-radius: 9999px`) with padding `16px 24px`.
- **Text Style:** 16px Inter, color `#F3F4F6`. Placeholder: `#6B7280`.
- **Focus Ring:** `0 0 0 2px rgba(96, 165, 250, 0.50)` + container elevates by `4px`.
- **Action Trigger:** Integrated circular glass submit button (`44px x 44px`).

### 2. Copilot Refinement Dock (`input-copilot-dock`)
- **Position:** Fixed overlay at bottom center.
- **Glass Spec:** `glass-hud` with integrated text box + preset prompt pill bar above.

---

## 12. Card Components

### 1. `GlassCard`
- Base container for timeline days and modal dialogs.
- Features subtle top edge highlight: `inset 0 1px 0 0 rgba(255, 255, 255, 0.12)`.

### 2. `DayTimelineNode`
- Features dynamic numerical day badge (`Day 01`, `Day 02`).
- Integrated photo aspect ratio `16:9` with smooth image cross-fade loader.
- Contains sub-tags for Stays, Spots, and Budget breakdowns.

### 3. `SpatialHUD`
- Floating bar displaying JetBrains Mono numerical metrics (`₹58,400 / ₹60,000`).
- Status indicator pill (`9.4 Weather Score`).

---

## 13. Motion Tokens

```js
export const motionTokens = {
  // Spring dynamics
  springFluid: { type: "spring", stiffness: 180, damping: 24, mass: 1 },
  springTactile: { type: "spring", stiffness: 300, damping: 15, mass: 0.5 },
  springModal: { type: "spring", stiffness: 220, damping: 28, mass: 1.2 },

  // Easing curves
  easeCameraFlight: [0.16, 1, 0.3, 1], // Silky smooth map camera pan
  easeFadeIn: [0.25, 0.1, 0.25, 1.0],
};
```

---

## 14. Animation Timing Standards

- **Micro-Interactions (Hover, Focus):** `150ms`
- **Standard Transitions (Drawer, Modal Fade):** `300ms`
- **Sequential Day Card Lock:** `400ms` per card (Staggered delay: `200ms`)
- **Spatial Map Camera Flight:** `1400ms`
- **3D Globe Rotation Zoom:** `1800ms`

---

## 15. Responsive Breakpoints

```css
/* Breakpoint Tokens */
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops / Desktop split canvas */
--breakpoint-xl: 1280px;  /* Large screens */
--breakpoint-2xl: 1536px; /* Ultra-wide monitors */
```

---

## 16. Component Naming Conventions

All React components and CSS classes follow strict PascalCase component names and BEM/utility token patterns:

```
[Component Category] / [Component Name]
- components/glass/GlassCard.jsx          (.glass-card)
- components/hero/HeroPromptBar.jsx       (.hero-prompt-bar)
- components/timeline/DayTimelineNode.jsx (.day-timeline-node)
- components/map/SpatialMapCanvas.jsx     (.spatial-map-canvas)
- components/hud/SpatialHUD.jsx           (.spatial-hud)
- components/pass/JourneyPassModal.jsx   (.journey-pass-modal)
```
