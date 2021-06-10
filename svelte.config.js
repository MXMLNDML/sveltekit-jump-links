import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: adapter(),
        paths: {
            base: '/sveltekit-jump-links',
            assets: '/sveltekit-jump-links',
        },
    },
};

export default config;
