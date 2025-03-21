import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/trishanuroy", // Make sure this matches your repo name in lowercase
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  assetsInclude: ['**/*.pdf'],
});