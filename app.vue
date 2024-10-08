<template>
  <div class="flex flex-col min-h-screen bg-dark-800 text-light-50">
    <!-- Top Navigation for Desktop & Mobile -->
    <TopNavigation class="sticky top-0 left-0 z-50 w-full shadow-md bg-dark-900 text-light-50" />

    <!-- Main Content Area -->
    <main id="main-content" tabindex="-1"
      class="flex-1 overflow-x-hidden overflow-y-auto scrollable-container">
      <NuxtPage />
      <FooterComponent />
    </main>

    <!-- Scroll to Top Button -->
    <button v-if="showButton" @click="scrollToTop"
      class="fixed p-4 transition-transform rounded-full shadow-lg bottom-6 right-6 bg-tertiary text-light-50 hover:scale-105">
      <span class="sr-only">Back to Top</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import TopNavigation from "@/components/Navigation.vue";
import FooterComponent from "@/components/Footer.vue";

function scrollToTop() {
  const container = document.querySelector('.scrollable-container');
  if (container) {
    container.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

onMounted(() => {
  window.addEventListener('resize', checkResolution);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkResolution);
});
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
