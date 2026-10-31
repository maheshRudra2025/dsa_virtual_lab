# DSA Virtual Lab - Project Architecture & Standardized Directory Structure

## 📌 Project Overview

The **DSA Virtual Lab** is an interactive educational platform designed to help students, educators, and software engineers understand Data Structures and Algorithms through visual animations, step-through executions, and conceptual theory.

This document outlines the standardized repository architecture, directory layout, design conventions, and guidelines for adding new data structures and algorithms.

---

## 🏗️ Repository Architecture

The project has transitioned into a modern Next.js 15 application while preserving standalone static references and legacy archives for continuous backward compatibility.

```
dsa_virtual_lab/
├── .gitignore                      # Standardized repository-wide ignore rules
├── package.json                    # Root task orchestrator (npm run dev/build/lint)
├── index.html                      # Entry gateway and environment router
├── README.md                       # Main project introduction & quickstart
├── PROJECT_STRUCTURE.md            # Comprehensive architecture documentation (this file)
├── STYLE_GUIDE.md                  # Design system, accessible color palette & typography
├── CONTRIBUTE.md                   # Contribution workflow & PR guidelines
├── CODE_OF_CONDUCT.md              # Community standards
├── LICENSE.md                      # MIT open-source license
│
├── dsa-virtual-nextjs-app/         # Modern Next.js 15 + TypeScript Web Application (Active)
│   ├── public/                     # Static assets & client runtime scripts
│   │   ├── lib/                    # Canvas animation & algorithm engine
│   │   │   ├── algorithms/         # Concrete algorithm classes (StackLL, QueueLL, AVL, etc.)
│   │   │   ├── animations/         # Canvas object managers and drawing engines
│   │   │   └── third-party/        # Runtime UI helpers (jQuery UI CSS/JS)
│   │   ├── file.svg, globe.svg...  # Brand icons & logos
│   │   └── DsaVirtualLabFinalLogo.png
│   │
│   ├── src/                        # Next.js Source Code
│   │   ├── app/                    # Next.js App Router (Routes & Pages)
│   │   │   ├── layout.tsx          # Root layout (Header, Footer, Theme tokens)
│   │   │   ├── page.tsx            # Home landing page
│   │   │   ├── globals.css         # Global stylesheet & Tailwind directives
│   │   │   ├── theme.css           # Design tokens (colors, elevation, typography)
│   │   │   ├── feedback/           # User feedback submission page
│   │   │   ├── styleguide/         # Design system & WCAG accessibility showcase
│   │   │   └── experiments/        # Interactive experiment routes
│   │   │       ├── page.tsx        # Experiments catalogue & directory
│   │   │       ├── stack/page.tsx  # LIFO Stack visualizer (Modular component)
│   │   │       ├── queue/page.tsx  # FIFO Queue visualizer (Modular component)
│   │   │       ├── avl/page.tsx    # AVL Tree experiment
│   │   │       ├── bst/page.tsx    # Binary Search Tree experiment
│   │   │       ├── btree/page.tsx  # B-Tree experiment
│   │   │       ├── bfs/page.tsx    # Breadth-First Search experiment
│   │   │       └── dfs/page.tsx    # Depth-First Search experiment
│   │   │
│   │   ├── components/             # Reusable UI Components
│   │   │   ├── Header.tsx          # Global navigation header
│   │   │   ├── Footer.tsx          # Global footer
│   │   │   └── AlgorithmVisualizer.tsx # Reusable Canvas Visualizer container
│   │   │
│   │   ├── hooks/                  # Custom React Hooks
│   │   │   └── useAlgorithmVisualizer.ts # Dynamic script loader & canvas lifecycle hook
│   │   │
│   │   └── types/                  # TypeScript Interfaces & Definitions
│   │       └── visualizer.ts       # Visualizer configuration & Window globals
│   │
│   ├── eslint.config.mjs           # Flat ESLint configuration with public ignores
│   ├── next.config.ts              # Next.js & Turbopack workspace configuration
│   ├── tsconfig.json               # TypeScript compiler options
│   └── package.json                # App dependencies & scripts
│
├── new_ui/                         # Standalone Static HTML/CSS Prototype (Redesign)
│   ├── css/                        # Shared styles (main.css, theme.css)
│   ├── index.html                  # Static landing page
│   ├── experiments.html            # Static experiments catalogue
│   ├── feedback.html               # Static feedback page
│   └── styleguide.html             # Static design system reference
│
└── old/                            # Legacy Static Codebase (Archive)
    └── src/                        # Original pre-migration HTML, CSS, JS implementation
        ├── experiments/            # Static tree, graph, linear structure pages
        ├── lib/                    # Original animation engine scripts
        └── pages/                  # Original entry templates
```

