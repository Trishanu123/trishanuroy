import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    base: "/trishanuroy/", // Ensure this matches the exact GitHub repo name
    
    // Define environment variables to be replaced in client code
    define: {
      'process.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(env.VITE_EMAILJS_SERVICE_ID || 'service_o4r03kr'),
      'process.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID || 'template_ft1rlyk'),
      'process.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY || 'XEqV2UpfZVVvhxEcc'),
    },
    
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
  };
});