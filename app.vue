<template>
  <div class="flex flex-col min-h-screen bg-dark-800 text-light-50">
    <NuxtLink
      to="#main-content"
      @click="focusMainContent"
      class="absolute top-[-40px] left-0 bg-white text-black p-2 z-50 transition-all duration-300 focus:top-0"
    >
      Skip to main content
    </NuxtLink>
    <Navigation class="sticky top-0 left-0 z-50 w-full shadow-md bg-dark-900 text-light-50" />
    <main id="main-content" tabindex="-1" class="flex-1 overflow-x-hidden max-h-screen overflow-y-auto scrollable-container">
      <NuxtLayout>
        <NuxtPage />
        <Footer />
        <CalendlyBadge />
      </NuxtLayout>
    </main>
    <button @click="scrollToTop" v-if="showButton"
      class="fixed p-4 transition-transform rounded-full shadow-lg bottom-28 right-6 bg-tertiary text-light-50 hover:scale-105">
      <span class="sr-only">Back to Top</span>
      <client-only>
        <i class="fas fa-arrow-up w-8 h-8"></i>  
      </client-only>
    </button>
  </div>
</template>

<script>
import CalendlyBadge from "~/components/CalendlyBadge.vue";

export default {
  components: {CalendlyBadge},
  scrollToTop: true,
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
      if (container && container.scrollTop !== undefined) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    toggleButtonVisibility() {
      const container = document.querySelector('.scrollable-container');
      if (container && container.scrollTop !== undefined) {
        this.showButton = container.scrollTop > 300;
      } else {
        this.showButton = window.pageYOffset > 300;
      }
    },
  },
  mounted() {
    // Attach scroll event listeners
    const container = document.querySelector('.scrollable-container');
    if (container && container.scrollTop !== undefined) {
      console.log('Attaching scroll listener to container'); // Debugging container
      container.addEventListener('scroll', this.toggleButtonVisibility);
    } else {
      console.log('Attaching scroll listener to window'); // Debugging window
      window.addEventListener('scroll', this.toggleButtonVisibility);
    }
  },
  beforeDestroy() {
    // Clean up event listeners
    const container = document.querySelector('.scrollable-container');
    if (container && container.scrollTop !== undefined) {
      container.removeEventListener('scroll', this.toggleButtonVisibility);
    } else {
      window.removeEventListener('scroll', this.toggleButtonVisibility);
    }
  },
};
</script>