# DSA Virtual Lab

![GitHub stars](https://img.shields.io/github/stars/maheshRudra2025/dsa_virtual_lab?style=social)
![GitHub forks](https://img.shields.io/github/forks/maheshRudra2025/dsa_virtual_lab?style=social)
![GitHub issues](https://img.shields.io/github/issues/maheshRudra2025/dsa_virtual_lab)
![GitHub pull requests](https://img.shields.io/github/issues-pr/maheshRudra2025/dsa_virtual_lab)
![GitHub license](https://img.shields.io/github/license/maheshRudra2025/dsa_virtual_lab)

## 📌 What is this Project?

The **DSA Virtual Lab** is an interactive web platform designed to help students, developers, and educators master **Data Structures and Algorithms (DSA)**. Inspired by classical computer science visualization engines, our goal is to create an intuitive and accessible learning environment that demystifies complex algorithmic concepts through step-by-step animations and clear theoretical foundations.

---

## 💡 Why is it Useful?

Learning Data Structures and Algorithms is essential for writing efficient code and excelling in technical interviews. This platform helps learners by:

- **Demystifying Complex Concepts**: Step through operations like tree rebalancing, graph traversals, and linked list node updates visually.
- **Hands-On Interactivity**: Insert, delete, search, and animate data structures in real-time.
- **Accessible & Responsive Design**: Compliant with WCAG 2.1 AA/AAA standards with clear contrast and keyboard-accessible controls.
- **Open-Source & Collaborative**: Built by the community for the community.

---

## ✨ Key Features

- **Interactive Visualizations**: Watch data structures (Stacks, Queues, Trees, Graphs) animate dynamically with customizable speed and undo/redo capabilities.
- **Modern Next.js 15 Application**: Clean component architecture, TypeScript type safety, and fast Turbopack builds.
- **Reusable Visualizer Architecture**: Add new algorithms with minimal boilerplate via `<AlgorithmVisualizer />` and `useAlgorithmVisualizer`.
- **Design System**: Standardized color palette, typographic hierarchy, and theme tokens in `theme.css`.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, Custom Theme Variables (`theme.css`)
- **Animation Engine**: HTML5 Canvas API with custom animation controllers
- **Icons & Utilities**: React Icons, Axios

---

## 🚀 Quickstart & Local Setup

### Prerequisites

- **Node.js** (v18.0 or higher recommended)
- **Git**
- **npm** (or yarn / pnpm / bun)

### Step-by-Step Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/maheshRudra2025/dsa_virtual_lab.git
   cd dsa_virtual_lab
   ```

2. **Install Dependencies**:
   You can install dependencies directly from the root:
   ```bash
   npm run install:app
   ```
   *(Or navigate into the app directory: `cd dsa-virtual-nextjs-app && npm install`)*

3. **Start the Development Server**:
   From the repository root:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Available Root Scripts**:
   - `npm run dev` - Start local development server
   - `npm run build` - Build the application for production
   - `npm run start` - Start production server
   - `npm run lint` - Run ESLint and TypeScript checks

---

## 📂 Project Architecture

For a detailed breakdown of directories, component hierarchy, and instructions on how to add new algorithm visualizations, please refer to:

👉 **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)**

---

## 🤝 How to Contribute

We welcome contributions of all kinds! Please check out [CONTRIBUTE.md](CONTRIBUTE.md) for full guidelines.

1. **Fork the repository** to your GitHub account.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/<your-username>/dsa_virtual_lab.git
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/my-feature-name
   ```
4. **Make your changes** and verify the build:
   ```bash
   npm run lint
   npm run build
   ```
5. **Commit and push** your branch to GitHub.
6. **Open a Pull Request** against `maheshRudra2025/dsa_virtual_lab:main`.

---

## 🔄 Keeping Your Fork Up to Date

Keep your fork synchronized with the upstream repository:

```bash
git remote add upstream https://github.com/maheshRudra2025/dsa_virtual_lab.git
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