---

## 🧩 Architectural Highlights

### 1. Unified Visualizer Architecture (`useAlgorithmVisualizer` & `<AlgorithmVisualizer />`)

Previously, each visualization route duplicated hundreds of lines of imperative DOM script injection, un-typed `(window as any)` calls, and manual lifecycle handling.

The standardized architecture extracts this into two reusable layers:

1. **`useAlgorithmVisualizer(config)`**:
   - Manages asynchronous, sequential loading of core animation dependencies (`AnimationMain.js`, `ObjectManager.js`, `Algorithm.js`) and the target algorithm file.
   - Binds the `<canvas>` DOM reference to the global canvas context.
   - Wires animation event listeners (`AnimationStarted`, `AnimationEnded`, `AnimationWaiting`, `AnimationUndoUnavailable`).
   - Safely cleans up animation timers, global references, and event listeners on unmount.

2. **`<AlgorithmVisualizer config={...} />`**:
   - Standardized layout container featuring:
     - Header with title, description, and "All Experiments" navigation link.
     - `#algoControlSection` (`#AlgorithmSpecificControls` table populated by the algorithm).
     - Responsive canvas container with a loading spinner while engine assets load.
     - `#generalAnimationControlSection` (`#GeneralAnimationControls` table for Play/Pause/Undo/Speed).
     - Consistent styling aligned with the project's design system tokens.

### 2. Root Task Orchestration

Developers can now work from the root of the repository without having to change directories manually:

| Command | Action |
|---|---|
| `npm run dev` | Starts the Next.js development server at `http://localhost:3000` |
| `npm run build` | Produces an optimized production build of the Next.js app |
| `npm run start` | Launches the built production server |
| `npm run lint` | Runs ESLint type-checking and lint validation across the codebase |
| `npm run install:app` | Installs dependencies for the Next.js application |

---

## 🚀 How to Add a New Algorithm Visualization

To add a new visualization (e.g., Binary Search Tree):

1. **Ensure Algorithm Script is Available**:
   Verify that the algorithm's client class exists in `dsa-virtual-nextjs-app/public/lib/algorithms/` (e.g., `BST.js`).

2. **Create the Route**:
   Add or update `dsa-virtual-nextjs-app/src/app/experiments/[name]/page.tsx`:

   ```tsx
   "use client";

   import AlgorithmVisualizer from "@/components/AlgorithmVisualizer";
   import type { VisualizerConfig } from "@/types/visualizer";

   const bstConfig: VisualizerConfig = {
     title: "Binary Search Tree",
     category: "Trees",
     description: "Interactive Binary Search Tree insertions, searches, and balancing.",
     algorithmScript: "/lib/algorithms/BST.js",
     algorithmClass: "BST",
     canvasWidth: 800,
     canvasHeight: 450,
   };

   export default function BSTExperiment() {
     return <AlgorithmVisualizer config={bstConfig} />;
   }
   ```

3. **Verify the Build**:
   ```bash
   npm run build
   ```

---

## 🎨 Design System & Accessibility

All UI components adhere to the design system in `dsa-virtual-nextjs-app/src/app/theme.css` and `STYLE_GUIDE.md`:
- **WCAG 2.1 AA/AAA compliance**: Colors achieve minimum 4.5:1 (normal text) and 3:1 (large text) contrast ratios.
- **Consistent Tokens**: Semantic variables for `--color-primary-*`, `--color-secondary-*`, `--color-surface`, and `--color-text`.
- **Keyboard Navigation**: All interactive visualizer buttons and inputs support tab indexing and focus indicators.

---

**Last Updated**: October 2026  
**Status**: Standardized & Production Ready
