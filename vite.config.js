import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/src/main.jsx': path.resolve(__dirname, 'src/main.tsx'),
    },
  },
});
