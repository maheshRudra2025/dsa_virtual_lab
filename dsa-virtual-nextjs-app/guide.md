# DSA Virtual Lab - Next.js Project Setup Guide

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) for the DSA Virtual Lab application.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js** (version 18.0 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm** or **bun**
- **Git** - [Download from git-scm.com](https://git-scm.com/)

## Project Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/maheshRudra2025/dsa_virtual_lab.git
cd dsa_virtual_lab
```

### Step 2: Navigate to the Next.js Application Directory

```bash
cd dsa-virtual-nextjs-app
```

### Step 3: Install Dependencies

Install all the required packages using npm:

```bash
npm install
```

**Alternative package managers:**

```bash
# Using Yarn
yarn install

# Using pnpm
pnpm install

# Using Bun
bun install
```

### Step 4: Install Additional Dependencies

The project uses additional packages for enhanced functionality:

```bash
npm install axios react-icons react-chartjs-2
```

### Step 5: Run the Development Server

Start the development server:

```bash
npm run dev
```

**Alternative commands:**

```bash
# Using Yarn
yarn dev

# Using pnpm
pnpm dev

# Using Bun
bun dev
```

### Step 6: Open the Application

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The application will automatically reload when you make changes to the code.

## Project Structure

```
dsa-virtual-nextjs-app/
├── public/                 # Static assets
├── src/
│   └── app/               # App Router directory
│       ├── favicon.ico    # Favicon
│       ├── globals.css    # Global styles
│       ├── layout.tsx     # Root layout component
│       └── page.tsx       # Home page component
├── package.json           # Project dependencies and scripts
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── guide.md              # This setup guide
```

## Available Scripts

In the project directory, you can run:

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs the linter to check for code issues

## Development Tips

1. **Edit the main page**: You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

2. **Add new pages**: Create new files in the `src/app` directory to add new routes.

3. **Styling**: This project uses CSS modules and global styles. You can add styles in `src/app/globals.css` or create component-specific CSS modules.

4. **Fonts**: This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Troubleshooting

### Common Issues and Solutions

1. **Port already in use**: If port 3000 is busy, Next.js will automatically try the next available port (3001, 3002, etc.).

2. **Node.js version issues**: Make sure you're using Node.js version 18.0 or higher:

   ```bash
   node --version
   ```

3. **Package installation issues**: Clear npm cache and reinstall:

   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **TypeScript errors**: Make sure all TypeScript dependencies are properly installed:
   ```bash
   npm install --save-dev typescript @types/react @types/node
   ```

## Learn More

To learn more about Next.js and the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial
- [React Documentation](https://react.dev/) - Learn about React
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn about TypeScript

## Contributing

This project is part of the DSA Virtual Lab open-source initiative. For contributing guidelines, please refer to the main repository's CONTRIBUTE.md file.

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on Vercel
3. Vercel will automatically detect it's a Next.js project and configure the build settings
4. Your app will be deployed and you'll get a live URL

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more deployment options.

## Support

If you encounter any issues while setting up the project, please:

1. Check the troubleshooting section above
2. Search for existing issues in the repository
3. Create a new issue with detailed information about the problem

Happy coding! 🚀
