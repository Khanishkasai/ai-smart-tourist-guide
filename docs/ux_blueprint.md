# UX Blueprint & Spatial Wireframe Document

> **Architectural Objective:** Eliminate cognitive friction and create a zero-fatigue, cinematic layout flow across desktop and mobile viewports before any visual styling or engineering.

---

## Screen 1: Landing Page (Hero Canvas)

### 1. Purpose
Serve as the serene entryway to the platform. Establish spatial calm, communicate the core thesis ("Travel isn't planned. It's crafted."), and invite immediate, effortless action without clutter.

### 2. User Goal
Feel instantly inspired and initiate a travel prompt in under 5 seconds with zero decision paralysis.

### 3. Layout Hierarchy
- **Level 1 (Top Ambient Bar):** Brand mark (Left), Soundscape Toggle & Saved Journeys Link (Right).
- **Level 2 (Center Hero Focal):** Headline + Sub-headline.
- **Level 3 (Interactive Core):** Natural Prompt Input Box + Send Action.
- **Level 4 (Tactile Inspiration):** Vibe Chips Floating Pill Dock.

### 4. Component Placement
- Brand Logo at `(x: 32px, y: 32px)` top left.
- Audio & Nav Links at `(x: right-aligned, y: 32px)` top right.
- Hero Title centered vertically at 35% viewport height.
- Main Prompt Bar centered directly beneath title at 50% viewport height.
- Vibe Chips Pill Dock positioned 24px below Prompt Bar.

### 5. Interaction Flow
1. User lands → Cinematic background opens; headline and prompt bar perform a subtle 400ms fade-up reveal.
2. User hovers Vibe Chip → Chip elevates slightly; preview text auto-types into prompt box with typewriter animation.
3. User clicks Prompt Box → Cursor focuses; prompt container expands 8px with a subtle focus halo.
4. User submits prompt → Page smoothly transitions to AI Crafting Experience (Screen 2).

### 6. Navigation Flow
- `Header Logo` → Reset to Landing Page state.
- `Saved Journeys` → Slide-over to Saved Journeys (Screen 7).
- `Audio Toggle` → Toggle ambient soundscape on/off.
- `Submit Prompt` → Push transition to AI Crafting (Screen 2).

