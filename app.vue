<template>
  <div class="flex flex-col min-h-screen bg-dark-800 text-light-50">
    <a
        href="#main-content"
        @click="focusMainContent"
        class="absolute top-[-40px] left-0 bg-white text-black p-2 z-50 transition-all duration-300 focus:top-0"
    >
      Skip to main content
    </a>
    <Navigation class="sticky top-0 left-0 z-50 w-full shadow-md bg-dark-900 text-light-50" />
    <main id="main-content" tabindex="-1" class="flex-1 overflow-x-hidden overflow-y-auto scrollable-container">
      <NuxtLayout>
        <NuxtPage />
        <Footer />
      </NuxtLayout>
    </main>
    <button v-if="showButton" @click="scrollToTop"
            class="fixed p-4 transition-transform rounded-full shadow-lg bottom-6 right-6 bg-tertiary text-light-50 hover:scale-105">
      <span class="sr-only">Back to Top</span>
      <i class="fas fa-arrow-up w-8 h-8"></i>
    </button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false
    };
  },
  methods: {
    focusMainContent() {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
      }
    },
    scrollToTop() {
      const container = document.querySelector('.scrollable-container');
      if (container) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    toggleButtonVisibility() {
      const scrollableContainer = document.querySelector('.scrollable-container');
      if (scrollableContainer) {
        this.showButton = scrollableContainer.scrollTop > 300;
      } else {
        this.showButton = window.pageYOffset > 300;
      }
    },
  },
  mounted() {
    const scrollableContainer = document.querySelector('.scrollable-container');
    if (scrollableContainer) {
      scrollableContainer.addEventListener('scroll', this.toggleButtonVisibility);
    } else {
      window.addEventListener('scroll', this.toggleButtonVisibility);
    }
  },
  beforeDestroy() {
    // Remove scroll event listener before the component is destroyed
    const scrollableContainer = document.querySelector('.scrollable-container');
    if (scrollableContainer) {
      scrollableContainer.removeEventListener('scroll', this.toggleButtonVisibility);
    } else {
      window.removeEventListener('scroll', this.toggleButtonVisibility);
    }
  },
};
</script>

<style scoped>
/* Your scoped styles here if needed */
</style>
