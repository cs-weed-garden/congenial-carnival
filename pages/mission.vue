<template>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <!-- Left: Image -->
        <div class="flex items-center justify-center">
          <img
              src="/img/mission-medium.webp"
              srcset="/img/mission-small.webp 400w, /img/mission-medium.webp 600w, /img/mission-large.webp 800w"
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 600px, 800px"
              alt="Cannabis Cultivation Collaboration"
              class="rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
          />
        </div>

        <!-- Right: Text Content -->
        <div class="flex flex-col justify-center lg:text-left">
          <h2 class="mb-8 text-4xl font-extrabold text-light-50">
            <span class="text-6xl font-black text-primary-50">Our Mission</span>: Empowering Cannabis Growers
          </h2>
          <p class="mb-6 text-lg leading-relaxed lg:text-xl text-secondary-200">
            At Weed Garden, we believe in growing together. Our mission is to empower cannabis cultivators with intuitive tools that simplify operations, boost productivity, and ensure compliance with local regulations.
          </p>
          <p class="text-lg leading-relaxed lg:text-xl text-secondary-200">
            We are committed to supporting your journey from seed to sale, giving you the resources and insights to grow your business with confidence. Whether you're managing a small grow or a large-scale operation, Weed Garden has the tools you need.
          </p>
          <p class="text-lg leading-relaxed lg:text-xl text-secondary-200">
            <NuxtLink to="/about-us" class="underline text-primary-50 hover:text-primary-100">
              Learn more about how we support growers.
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
/* Add your custom styles here if needed */
</style>