### 7. Desktop Wireframe (ASCII)
```
+-----------------------------------------------------------------------------------+
|  [LOGO] Spatial Travel                                    [SOUND: ON]  [SAVED (3)]|
|                                                                                   |
|                                                                                   |
|                      Travel isn't planned. It's crafted.                          |
|             Experience intelligent, cinematic trip discovery.                     |
|                                                                                   |
|        +-----------------------------------------------------------------+        |
|        |  Plan me a 7-day trip to Japan under ₹60,000 with anime...    [>] |        |
|        +-----------------------------------------------------------------+        |
|                                                                                   |
|             ( 🌸 Tokyo Anime & Food )   ( ⛰️ Swiss Alpine Trail )                 |
|             ( 🌊 Amalfi Sunset Coast )   ( 🥐 Paris Golden Hour )                 |
|                                                                                   |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 8. Mobile Wireframe (ASCII)
```
+-----------------------------------+
| [LOGO] Spatial        [🔊] [SAVED]|
|                                   |
|   Travel isn't planned.           |
|   It's crafted.                   |
|                                   |
| +-------------------------------+ |
| | Plan me a 7-day trip to... [>]| |
| +-------------------------------+ |
|                                   |
| ( 🌸 Tokyo Anime & Food )         |
| ( ⛰️ Swiss Alpine Trail )         |
| ( 🌊 Amalfi Coast )               |
|                                   |
+-----------------------------------+
```

### 9. Why Each Section Exists
- **Top Ambient Bar:** Provides constant navigational safety without breaking focal immersion.
- **Hero Title:** Communicates product vision instantly and sets emotional mood.
- **Natural Prompt Bar:** Removes input forms and lets users speak in natural language.
- **Vibe Chips:** Solves "blank canvas syndrome" for users who don't know what to ask.

### 10. User Emotion
**Wonder, Calm, and High Expectations.**

---

## Screen 2: AI Crafting Experience (Reasoning Engine)

### 1. Purpose
Transform server processing time into a mesmerizing teaser sequence. Keep the user visually engaged while the AI evaluates flights, weather, routes, stays, and budget constraints.

### 2. User Goal
Observe the AI working intelligently on their request, validating that their constraints (budget, location, activities) are actively being calculated.

### 3. Layout Hierarchy
- **Level 1 (Top Header):** Brand mark + Cancel/Refine button.
- **Level 2 (Center Focal):** Pulsing AI Reasoning Feed with live step-by-step progress status.
- **Level 3 (Bottom Ambient):** Prompt recap capsule.

### 4. Component Placement
- Top Header anchored at screen top.
- Reasoning Feed centered in screen middle with vertical stack animation.
- Prompt recap anchored to bottom center.

### 5. Interaction Flow
1. User enters screen → Prompt bar smoothly morphs down to the bottom recap capsule.
2. Step 1 reveals (`[+] Parsing destination & constraints: Japan`).
3. Step 2 reveals (`[+] Checking weather windows & seasonal score`).
4. Step 3 reveals (`[+] Optimizing budget curve (Target: ₹60,000)`).
5. Step 4 reveals (`[+] Matching authentic anime spots & local stays`).
6. AI finishes thinking → Automatic transition to Interactive Globe (Screen 3).

### 6. Navigation Flow
- `Cancel Button` → Aborts crafting and returns smoothly to Landing Page (Screen 1).
- `Auto-completion` → Automatically triggers Globe Zoom (Screen 3).

### 7. Desktop Wireframe (ASCII)
```
+-----------------------------------------------------------------------------------+
|  [LOGO] Spatial Travel                                            [CANCEL CRAFTING]|
|                                                                                   |
|                                                                                   |
|                               ( * AI CRAFTING * )                                 |
|                                                                                   |
|                      [✓] Parsing query: 7 Days in Japan                           |
|                      [✓] Checking weather & season window                         |
|                      [⟳] Finding optimal flights & stays...                       |
|                      [ ] Matching local anime spots & food points                 |
|                      [ ] Optimizing ₹60,000 budget curve                          |
|                                                                                   |
|                                                                                   |
|      +--------------------------------------------------------------------+       |
|      | Prompt: "Plan me a 7-day trip to Japan under ₹60,000 with anime..." |       |
|      +--------------------------------------------------------------------+       |
+-----------------------------------------------------------------------------------+
```

### 8. Mobile Wireframe (ASCII)
```
+-----------------------------------+
| [LOGO] Spatial           [CANCEL] |
|                                   |
|          ( * AI CRAFTING * )      |
|                                   |
|  [✓] Query: 7 Days in Japan       |
|  [✓] Checking weather window      |
|  [⟳] Finding flights & stays...   |
|  [ ] Matching anime spots         |
|  [ ] Optimizing budget curve      |
|                                   |
| +-------------------------------+ |
| | "7 days Japan under ₹60,000"  | |
| +-------------------------------+ |
+-----------------------------------+
```

### 9. Why Each Section Exists
- **Reasoning Feed:** Replaces boring loading spinners with an intelligent live log that builds trust in the AI's recommendations.
- **Prompt Recap:** Reminds users what parameters are currently being computed.

### 10. User Emotion
**Anticipation, Curiosity, and Trust.**

---

## Screen 3: Interactive Globe (Spatial Transition)

### 1. Purpose
Act as the spatial visual bridge between abstract thinking (AI reasoning) and concrete geography (the map itinerary).

### 2. User Goal
Visually experience their target destination light up globally before diving into granular daily details.

### 3. Layout Hierarchy
- **Level 1 (Background Canvas):** Full-screen 3D rotating globe.
- **Level 2 (Glow Shaders):** Highlighted target country boundary (e.g., Japan silhouette glowing).
- **Level 3 (Overlay Text):** Atmospheric destination banner fading in.

### 4. Component Placement
- 3D Globe occupies 100% viewport background.
- Destination Country text (`JAPAN • EAST ASIA`) centered over globe at top third.
- "Entering Destination Canvas" status tag at bottom center.

### 5. Interaction Flow
1. Globe rotates smoothly to align target country in center view.
2. Target country boundary ignites with environmental lighting glow.
3. Camera initiates a fast, silky smooth 3D zoom arc directly down into the country terrain.
4. Seamlessly transitions into Spatial Map (Screen 4).

### 6. Desktop Wireframe (ASCII)
```
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                 J A P A N                                         |
|                               East Asia Region                                    |
|                                                                                   |
|                                   .---.                                           |
|                                 /   *   \   <-- (Glowing Country Highlight)       |
|                                |  GLOBAL |                                        |
|                                 \  GLOBE/                                         |
|                                   '---'                                           |
|                                                                                   |
|                            [ Entering Spatial Map... ]                            |
+-----------------------------------------------------------------------------------+
```

### 7. Mobile Wireframe (ASCII)
```
+-----------------------------------+
|                                   |
|            J A P A N              |
|                                   |
|              .---.                |
|             /  *  \               |
|            | GLOBE |              |
|             \     /               |
|              '---'                |
|                                   |
|      [ Zooming to Map... ]        |
+-----------------------------------+
```

### 8. Why Each Section Exists
- **Rotating Globe:** Establishes scale, wonder, and a sense of physical departure.
- **Country Highlight Shaders:** Signals spatial lock-on before zooming.

### 9. User Emotion
**Awe, Excitement, and Cinematic Thrill.**

---

## Screen 4 & Screen 5: Spatial Map & Live Itinerary Builder (Dual Viewport)

### 1. Purpose
The climax of the experience. The itinerary builds itself live in front of the user—combining real-time map camera tracking, animated SVG flight paths, drop pins, photo blooms, and day cards.

### 2. User Goal
Watch their custom trip unfold sequentially day-by-day while maintaining full spatial understanding of geography and budget.

### 3. Layout Hierarchy
- **Desktop Layout:** 
  - **Left Panel (40% Width):** Live Day Timeline cards + Bottom Copilot Dock.
  - **Right Panel (60% Width):** Interactive Spatial Map + Top Spatial HUD (Budget & Weather metrics).
- **Mobile Layout:**
  - **Background (100% Width):** Spatial Map Canvas.
  - **Overlay Drawer:** Draggable glass sheet containing Day cards & Copilot Dock.

### 4. Component Placement
- **Top Spatial HUD:** Floating translucent glass bar over top-right map corner detailing: `Budget: ₹58,400 / ₹60,000`, `Flight: Direct (7.5h)`, `Best Season Score: 9.4`.
- **Timeline Column:** Left side scroll container containing Day 1 to Day 7 cards locking in one by one.
- **Copilot Dock:** Anchored to bottom left overlay, allowing real-time chat tweaks.

### 5. Interaction Flow
1. **Day 1 Reveal:** Map camera glides over Tokyo → Pin drops → Photo blooms → Day 1 Card locks into timeline with spring physics.
2. **Day 2 Reveal:** Route path draws from Tokyo to Kyoto → Pin drops → Day 2 Card locks into place.
3. Repeat through Day 7.
4. **Post-Crafting State:** Camera pulls back to reveal total route; Spatial HUD updates with final budget score.
5. User clicks any Day Card → Map camera instantly flies to that day's pins with focus blur.
6. User types in Copilot Dock (`"Make Day 3 more adventurous"`) → AI updates Day 3 card live, redraws map route, and updates Spatial HUD.

### 6. Desktop Wireframe (ASCII)
```
+-----------------------------------------------------------------------------------+
|  [LOGO] Spatial Travel                |  [HUD: ₹58,400 / ₹60,000] [OCT 12-19] [PASS] |
| -------------------------------------+-------------------------------------------|
| [TIMELINE - LIVE BUILD]               |  MAP CANVAS                               |
|                                       |                                           |
| +-----------------------------------+ |           (PIN: Tokyo)                    |
| | DAY 1: Akihabara & Ramen Exploration| |             *                             |
| | • Stay: Ryokan Tokyo (₹4,200/night)| |            /                            |
| | • Spot: Animate Main Store        | |           / (Route Path)               |
| | • Food: Ichiran Special           | |          /                             |
| +-----------------------------------+ |         * (PIN: Kyoto)                  |
|                                       |                                           |
| +-----------------------------------+ |                                           |
| | DAY 2: Kyoto Fushimi Inari Trail  | |                                           |
| | • Stay: Traditional Machiya       | |                                           |
| +-----------------------------------+ |                                           |
|                                       |                                           |
| [Copilot: "Make Day 3 more relaxed"]  |                                           |
+-----------------------------------------------------------------------------------+
```

### 7. Mobile Wireframe (ASCII)
```
+-----------------------------------+
| [HUD: ₹58,400 / ₹60,000]   [PASS] |
|                                   |
|          MAP CANVAS               |
|             (PIN 1)               |
|               *                   |
|              /                    |
|             * (PIN 2)             |
|                                   |
| +-------------------------------+ |
| | === [DRAGGABLE GLASS SHEET] == | |
| | DAY 1: Tokyo Akihabara & Ramen| |
| | • Stay: Ryokan (₹4,200/night) | |
| |                               | |
| | [Copilot: "Tweak trip..."]    | |
| +-------------------------------+ |
+-----------------------------------+
```

### 8. Why Each Section Exists
- **Dual-Viewport / Glass Sheet:** Ensures itinerary details and geographic orientation are always simultaneously visible.
- **Spatial HUD:** Provides real-time budget and weather safety tracking.
- **Copilot Dock:** Keeps modification frictionless without form dropdowns or spreadsheet edit buttons.

### 9. User Emotion
**Empowerment, Mastery, and Visual Satisfaction.**

---

## Screen 6: Journey Pass (Skeuomorphic Export Artifact)

### 1. Purpose
Provide a tangible, luxury digital artifact summarizing the trip. Gives users a high-end "boarding pass" feel for saving, sharing, or exporting.

### 2. User Goal
View a beautifully formatted, compact summary of their entire itinerary and export it as an image, PDF, or shareable link.

### 3. Layout Hierarchy
- **Level 1 (Container):** Centered floating glass ticket modal with backdrop blur vignette.
- **Level 2 (Ticket Header):** Destination Name, Dates, Traveler Name, QR Code.
- **Level 3 (Body Summary):** Daily itinerary highlights snapshot + Total Budget breakdown.
- **Level 4 (Action Bar):** "Save to Wallet / PDF", "Share Link", "Close Pass".

### 4. Desktop Wireframe (ASCII)
```
+-----------------------------------------------------------------------------------+
|                                                                                   |
|             +-------------------------------------------------------+             |
|             | JOURNEY PASS #7049               [QR CODE: █▀█▀█]     |             |
|             | Destination: Japan (7 Days)                           |             |
|             | Dates: Oct 12 – Oct 19 | Total Budget: ₹58,400        |             |
|             |-------------------------------------------------------|             |
|             | ROUTE HIGHLIGHTS:                                     |             |
|             | Day 1: Tokyo Anime & Akihabara                        |             |
|             | Day 2: Kyoto Fushimi Inari Trail                      |             |
|             | Day 3: Arashiyama Bamboo & Local Stays                 |             |
|             | Day 4-7: Osaka Street Food & Universal Studios        |             |
|             |-------------------------------------------------------|             |
|             | [EXPORT PDF]     [SHARE JOURNEY]     [SAVE TO PROFILE]|             |
|             +-------------------------------------------------------+             |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 5. Mobile Wireframe (ASCII)
```
+-----------------------------------+
| +-------------------------------+ |
| | JOURNEY PASS           [QR]   | |
| | Japan • 7 Days                | |
| | Budget: ₹58,400               | |
| |-------------------------------| |
| | Day 1: Tokyo Akihabara        | |
| | Day 2: Kyoto Shrine           | |
| | Day 3: Arashiyama             | |
| | Day 4-7: Osaka Food           | |
| |-------------------------------| |
| | [EXPORT PDF]    [SHARE LINK]  | |
| +-------------------------------+ |
+-----------------------------------+
```

