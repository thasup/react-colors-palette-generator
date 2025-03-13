# Color Palette Generator Application

This application is a Color Palette Generator built with [React](https://reactjs.org), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev). It allows users to generate color palettes based on their input instructions.

## Features

- **Dynamic Color Generation**: Users can input instructions to generate color palettes.
- **Clipboard Functionality**: Click on a color block to copy its hex code to the clipboard.
- **Responsive Design**: The application is designed to be responsive and user-friendly.
- **Error Handling**: Provides feedback for successful and unsuccessful operations.

## Technologies Used

- **ReactJS**: For building the user interface.
- **TypeScript**: For type safety and better development experience.
- **Material-UI**: For UI components and styling.
- **Jest**: For unit testing.
- **Cypress**: For end-to-end testing.
- **ESLint**: For code linting.
- **Prettier**: For code formatting.

## Getting Started

Follow these steps to set up your project:

1. **Create the project**:
   ```bash
   npx degit fabien-ml/react-ts-vite-template my-app
   ```

2. **Navigate to the project directory**:
   ```bash
   cd my-app
   ```

3. **Initialize a Git repository**:
   ```bash
   git init
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Start the development server**:
   Open your browser and go to [http://localhost:3000](http://localhost:3000) to see your application in action.
   ```bash
   npm run dev
   ```

## Components Overview

### ColorPaletteGenerator

This component allows users to input instructions and generate a color palette. It includes:

- An input field for user instructions.
- A button to trigger the palette generation.
- A display area for the generated color blocks.

### ColorBlock

This component displays the generated colors in blocks. Each block shows the color's hex code and name, and allows users to copy the hex code to the clipboard by clicking on it.

## API Integration

The application communicates with an external API to generate color palettes based on user input. The API endpoint used is:

## Recommended VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Other commands

### Lint commands

```bash
npm run lint
```

### Build commands

```bash
npm run build
```

### Run the app in production mode at http://localhost:3000.

```bash
npm run serve
```

### Test commands

- Run unit tests and watch
  ```bash
  npm run test:unit
  ```
- Run unit tests with coverage
  ```bash
  npm run test:unit:coverage
  ```
- Run e2e tests
  ```bash
  npm run test:e2e
  ```