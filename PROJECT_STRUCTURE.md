# DSA Virtual Lab - Project Structure

## 📁 Repository Overview

The repository consists of the active Next.js application alongside preserved historical iterations:

```
dsa_virtual_lab/
├── dsa-virtual-nextjs-app/        # 🚀 ACTIVE: Modern Next.js 15 + React 19 + TypeScript application
├── new_ui/                        # 🎨 Static HTML/CSS UI prototype
├── old/                           # 🗄️ Legacy vanilla HTML/CSS/JS application (preserved for reference)
├── CODE_OF_CONDUCT.md             # Community standards
├── CONTRIBUTE.md                  # Contribution and PR guidelines
├── LICENSE.md                     # MIT License
├── PROJECT_STRUCTURE.md           # This architecture guide
├── README.md                      # Project setup & documentation
├── STYLE_GUIDE.md                 # Design system & accessibility guidelines
└── SYNC_FORK_GUIDE.md             # Fork synchronization guide
```

---

## 🚀 Active Application: `dsa-virtual-nextjs-app/`

The primary development focus is inside `dsa-virtual-nextjs-app/`. It uses the Next.js App Router with TypeScript.

### Directory Structure

```
dsa-virtual-nextjs-app/
├── public/                               # Static public assets
│   ├── lib/                              # HTML5 Canvas Visualization Engine
│   │   ├── algorithms/                   # Algorithm execution classes
│   │   │   ├── Algorithm.js              # Base algorithm handler
│   │   │   ├── AVL.js                    # AVL Tree balancing & rotations
│   │   │   ├── BFS.js                    # Breadth-First Search
│   │   │   ├── BST.js                    # Binary Search Tree
│   │   │   ├── BTree.js                  # B-Tree
│   │   │   ├── DFS.js                    # Depth-First Search
│   │   │   ├── Graph.js                  # Graph adjacency & drawing utilities
│   │   │   ├── QueueLL.js                # Queue (Linked List backed)
│   │   │   └── StackLL.js                # Stack (Linked List backed)
│   │   ├── animations/                   # Custom 2D Canvas animation engine
│   │   │   ├── AnimatedBTreeNode.js      # B-Tree node animations
│   │   │   ├── AnimatedCircle.js         # Circle node representations
│   │   │   ├── AnimatedLabel.js          # Text / pointer labels
│   │   │   ├── AnimatedLinkedList.js     # Linked list visual representations
│   │   │   ├── AnimatedObject.js         # Base animated entity
│   │   │   ├── AnimatedRectangle.js      # Array/slot visual representations
│   │   │   ├── AnimationMain.js          # Animation timeline & loop manager
│   │   │   ├── CustomEvents.js           # Event dispatching for step execution
│   │   │   ├── HighlightCircle.js        # Node focus & traversal indicators
│   │   │   ├── Line.js                   # Edges and pointer lines
│   │   │   ├── ObjectManager.js          # Object lifecycle manager
│   │   │   └── UndoFunctions.js          # Timeline scrubbing & step-back support
│   │   └── third-party/                  # Supporting vendor libraries for visualization
│   │       ├── jquery-1.5.2.min.js       # Required by legacy canvas animation engine
│   │       ├── jquery-ui-1.8.11.custom.css
│   │       └── jquery-ui-1.8.11.custom.min.js
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/                                  # Application source code
│   ├── app/                              # Next.js App Router routes & layouts
│   │   ├── experiments/                  # Experiment visualizer pages
│   │   │   ├── avl/page.tsx              # AVL Tree experiment
│   │   │   ├── bfs/page.tsx              # Breadth-First Search experiment
│   │   │   ├── bst/page.tsx              # Binary Search Tree experiment
│   │   │   ├── btree/page.tsx            # B-Tree experiment
│   │   │   ├── dfs/page.tsx              # Depth-First Search experiment
│   │   │   ├── queue/page.tsx            # Queue experiment
│   │   │   ├── stack/page.tsx            # Stack experiment
│   │   │   └── page.tsx                  # Experiments directory & catalog
│   │   ├── feedback/                     # Feedback submission page
│   │   │   └── page.tsx
│   │   ├── styleguide/                   # Interactive style guide & design system
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css                   # Global styles & layout rules
│   │   ├── layout.tsx                    # Root HTML layout with Header & Footer
│   │   ├── page.tsx                      # Landing page / Hero section
│   │   └── theme.css                     # Design tokens (colors, typography, radii, WCAG)
│   │
│   └── components/                       # Shared React components
│       ├── Header.tsx                    # Site navigation header
│       └── Footer.tsx                    # Site footer
│
├── .gitignore                            # Git exclusion rules
├── eslint.config.mjs                     # ESLint 9 configuration with Next.js flat configs
├── next.config.ts                        # Next.js application configuration
├── package.json                          # App scripts & dependencies
├── package-lock.json                     # Dependency lock file
└── tsconfig.json                         # TypeScript configuration (ES2020 target, strict)
```

---

## 🎨 Transitional Prototype: `new_ui/`

`new_ui/` contains a static HTML/CSS design mockup created during the redesign phase:
- `index.html` - Home page mockup
- `experiments.html` - Experiment listing mockup
- `feedback.html` - Feedback form mockup
- `styleguide.html` - Static design system showcase
- `css/main.css` & `css/theme.css` - Prototype stylesheets

*Note: This folder is kept as a design reference and is not part of the active production build.*

---

## 🗄️ Legacy Application: `old/`

`old/` preserves the original multi-page static HTML/CSS/JavaScript implementation:
- `src/pages/` - Original HTML entry points (`index.html`, `experiments.html`, `feedback.html`)
- `src/experiments/` - Individual HTML pages for theory, code, and visualization across structures
- `src/assets/` - Legacy CSS, images, and Prism.js syntax highlighting
- `src/lib/` - Original JavaScript animation library codebase

*Note: Preserved for historical context, algorithm verification, and backwards compatibility.*

---

## 🛠️ Adding a New Experiment to Next.js

To introduce a new interactive experiment into the active application:

1. **Add Route Directory**: Create a new route folder under `dsa-virtual-nextjs-app/src/app/experiments/<name>/`.
2. **Create Page Component**: Add `page.tsx` within that directory, following the client-side Canvas bridge pattern used in `stack/page.tsx` or embedding a dedicated React visualizer component.
3. **Add Algorithm Logic**: If leveraging the Canvas animation engine, add or update the algorithm script under `dsa-virtual-nextjs-app/public/lib/algorithms/`.
4. **Register in Catalog**: Add the experiment metadata to `dsa-virtual-nextjs-app/src/app/experiments/page.tsx` so it appears in the experiments list.
5. **Verify Quality**:
   ```bash
   npm run typecheck
   npm run lint
   npm run build
   ```