### 6. Why Each Section Exists
- **Ticket Aesthetics:** Creates an emotional sense of "having booked a real adventure".
- **QR Code & Share Actions:** Enables viral sharing and easy offline mobile retrieval.

### 7. User Emotion
**Pride, Excitement, and Readiness.**

---

## Screen 7: Saved Journeys (Personal Library)

### 1. Purpose
Allow travelers to revisit, re-craft, or manage all their previously generated travel passes in one organized gallery.

### 2. User Goal
Quickly locate past crafted trips, compare budgets, or re-open an active itinerary canvas.

### 3. Layout Hierarchy
- **Header:** Title ("Your Crafted Journeys"), Filter tabs (All, Upcoming, Saved).
- **Grid Layout:** 3-column card grid (Desktop) / 1-column stack (Mobile) featuring saved trip preview cards with atmospheric ambient lighting backgrounds.

### 4. Desktop Wireframe (ASCII)
```
+-----------------------------------------------------------------------------------+
|  [LOGO] Spatial Travel                                    [PROFILE]  [NEW TRIP +] |
| ----------------------------------------------------------------------------------|
|  YOUR CRAFTED JOURNEYS                                                            |
|  [ALL (3)]   [UPCOMING (1)]   [ARCHIVED (2)]                                      |
|                                                                                   |
|  +-----------------------+  +-----------------------+  +-----------------------+  |
|  | JAPAN ANIME & FOOD    |  | SWISS ALPS TRAIL      |  | AMALFI COAST SUNSET   |  |
|  | 7 Days • Oct 2026     |  | 5 Days • Jun 2026     |  | 6 Days • Jul 2026     |  |
|  | Budget: ₹58,400       |  | Budget: $1,400        |  | Budget: €1,800        |  |
|  | [OPEN CANVAS] [PASS]  |  | [OPEN CANVAS] [PASS]  |  | [OPEN CANVAS] [PASS]  |  |
|  +-----------------------+  +-----------------------+  +-----------------------+  |
+-----------------------------------------------------------------------------------+
```

