<template>
  <nav class="bg-dark-900 border-gray-200">
    <div class="flex flex-wrap items-center justify-between lg:max-w-7xl mx-auto p-4">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-3">
        <img src="/site-logo.webp" class="h-8" alt="Weed Garden Icon">
        <span class="self-center text-2xl font-semibold text-white">Weed Garden</span>
      </a>

      <!-- Login Button -->
      <div class="flex items-center md:order-2">
        <a href="https://app.weed-garden.com/login" class="text-white bg-primary hover:bg-primary-light font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">
          
            <i class="fa-light fa-sign-in-alt mr-2"></i>
          
          Login
        </a>
        <button @click="toggleMobileMenu" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none">
          
            <i class="fa-light fa-bars"></i>
          
        </button>
      </div>

      <!-- Main Navigation Links + Mega Menu -->
      <div id="mega-menu-icons" :class="mobileMenuOpen ? 'flex' : 'hidden' " class="items-center justify-between w-full md:flex md:w-auto md:order-1">
        <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li>
            <a href="/" class="block py-2 px-3 text-white hover:bg-gray-700 rounded-md" @click="closeMegaMenu">
              
                <i class="fa-light fa-house mr-2"></i>
              
              Home
            </a>
          </li>
          <li>
            <a href="/video-tour" class="block py-2 px-3 text-white hover:bg-gray-700 rounded-md" @click="closeMegaMenu">
              
                <i class="fa-light fa-video mr-2"></i>
              
              Video Tour
            </a>
          </li>
          <li>
            <a href="/features" class="block py-2 px-3 text-white hover:bg-gray-700 rounded-md" @click="closeMegaMenu">
              
                <i class="fa-light fa-tools mr-2"></i>
              
              Features
            </a>
          </li>
          <li>
            <a href="/pricing" class="block py-2 px-3 text-white hover:bg-gray-700 rounded-md" @click="closeMegaMenu">
              
                <i class="fa-light fa-tags mr-2"></i>
              
              Pricing
            </a>
          </li>

          <!-- "More" Mega Menu -->
          <li class="relative">
            <button @click="toggleMegaMenu" class="flex items-center justify-between w-full py-2 px-3 font-medium text-white hover:bg-gray-700 rounded-md md:w-auto">
              
                <i class="fa-light fa-ellipsis-h mr-2"></i>
              
              More
              
                <i class="fa-light fa-chevron-down ml-2"></i>
              
            </button>

            <!-- Mega Menu Content -->
            <div v-if="megaMenuOpen" class="absolute z-10 w-64 text-sm bg-gray-800 rounded-lg shadow-md">
              <ul class="py-4 px-4 text-white space-y-2">
                <li>
                  <a href="/affiliate-links" class="block hover:bg-gray-700 p-2 rounded-lg" @click="closeMegaMenu">
                    <div class="flex items-center">
                      
                        <i class="fa-solid fa-cart-shopping mr-2 text-lg align-middle"></i>
                      
                      Amazon Affiliate Links
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/blog" class="block hover:bg-gray-700 p-2 rounded-lg" @click="closeMegaMenu">
                    <div class="flex items-center">
                      
                        <i class="fa-solid fa-blog mr-2 text-lg align-middle"></i>
                      
                      Blog
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/mission" class="block py-2 px-3 text-white hover:bg-gray-700 rounded-md" @click="closeMegaMenu">
                    <div class="flex items-center">
                      
                        <i class="fa-solid fa-badge-check mr-2 text-lg align-middle"></i>
                      
                      Mission
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/about-us" class="block py-2 px-3 text-white hover:bg-gray-700 rounded-md" @click="closeMegaMenu">
                    <div class="flex items-center">
                      
                        <i class="fa-solid fa-handshake mr-2 text-lg align-middle"></i>
                      
                      About Us
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://chronictrails.com" target="_blank" class="block py-2 px-3 text-white hover:bg-gray-700 rounded-md" @click="closeMegaMenu">
                    <div class="flex items-center">
                      
                        <i class="fa-solid fa-map mr-2 text-lg align-middle"></i>
                      
                      Chronic Trails
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from '#app';

const mobileMenuOpen = ref(false);
const megaMenuOpen = ref(false);

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function toggleMegaMenu() {
  megaMenuOpen.value = !megaMenuOpen.value;
}

function closeMegaMenu() {
  megaMenuOpen.value = false;
}

// Watch for route changes and close the menu
const router = useRouter();
router.afterEach(() => {
  mobileMenuOpen.value = false;  // Close mobile menu
  megaMenuOpen.value = false;    // Close mega menu
});
</script>
