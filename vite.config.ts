import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
    {
      name: 'create-nojekyll',
      writeBundle() {
        try {
          const docsPath = join(process.cwd(), 'build/client');
          mkdirSync(docsPath, { recursive: true });
          const nojekyllPath = join(docsPath, '.nojekyll');
          console.log('Creating .nojekyll file at:', nojekyllPath);
          writeFileSync(nojekyllPath, '');
          console.log('.nojekyll file created successfully');
        } catch (error) {
          console.error('Error creating .nojekyll file:', error);
        }
      },
    },
  ],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    assetsDir: '',
    rollupOptions: {
     output: {
      entryFileNames: '[name].js',
      chunkFileNames: '[name].js',
      assetFileNames: '[name].[ext]',
     },
    }
  },
});