### 5. Mobile Wireframe (ASCII)
```
+-----------------------------------+
| [LOGO] Saved Journeys    [+ NEW]  |
|                                   |
| +-------------------------------+ |
| | JAPAN ANIME & FOOD            | |
| | 7 Days • Budget: ₹58,400      | |
| | [OPEN CANVAS]    [PASS]       | |
| +-------------------------------+ |
|                                   |
| +-------------------------------+ |
| | SWISS ALPS TRAIL              | |
| | 5 Days • Budget: $1,400       | |
| | [OPEN CANVAS]    [PASS]       | |
| +-------------------------------+ |
+-----------------------------------+
```

### 6. User Emotion
**Nostalgia, Anticipation, and Organization.**

---

## Screen 8: User Profile (Traveler DNA)

### 1. Purpose
Capture traveler preferences, default currency, travel style (e.g. Anime, Foodie, Luxury, Backpacker), and home airport to make AI responses personalized without filling out repetitive forms.

### 2. User Goal
Set travel defaults once so every future prompt is tailored automatically.

### 3. Layout Hierarchy
- **Header:** Profile avatar + Traveler persona badge ("Aesthetic Explorer").
- **Section 1 (Travel Style Tags):** Clickable tag grid (e.g., `[Anime]`, `[Local Food]`, `[Mountain Treks]`).
- **Section 2 (Defaults):** Home Airport (`DEL - New Delhi`), Preferred Currency (`INR - ₹`).

