# DSA Virtual Lab - Project Structure

## 📁 Project Overview

The DSA Virtual Lab is an interactive web application for learning Data Structures and Algorithms through visualizations, code examples, and theoretical explanations.

## 🏗️ Directory Structure

```
dsa_virtual_lab_OS/
├── index.html                     # Entry point - redirects to main app
├── README.md                      # Project documentation
├── PROJECT_STRUCTURE.md           # This file - explains project organization
├── LICENSE.md                     # MIT License
├── CODE_OF_CONDUCT.md            # Community guidelines
├── CONTRIBUTE.md                 # Contribution guidelines
│
└── src/                          # Main source directory
    ├── pages/                    # Application pages
    │   ├── index.html           # Main landing page
    │   ├── experiments.html     # List of all experiments
    │   └── feedback.html        # User feedback form
    │
    ├── experiments/             # Organized experiment modules
    │   ├── trees/              # Tree data structures
    │   │   ├── avl/            # AVL Tree
    │   │   │   ├── theory.html      # Theoretical explanation
    │   │   │   ├── code.html        # Implementation code
    │   │   │   ├── visualization.html # Interactive visualization
    │   │   │   └── images/          # AVL-specific images
    │   │   ├── bst/            # Binary Search Tree
    │   │   │   ├── theory.html
    │   │   │   ├── code.html
    │   │   │   ├── visualization.html
    │   │   │   └── images/
    │   │   └── btree/          # B-Tree
    │   │       ├── theory.html
    │   │       ├── code.html
    │   │       ├── visualization.html
    │   │       └── images/
    │   │
    │   ├── graphs/             # Graph algorithms
    │   │   ├── bfs/            # Breadth-First Search
    │   │   │   ├── theory.html
    │   │   │   ├── code.html
    │   │   │   ├── visualization.html
    │   │   │   └── images/
    │   │   └── dfs/            # Depth-First Search
    │   │       ├── theory.html
    │   │       ├── code.html
    │   │       ├── visualization.html
    │   │       └── images/
    │   │
    │   └── linear-structures/  # Linear data structures
    │       ├── stack/          # Stack implementation
    │       │   ├── theory.html
    │       │   ├── code.html
    │       │   ├── visualization.html
    │       │   └── stack-image.png
    │       └── queue/          # Queue implementation
    │           ├── theory.html
    │           ├── code.html
    │           ├── visualization.html
    │           └── queue-image.png
    │
    ├── assets/                 # Static assets and resources
    │   ├── css/               # Stylesheets
    │   │   ├── main.css           # Main application styles
    │   │   ├── visualization.css   # Visualization page styles
    │   │   └── prism.css          # Code syntax highlighting
    │   ├── js/                # JavaScript files
    │   │   └── prism.js           # Syntax highlighting library
    │   ├── images/            # Images and logos
    │   │   ├── DsaVirtualLabFinalLogo.png
    │   │   ├── collegelogo.png
    │   │   └── ...                # Other shared images
    │   └── static/            # Build artifacts and compiled assets
    │       ├── css/
    │       └── js/
    │
    └── lib/                   # Libraries and utilities
        ├── algorithms/        # Algorithm implementations
        │   ├── Algorithm.js       # Base algorithm class
        │   ├── AVL.js            # AVL Tree algorithms
        │   ├── BST.js            # Binary Search Tree algorithms
        │   ├── BTree.js          # B-Tree algorithms
        │   ├── BFS.js            # Breadth-First Search
        │   ├── DFS.js            # Depth-First Search
        │   ├── Graph.js          # Graph utilities
        │   ├── StackLL.js        # Stack with Linked List
        │   └── QueueLL.js        # Queue with Linked List
        │
        ├── animations/        # Animation utilities
        │   ├── AnimationMain.js   # Main animation controller
        │   ├── AnimatedObject.js  # Base animated object
        │   ├── AnimatedCircle.js  # Animated circle elements
        │   ├── AnimatedLabel.js   # Animated text labels
        │   ├── AnimatedRectangle.js # Animated rectangles
        │   ├── AnimatedLinkedList.js # Animated linked list
        │   ├── AnimatedBTreeNode.js # Animated B-Tree nodes
        │   ├── HighlightCircle.js # Highlighting effects
        │   ├── Line.js           # Line drawing utilities
        │   ├── ObjectManager.js  # Animation object management
        │   ├── CustomEvents.js   # Custom event handling
        │   └── UndoFunctions.js  # Undo/Redo functionality
        │
        └── third-party/       # External libraries
            ├── jquery-1.5.2.min.js
            ├── jquery-ui-1.8.11.custom.min.js
            └── jquery-ui-1.8.11.custom.css
```

## 🎯 Key Features

### **Interactive Experiments**
Each experiment includes three components:
- **Theory** - Comprehensive explanation of concepts
- **Code** - Implementation with syntax highlighting  
- **Visualization** - Interactive animations and demonstrations

### **Organized by Category**
- **Trees** - AVL Trees, Binary Search Trees, B-Trees
- **Graphs** - BFS, DFS algorithms
- **Linear Structures** - Stacks, Queues

### **Modern Architecture**
- Clean separation of concerns
- Modular component structure
- Reusable animation and algorithm libraries
- Responsive design patterns

## 🚀 Getting Started

### **Quick Start**
1. Open `index.html` in your browser
2. Navigate through the experiments
3. Explore theory, code, and visualizations

### **Development**
1. Main pages are in `src/pages/`
2. Experiment modules in `src/experiments/`
3. Shared assets in `src/assets/` 
4. Reusable libraries in `src/lib/`

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES5/ES6)
- **Animations**: Custom animation library built on Canvas API
- **UI Framework**: jQuery + jQuery UI
- **Styling**: Custom CSS with responsive design
- **Code Highlighting**: Prism.js

## 📱 Features

- **Responsive Design** - Works on desktop and mobile
- **Interactive Visualizations** - Step-through algorithm execution
- **Code Examples** - Syntax-highlighted implementations
- **Educational Content** - Comprehensive theory explanations
- **User Feedback** - Built-in feedback system

## 🔧 Architecture Benefits

### **Maintainability**
- Clear file organization
- Consistent naming conventions
- Modular structure

### **Scalability** 
- Easy to add new experiments
- Reusable component libraries
- Standardized experiment format

### **Developer Experience**
- Intuitive folder structure
- Well-organized assets
- Clear separation of concerns

## 📝 Adding New Experiments

To add a new experiment:

1. Create folder in appropriate category under `src/experiments/`
2. Add three files: `theory.html`, `code.html`, `visualization.html`
3. Include experiment-specific images in `images/` subfolder
4. Update experiment links in `src/pages/experiments.html`
5. Follow existing patterns for consistency

## 🎨 Styling Guidelines

- Main styles: `src/assets/css/main.css`
- Visualization styles: `src/assets/css/visualization.css`
- Use consistent color scheme and typography
- Maintain responsive design patterns

---

**Project Type**: Educational Web Application  
**Architecture**: Modular Frontend Application  
**Last Updated**: September 2025  
**Status**: ✅ Production Ready
