# SmartHome Innovations

A modern, responsive landing page for smart home products built with React, TypeScript, Tailwind CSS, and Framer Motion.

![SmartHome Innovations Preview](https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)

## Features

- 🚀 **Modern Stack**: Built with Vite, React 18, TypeScript, and Tailwind CSS
- ✨ **Beautiful UI**: Clean, responsive design with smooth animations
- 📱 **Mobile-First**: Fully responsive layout that works on all devices
- ⚡ **Optimized Performance**: Code splitting and lazy loading for fast load times
- 🛠 **Developer Experience**: Hot module replacement, TypeScript support, and more

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Containerization**: Docker
- **Web Server**: Nginx

## Prerequisites

- Node.js 18+ and npm/yarn
- Docker and Docker Compose (for containerized deployment)

## Getting Started

### Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/smart-home-innovations.git
   cd smart-home-innovations
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
# Build the app for production
npm run build

# Preview the production build
npm run preview
```

### Docker Deployment

1. Build and run the Docker container:
   ```bash
   docker-compose up --build
   ```

2. The app will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/        # Reusable UI components
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## Scripts

- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build
- `lint`: Run ESLint
- `format`: Format code with Prettier

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