### 4. Desktop Wireframe (ASCII)
```
+-----------------------------------------------------------------------------------+
|  [LOGO] Spatial Travel                                                [BACK TO MAP]|
| ----------------------------------------------------------------------------------|
|  TRAVELER PROFILE                                                                 |
|                                                                                   |
|  (Avatar) Alex Chen                                                               |
|           Badge: "Aesthetic Explorer"                                             |
|                                                                                   |
|  TRAVEL DNA PREFERENCES                                                           |
|  [x] Local Food   [x] Anime & Pop Culture   [x] Hidden Gems   [ ] Luxury Stays     |
|                                                                                   |
|  DEFAULTS                                                                         |
|  Home Airport: [ DEL - New Delhi, India    v ]                                    |
|  Preferred Currency: [ INR (₹)             v ]                                    |
|                                                                                   |
|  [SAVE PREFERENCES]                                                               |
+-----------------------------------------------------------------------------------+
```

### 5. Mobile Wireframe (ASCII)
```
+-----------------------------------+
| [BACK] Traveler Profile           |
|                                   |
| (Avatar) Alex Chen                |
| Badge: "Aesthetic Explorer"       |
|                                   |
| TRAVEL DNA                        |
| (x) Local Food   (x) Anime        |
| (x) Hidden Gems  ( ) Luxury       |
|                                   |
| DEFAULTS                          |
| Airport: [ DEL - New Delhi ]      |
| Currency: [ INR (₹) ]             |
|                                   |
| [SAVE PREFERENCES]                |
+-----------------------------------+
```

