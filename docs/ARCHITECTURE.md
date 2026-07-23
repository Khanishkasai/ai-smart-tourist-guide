# Architecture

## High Level Flow

Landing Page

↓

Conversation Engine

↓

AI Crafting

↓

Globe Reveal

↓

Interactive Globe

↓

Journey Canvas

↓

Gemini

↓

External APIs

---

## Folder Structure

src/

components/

conversation/

crafting/

space/

globe/

journey/

layout/

hooks/

services/

engine/

constants/

styles/

types/

---

## Core Principles

- Components have one responsibility.
- Logic is separated from UI.
- Hooks contain reusable behavior.
- Services communicate with APIs.
- Components never call APIs directly.
- Three.js rendering remains isolated.
- AI logic remains isolated.