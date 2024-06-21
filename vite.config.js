

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your repository name
  build: {
    outDir: 'dist' // This is the default, so you may not need to add this
  }
});
