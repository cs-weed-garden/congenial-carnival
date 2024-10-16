<template>
  <div class="bg-dark-900">
    <footer class="p-10 px-2 mx-auto footer-custom max-w-7xl sm:px-6 lg:px-8">

      <!-- Main Footer Content -->
      <div class="grid grid-cols-2 gap-8 md:grid-cols-5 text-light">
        <!-- Legal Section -->
        <nav class="mb-6">
          <h2 class="footer-title">Legal</h2>
          <a href="/privacy-policy" class="flex items-center mb-2 link link-hover text-secondary-100">
            <client-only>
              <i class="mr-2 fal fa-shield-alt"></i>
            </client-only> Privacy Policy
          </a>
          <a href="/terms-of-service" class="flex items-center mb-2 link link-hover text-secondary-100">
            <client-only>
              <i class="mr-2 fal fa-file-contract"></i>
            </client-only> Terms of Service
          </a>
          <a href="/disclaimer" class="flex items-center mb-2 link link-hover text-secondary-100">
            <client-only>
              <i class="mr-2 fal fa-exclamation-triangle"></i>
            </client-only> Disclaimer
          </a>
        </nav>

        <!-- Social Section -->
        <nav class="mb-6">
          <h2 class="footer-title">Social</h2>
          <div class="flex space-x-4">
            <a href="https://twitter.com/GrowWithParker" target="_blank" rel="noopener noreferrer" aria-label="Twitter (opens in a new tab)">
              <client-only>
                <i class="text-2xl fab fa-twitter"></i>
              </client-only>
            </a>
            <a href="https://youtube.com/@parker_blunt_weed_garden?si=GhZQu5Ti6-f5IJl9" target="_blank" rel="noopener noreferrer" aria-label="YouTube (opens in a new tab)">
              <client-only>
                <i class="text-2xl fab fa-youtube"></i>
              </client-only>
            </a>
            <a href="https://www.facebook.com/WeedGardenERP" target="_blank" rel="noopener noreferrer" aria-label="Facebook (opens in a new tab)">
              <client-only>
                <i class="text-2xl fab fa-facebook"></i>
              </client-only>
            </a>
          </div>
        </nav>

        <nav class="mb-6">
          <h2 class="footer-title">Links</h2>

          <!-- Blog Link -->
          <a href="https://ghost.weed-garden.com" rel="noopener noreferrer" target="_blank" class="flex items-center mb-2 link link-hover text-secondary-100">
            <client-only>
              <i class="mr-2 fas fa-rss"></i>
            </client-only> Blog
          </a>

          <!-- Help Form Link -->
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScNNqa-RveU13qoEZZiqx7QSI9DHq-fuFpOTvboBwZZnBbJ8g/viewform?usp=sf_link" rel="noopener noreferrer" target="_blank" class="flex items-center mb-2 link link-hover text-secondary-100">
            <client-only>
              <i class="mr-2 fas fa-life-ring"></i>
            </client-only> Help Form
          </a>

          <!-- Discord Link -->
          <a href="https://discord.gg/T3ywCHSR" rel="noopener noreferrer" target="_blank" class="flex items-center mb-2 link link-hover text-secondary-100">
            <client-only>
              <i class="mr-2 fab fa-discord"></i>
            </client-only> Discord
          </a>

          <!-- GitHub Link -->
          <a href="https://github.com/cs-weed-garden" rel="noopener noreferrer" target="_blank" class="flex items-center mb-2 link link-hover text-secondary-100">
            <client-only>
              <i class="mr-2 fab fa-github"></i>
            </client-only> GitHub Org
          </a>
        </nav>

        <!-- Resources Section -->
        <nav class="mb-6">
          <h2 class="footer-title">Resources</h2>

          <!-- Sitemap -->
          <a href="/sitemap.xml" rel="noopener noreferrer" class="flex items-center mb-2 link link-hover text-secondary-100">
            <client-only>
              <i class="mr-2 fal fa-sitemap"></i>
            </client-only> Sitemap
          </a>

          <!-- Robots.txt -->
          <a href="/robots.txt" rel="noopener noreferrer" class="flex items-center mb-2 link link-hover text-secondary-100">
            <client-only>
              <i class="mr-2 fal fa-robot"></i>
            </client-only> Robots.txt
          </a>

          <!-- Humans.txt (Credits) -->
          <a href="/Humans.txt" class="flex items-center mb-2 link link-hover text-secondary-100">
            <client-only>
              <i class="mr-2 fal fa-users"></i>
            </client-only> Humans.txt (Credits)
          </a>

          <!-- Accessibility Statement -->
          <a href="/accessibility" class="flex items-center mb-2 link link-hover text-secondary-100">
            <client-only>
              <i class="mr-2 fal fa-universal-access"></i>
            </client-only> Accessibility Statement
          </a>
        </nav>

        <!-- Contact Information Section -->
        <nav class="mb-6">
          <h2 class="footer-title">Contact Information</h2>
          <address class="space-y-2 text-sm not-italic leading-6 text-secondary-100">
            <p class="flex items-center font-semibold">
              <client-only>
                <i class="mr-2 fal fa-building text-secondary-200"></i>
              </client-only> CS Industries, LLC.
            </p>
            <p class="flex items-center">
              <client-only>
                <i class="mr-2 fal fa-map-marker-alt text-secondary-200"></i>
              </client-only> Hopkins, MN 55343
            </p>
            <p class="flex items-center">
              <client-only>
                <i class="mr-2 fal fa-phone text-secondary-200"></i>
              </client-only>
              <a href="tel:+15072912592" class="link link-hover text-secondary-100 hover:text-secondary-300"> (507) 291-2592</a>
            </p>
            <p class="flex items-center">
              <client-only>
                <i class="mr-2 fal fa-envelope text-secondary-200"></i>
              </client-only>
              <a href="mailto:info@weed-garden.com" class="link link-hover text-secondary-100 hover:text-secondary-300">info@weed-garden.com</a>
            </p>
          </address>
        </nav>
      </div>

      <div class="flex items-center text-secondary-100">
        <!-- Icon Section -->
        <div class="text-4xl">
          <client-only>
            <i class="fal fa-hashtag"></i>
          </client-only>
        </div>

        <!-- Text Section -->
        <div class="ml-4">
          <p>Protected by Cloudflare & TLS 1.3</p>
          <p>Serving cannabis growers throughout Minnesota.</p>
        </div>
      </div>

      <div class="mt-8 text-secondary-200">
        <p>&copy; 2024 CS Industries, LLC. All rights reserved. <br>
          Doing business as <strong>Weed Garden</strong>.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