### 6. User Emotion
**Personalization, Ownership, and Identity.**

---

## Screen 9: Settings (System Controls)

### 1. Purpose
Provide control over environmental audio, haptics, motion physics, and screen accessibility preferences.

### 2. Desktop Wireframe (ASCII)
```
+-----------------------------------------------------------------------------------+
|  SETTINGS                                                             [CLOSE [X]] |
| ----------------------------------------------------------------------------------|
|  SOUND & HAPTICS                                                                  |
|  Ambient Soundscapes:          ( ON  /  off )                                     |
|  Acoustic UI Ticks:            ( ON  /  off )                                     |
|                                                                                   |
|  GRAPHICS & MOTION                                                                |
|  3D Globe Shaders:             ( HIGH PERFORMANCE  /  Battery Saver )             |
|  Camera Motion Physics:        ( FLUID SPRINGS  /  Reduced Motion )               |
|                                                                                   |
|  UNITS                                                                            |
|  Distance Metric:              ( KILOMETERS  /  Miles )                           |
+-----------------------------------------------------------------------------------+
```

---

## Screen 10: Error States (Graceful Fallbacks)

### 1. Purpose
Handle network drops, ambiguous locations, or impossible budget constraints with empathy, clarity, and instant correction triggers.

### 2. Error Scenarios & Blueprints

#### Scenario A: Budget Infeasibility Warning ("Japan under ₹10,000 for 7 days")
```
+-----------------------------------------------------------------------------------+
|  [!] BUDGET CONSTRAIN ADJUSTMENT NEEDED                                           |
|                                                                                   |
|  Our AI checked flights and stays: ₹10,000 is below the base minimum required     |
|  for a 7-day trip to Japan (Base Minimum: ~₹38,000).                              |
|                                                                                   |
|  SUGGESTED ALTERNATIVE ACTIONS:                                                   |
|  ( 1. Adjust budget to ₹45,000 )   ( 2. Reduce trip duration to 3 days )         |
|  ( 3. Switch destination to Vietnam or Thailand for ₹10,000 budget )              |
+-----------------------------------------------------------------------------------+
```

#### Scenario B: Connection Interruption
```
+-----------------------------------------------------------------------------------+
|  [!] SIGNAL LOST DURING SPATIAL CRAFTING                                          |
|  Your progress has been preserved at Day 3. Reconnecting to AI network...        |
|                                                                                   |
|  [RETRY CONNECTION]              [SAVE PROGRESS OFFLINE]                          |
+-----------------------------------------------------------------------------------+
```

### 3. User Emotion
**Supported, Informed, and Reassured (Never frustrated).**

---

## Screen 11: Empty States (Zero Data Canvas)

### 1. Purpose
Transform empty screens into helpful, inviting spaces with clear calls to action.

### 2. Empty Saved Journeys Screen Wireframe (ASCII)
```
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                             ( * NO JOURNEYS YET * )                               |
|                                                                                   |
|                     You haven't crafted any travel passes yet.                    |
|                Your next unforgettable journey is one prompt away.                |
|                                                                                   |
|                        [ + CRAFT YOUR FIRST TRIP NOW ]                            |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 3. User Emotion
**Encouraged and Motivated.**

---

## Cognitive Load Audit & UX Validation

1. **Zero Multi-Step Wizards:** The user never fills out 5-step modal forms. Input is 100% natural language + vibe chips.
2. **Context Persistence:** Spatial Map and Itinerary Timeline live together; the user never loses geographical context when reading details.
3. **No Dead Ends:** Error states offer immediate one-click resolution options rather than generic error messages.
4. **Fluid Responsiveness:** Mobile viewports use intuitive gesture-based bottom sheet drawers with snap points, mirroring native smartphone patterns.
