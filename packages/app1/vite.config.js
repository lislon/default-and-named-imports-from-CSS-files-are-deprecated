import {defineConfig} from 'vite';

export default defineConfig({
    cacheDir: './node_modules/.vite/nx-vite',

    server: {
        port: 4200,
        host: 'localhost',
    },

    preview: {
        port: 4300,
        host: 'localhost',
    },

    optimizeDeps: {
        include: ['@demo/mid1'], // emulate that this is external dep, and we do not control over it
    },
    // build: {
    //     commonjsOptions: {
    //         include: [/@demo/, /node_modules/],
    //     },
    // },
    plugins: [
    ],
});
