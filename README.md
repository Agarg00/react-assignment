# Project Name

This is a web page built with modern web technologies, featuring interactive data visualizations.

## Tech Stack
- **React**: JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling for fast development
- **TypeScript**: Superset of JavaScript with static typing
- **Tailwind CSS**: Utility-first CSS framework for styling
- **D3.js**: JavaScript library for creating dynamic, interactive data visualizations

## Prerequisites
- Node.js (v18 or later)
- npm, pnpm, or yarn

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Agarg00/react-assignment.git
   cd react-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   pnpm install
   ```
   or
   ```bash
   yarn install
   ```

## Running the Project
1. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   pnpm dev
   ```
   or
   ```bash
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:5173` (or the port specified in the console).

## Building for Production
To create a production build:
```bash
npm run build
```
or
```bash
pnpm build
```
or
```bash
yarn build
```

The output will be in the `dist` directory.

## Project Structure
- `src/`: Contains the source code
  - `components/`: Reusable React components
  - `components/charts/`: D3 chart implementations
- `public/`: Static files served directly
- `tailwind.config.js`: Tailwind CSS configuration
- `vite.config.ts`: Vite configuration

## Available Scripts
- `npm run dev`, `pnpm dev`, or `yarn dev`: Starts the development server
- `npm run build`, `pnpm build`, or `yarn build`: Builds the project for production
- `npm run preview`, `pnpm preview`, or `yarn preview`: Previews the production build locally
