<template>
  <section class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6 blog-container">
    <h1 class="text-4xl font-bold mb-6 text-center">Latest Blog Posts</h1>

    <!-- Loading state -->
    <div v-if="!posts && !error" class="loading text-center">
      <p>Loading posts...</p>
    </div>

    <!-- Error state -->
    <div v-if="error" class="error text-center text-red-600">
      <p>Failed to load posts. Please try again later.</p>
    </div>

    <!-- Blog posts -->
    <div v-if="posts && posts.length > 0" class="flow-root">
      <ul class="divide-y divide-gray-200">
        <li v-for="post in posts" :key="post.id" class="py-3 sm:py-4">
          <NuxtLink :to="`/blog/${post.slug}`" class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img
                  class="w-12 h-12 rounded-full"
                  :src="post.feature_image"
                  alt="Post thumbnail"
                  @error="setDefaultImage($event)"
              >
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-lg font-bold text-primary-50 truncate">{{ post.title }}</p>
              <p class="text-light truncate">{{ post.primary_author.name }} - {{ new Date(post.published_at).toLocaleDateString() }}</p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-light">
              Read More
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <p v-else>No posts found.</p>
  </section>
</template>

<script setup>
import { useAsyncData, useRoute } from '#app';
import { ref, watch } from 'vue'; // Ensure watch is from Vue

const route = useRoute();
const posts = ref([]);
const error = ref(null);

// Placeholder image URL
const defaultImageUrl = '/img/default-not-found-image.webp';

// Function to set default image if the original fails to load
function setDefaultImage(event) {
  console.log('Image failed to load, setting fallback image');
  event.target.src = defaultImageUrl;
}

const fetchPosts = async () => {
  const GHOST_API_KEY = '1e3deb58b040964cfa7d845781';
  const GHOST_API_URL = `https://ghost.weed-garden.com/ghost/api/v3/content/posts/?key=${GHOST_API_KEY}&include=tags,authors&limit=all`;

  try {
    const response = await $fetch(GHOST_API_URL);
    posts.value = response.posts;
  } catch (err) {
    error.value = err;
  }
};

// Initial fetch
await fetchPosts();

// Watch route changes and refetch posts on client-side navigation
watch(() => route.fullPath, () => {
  fetchPosts();
});


</script>

<style scoped>
.loading, .error {
  margin-top: 2rem;
}

.blog-container {
  padding: 2rem 0;
}
</style>
