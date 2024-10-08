<template>
    <nav class="bg-dark-900">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo and Site Name -->
          <div class="flex items-center">
            <!-- Icon or Small Logo -->
            <img class="w-auto h-8" src="/site-logo.webp" alt="Weed Garden Icon">
            <!-- Site Name -->
            <span class="ml-2 text-xl font-bold text-white">Weed Garden</span>
          </div>
  
          <!-- Desktop Menu -->
          <div class="hidden sm:block">
            <div class="flex items-baseline ml-10 space-x-4">
              <!-- Key Navigation Links for SEO -->
              <router-link to="/" class="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">Home</router-link>
              <router-link to="/cannabis-erp-software" class="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">ERP Software</router-link>
              <router-link to="/features" class="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">Features</router-link>
              <router-link to="/pricing" class="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">Pricing</router-link>
              <router-link to="/blog" class="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">Blog</router-link>
              <router-link to="/contact" class="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">Contact</router-link>
            </div>
          </div>
  
          <!-- Login Button or User Dropdown -->
          <div class="flex items-center">
            <div v-if="isAuthenticated" class="relative ml-3">
              <button type="button" class="p-1 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </button>
            </div>
            <div v-else>
              <router-link to="/login" class="px-4 py-2 ml-3 text-sm font-medium text-white rounded-md bg-primary hover:bg-primary-light">Login</router-link>
            </div>
          </div>
  
          <!-- Mobile Menu Button -->
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
          <router-link to="/" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">Home</router-link>
          <router-link to="/cannabis-erp-software" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">ERP Software</router-link>
          <router-link to="/features" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">Features</router-link>
          <router-link to="/pricing" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">Pricing</router-link>
          <router-link to="/blog" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">Blog</router-link>
          <router-link to="/contact" class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">Contact</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      isAuthenticated: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        mobileMenuOpen: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      },
      logout() {
        this.$emit('logout');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Scoped styles here if needed */
  </style>
  