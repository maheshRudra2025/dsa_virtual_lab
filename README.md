# DSA Virtual Lab

![GitHub stars](https://img.shields.io/github/stars/maheshRudra2025/dsa_virtual_lab?style=social)
![GitHub forks](https://img.shields.io/github/forks/maheshRudra2025/dsa_virtual_lab?style=social)
![GitHub issues](https://img.shields.io/github/issues/maheshRudra2025/dsa_virtual_lab)
![GitHub pull requests](https://img.shields.io/github/issues-pr/maheshRudra2025/dsa_virtual_lab)
![GitHub license](https://img.shields.io/github/license/maheshRudra2025/dsa_virtual_lab)

## 🎯 What is this Project?

The **DSA Virtual Lab** is an interactive educational web application designed to help developers and students master Data Structures and Algorithms (DSA). Inspired by visualization platforms like the [USFCA DSA Visualization page](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html), our goal is to simplify complex algorithmic concepts through step-by-step interactive animations, code execution, and detailed explanations.

## ✨ Why is it Useful?

* **Demystifying Complex Concepts**: Interactive visualizations turn abstract data structures and operations into clear visual processes.
* **Hands-On Learning**: Step through insertions, deletions, traversals, and rebalancing operations in real time.
* **Accessible Design**: Engineered with WCAG 2.1 AA/AAA compliant color schemes and a comprehensive design system.
* **Modern Architecture**: Built on a modern Next.js App Router and TypeScript foundation.

## 💻 Technology Stack

The active frontend application is located in `dsa-virtual-nextjs-app/`:

* **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
* **Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript 5](https://www.typescriptlang.org/) (ES2020 target)
* **Styling**: Modern CSS Design System & CSS Variables (WCAG 2.1 AA/AAA compliant tokens)
* **Linting & Code Quality**: [ESLint 9](https://eslint.org/) (`eslint-config-next`)
* **Visualization Engine**: HTML5 Canvas animation engine located in `public/lib/`

*(Note: The repository also preserves legacy HTML/JS implementations under `old/` and static design prototypes under `new_ui/` for reference.)*

## ⚙️ Getting Started & Local Setup

### Prerequisites

- **Node.js**: v18.18.0 or newer (v20+ or v24 LTS recommended)
- **npm**: v9.0.0 or newer
- **Git**: Installed on your system

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/maheshRudra2025/dsa_virtual_lab.git
   cd dsa_virtual_lab
   ```

2. **Navigate to the active application directory**:
   ```bash
   cd dsa-virtual-nextjs-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Available Scripts

Run these scripts from within the `dsa-virtual-nextjs-app/` directory:

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server with Turbopack at `http://localhost:3000` |
| `npm run typecheck` | Runs TypeScript type checking without emitting files (`tsc --noEmit`) |
| `npm run lint` | Runs ESLint to inspect code for errors and conventions |
| `npm run build` | Builds the optimized production application |
| `npm start` | Starts the Next.js production server (requires running `npm run build` first) |

## 📁 Repository Overview

```
dsa_virtual_lab/
├── dsa-virtual-nextjs-app/     # 🚀 Active modern web application (Next.js 15 + React 19 + TypeScript)
├── new_ui/                     # 🎨 Static UI design prototype
├── old/                        # 🗄️ Archived legacy vanilla HTML/CSS/JS implementation
├── CODE_OF_CONDUCT.md          # Community guidelines
├── CONTRIBUTE.md               # Contribution workflow
├── PROJECT_STRUCTURE.md        # Detailed repository architecture documentation
├── STYLE_GUIDE.md              # Design system and accessibility guide
└── README.md                   # Project overview and setup instructions
```

For an in-depth breakdown of directories and application routes, see [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md).

## 🤝 How to Contribute

We welcome contributions from developers of all skill levels!

1. **Fork the repository**.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/<your-username>/dsa_virtual_lab.git
   cd dsa_virtual_lab/dsa-virtual-nextjs-app
   ```
3. **Create a branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/my-feature
   ```
4. **Run type checks and linting** before submitting:
   ```bash
   npm run typecheck
   npm run lint
   npm run build
   ```
5. **Commit and submit a Pull Request** to the `main` branch.

Please review [CONTRIBUTE.md](CONTRIBUTE.md) and [STYLE_GUIDE.md](STYLE_GUIDE.md) for more guidelines.

## 📄 License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
