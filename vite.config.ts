import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'inline-css',
          apply: 'build',
          enforce: 'post',
          transformIndexHtml: {
            order: 'post',
            handler(html, ctx) {
              if (!ctx.bundle) return html;
              let newHtml = html;
              for (const [fileName, bundle] of Object.entries(ctx.bundle)) {
                if (fileName.endsWith('.css') && 'source' in bundle) {
                  newHtml = newHtml.replace(
                    new RegExp(`<link rel="stylesheet"[^>]*?href="[^"]*?${fileName}"[^>]*?>`),
                    `<style>${bundle.source}</style>`
                  );
                }
              }
              return newHtml;
            }
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
