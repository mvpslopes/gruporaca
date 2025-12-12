import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { join } from 'path';

// Plugin para copiar .htaccess após o build
const copyHtaccess = () => {
  return {
    name: 'copy-htaccess',
    closeBundle() {
      try {
        copyFileSync(
          join(__dirname, 'public', '.htaccess'),
          join(__dirname, 'dist', '.htaccess')
        );
        console.log('✅ .htaccess copiado para dist/');
      } catch (error) {
        console.warn('⚠️  Não foi possível copiar .htaccess:', error);
      }
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyHtaccess()],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
