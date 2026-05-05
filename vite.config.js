import { defineConfig } from 'vite';
import { copyFileSync, cpSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: [
    {
      name: 'copy-unity-files',
      closeBundle() {
        // Copy Build directory
        cpSync('Build', 'dist/Build', { recursive: true });
        // Copy TemplateData directory (already handled by Vite's asset processing)
        // but we'll ensure it's there
        cpSync('TemplateData', 'dist/TemplateData', { recursive: true });
      }
    }
  ]
});
