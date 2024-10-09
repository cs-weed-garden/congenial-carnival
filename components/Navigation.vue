<template>
    <nav class="bg-dark-900">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <img class="w-auto h-8" src="/site-logo.webp" alt="Weed Garden Icon">
            <span class="ml-2 text-xl font-bold text-white">Weed Garden</span>
          </div>
  
          <div class="sm:block">
            <div class="flex items-baseline ml-10 space-x-4">
              <NuxtLink to="/" class="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">Home</NuxtLink>
              <NuxtLink to="/video-tour" class="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">Video Tour</NuxtLink>
              <NuxtLink to="/features" class="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">Features</NuxtLink>
              <NuxtLink to="/mission" class="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">Mission</NuxtLink>
              <NuxtLink to="/about-us" class="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">About Us</NuxtLink>
            </div>
          </div>
  
          <div class="flex items-center">
           <NuxtLink external href="https://app.weed-garden.com/login" class="px-4 py-2 ml-3 text-sm font-medium text-white rounded-md bg-primary hover:bg-primary-light">Login</NuxtLink>
          </div>
  
          <div class="flex sm:hidden">
            <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="toggleMobileMenu">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg class="w-6 h-6" v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink to="/" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">Home</NuxtLink>
          <NuxtLink to="/cannabis-erp-software" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">ERP Software</NuxtLink>
          <NuxtLink to="/features" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">Features</NuxtLink>
          <NuxtLink to="/pricing" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">Pricing</NuxtLink>
          <NuxtLink to="/blog" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">Blog</NuxtLink>
          <NuxtLink to="/contact" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">Contact</NuxtLink>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mobileMenuOpen: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Scoped styles here if needed */
  </style>
  