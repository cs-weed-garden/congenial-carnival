export default defineNuxtPlugin((nuxtApp) => {
    const ghost = {
        async getPosts() {
            // Use $fetch to make a request to the Ghost API to get posts
            const response = await $fetch(`http://ghost.weed-garden.com/ghost/api/v3/content/posts/?key=${useRuntimeConfig().public.ghostApiKey}&include=tags,authors`);
            return response.posts;
        },
        async getSinglePost(slug) {
            // Use $fetch to get a single post by its slug
            const response = await $fetch(`http://ghost.weed-garden.com/ghost/api/v3/content/posts/slug/${slug}/?key=${useRuntimeConfig().public.ghostApiKey}`);
            return response.posts[0];
        }
    };

    // Inject the Ghost service so you can access it in your components via useNuxtApp
    nuxtApp.provide('ghost', ghost);
});
