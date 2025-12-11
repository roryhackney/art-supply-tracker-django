import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    base: '/static/', //this should match settings.STATIC_URL
    //build will get files from assets/ and build them  static/scripts/ as name-bundle.js
    build: {
        outDir: path.resolve(__dirname, './static'),
        emptyOutDir: false,
        manifest: 'manifest.json',
        rollupOptions: {
            input: {
                'index': path.resolve(__dirname, 'assets/javascript/index.js')
            },
            output: {
                'entryFileNames': `javascript/[name]-bundle.js`
            }
        }
    }
});