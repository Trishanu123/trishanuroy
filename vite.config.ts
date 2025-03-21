import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/trishanuroy/", // Ensure this matches the exact GitHub repo name

  build: {
    chunkSizeWarningLimit: 500, // Increase chunk size limit to suppress warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },

  optimizeDeps: {
    exclude: ['lucide-react'], // Ensure that dependencies are resolved properly
  },

  assetsInclude: ['**/*.pdf'], // Ensure that PDF files are correctly included

  define: {
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(process.env.VITE_EMAILJS_SERVICE_ID),
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.VITE_EMAILJS_TEMPLATE_ID),
    'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.VITE_EMAILJS_PUBLIC_KEY),
  },
});
