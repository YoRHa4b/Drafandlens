import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Cambia a '/tu-repo/' si subes a GitHub Pages en un subpath
});
