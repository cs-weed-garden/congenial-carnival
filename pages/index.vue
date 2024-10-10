<template>
<!-- Hero Section -->
<section class="relative py-48 transition-colors duration-500 lg:py-56 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50" style="background-image: url(/img/AdobeStock_401509003.jpeg); background-size: cover; background-position: center;">
  <div class="relative z-10 px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-16 items-center">
      <!-- Left: Text Content -->
      <div class="flex flex-col text-center lg:text-left bg-opacity-90 p-12 rounded-lg" style="background: rgba(0, 0, 0, 0.8); margin-right: 20px;">
        <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-light-50">
          <span class="font-black text-7xl lg:text-8xl text-primary-50">Weed</span>
          <span class="text-6xl text-light-50">Garden</span><br>
          Track Your Cannabis Grow with Historical Reporting
        </h1>
        <p class="mt-8 text-lg leading-relaxed lg:text-xl text-secondary-200">
          We're in closed beta, inviting a small group to test Weed Garden before public launch.<br /> Sign up now for early access and help shape the future of grow tracking software!
        </p>
        <ul class="mt-4 text-lg leading-relaxed lg:text-xl text-secondary-200">
          <li>- Track plant growth from seed to harvest.</li>
          <li>- Access detailed historical reports to optimize future grows.</li>
          <li>- Ensure compliance with regulatory requirements.</li>
        </ul>
        <button @click="scrollToCTA" class="mt-8 px-8 py-4 text-xl font-bold transition-transform rounded-lg shadow-lg bg-tertiary-400 hover:bg-tertiary-600 text-dark focus:outline-none focus:ring-4 focus:ring-tertiary-200 lg:text-2xl hover:text-light hover:shadow-2xl">
          Sign Up for Updates
        </button>
      </div>

      <!-- Right: Image -->
      <div class="hidden lg:flex justify-center lg:justify-end">
        <img src="https://source.unsplash.com/random/?plant,garden" alt="Cannabis grow" class="rounded-lg shadow-lg">
      </div>
    </div>
  </div>
</section>


  <!-- Video Tour Section -->
  <section class="relative py-40 lg:py-48 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-700 text-light-50 transition-colors border-t border-gray-600">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h2 class="mb-6 text-5xl font-black text-primary-100">Welcome to Weed Garden</h2>
        <p class="text-xl leading-relaxed lg:text-2xl text-secondary-100">
          Take a video tour of Weed Garden's features to streamline your cannabis grow operations.
          <NuxtLink to="/video-tour" class="underline text-primary-100 hover:text-primary-50">Watch the demo</NuxtLink> for a full walkthrough.
        </p>
      </div>
    </div>
  </section>

  <!-- Mission Section -->
  <section class="relative py-40 lg:py-48 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-col justify-center lg:text-left">
        <h2 class="mb-8 text-4xl font-extrabold">
          <span class="text-6xl font-black text-primary-50">Our Mission</span>: Empowering Cannabis Growers
        </h2>
        <p class="mb-8 text-lg leading-relaxed lg:text-xl text-secondary-200">
          At Weed Garden, we believe in growing together by providing powerful, intuitive management solutions.
          <NuxtLink to="/about-us" class="underline text-primary-50 hover:text-primary-100">Learn more about our mission.</NuxtLink>
        </p>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="relative py-40 lg:py-48 bg-gradient-to-b from-dark-900 via-dark-700 to-dark-800 text-light-50 border-t border-gray-700">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 class="mb-8 text-4xl font-extrabold text-primary-50">
        <span class="font-black">About Weed Garden</span>
      </h2>
      <p class="text-lg leading-relaxed lg:text-xl text-secondary-200">
        Weed Garden is the premier grow tracking and ERP system for licensed dispensaries in Minnesota.
        <NuxtLink to="/about-us" class="underline text-primary-50 hover:text-primary-100">Read more about our story.</NuxtLink>
      </p>
    </div>
  </section>

  <!-- Key Features Summary -->
  <section class="relative py-40 lg:py-48 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 class="mb-12 text-5xl font-extrabold text-center">
        <span class="text-6xl font-black text-primary-50">Key</span> Features of Our Cannabis ERP Software
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div>
          <h3 class="text-2xl font-bold text-primary-50">Seed-to-Sale Tracking</h3>
          <p class="mt-4 text-lg text-secondary-200">Comprehensive visibility from cultivation to final sale.</p>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-primary-50">Inventory Management</h3>
          <p class="mt-4 text-lg text-secondary-200">Real-time updates and analytics for better control.</p>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-primary-50">Regulatory Compliance</h3>
          <p class="mt-4 text-lg text-secondary-200">Ensure full compliance with local, state, and federal laws.</p>
        </div>
      </div>
      <p class="mt-12 text-lg lg:text-xl text-secondary-200 text-center">
        Weed Garden offers additional features like cost tracking, label generation, and in-depth reporting.
        <NuxtLink to="/features" class="underline text-primary-50 hover:text-primary-100">Learn more about all the features.</NuxtLink>
      </p>
    </div>
  </section>

  <!-- Signup CTA Section -->
  <section class="relative py-40 lg:py-48 bg-gradient-to-b from-dark-800 via-dark-600 to-dark-700 text-light-50 border-t border-gray-800">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 class="mb-8 text-4xl font-extrabold">
        <span class="font-black text-primary-50">Ready</span> to Transform Your Cannabis Business?
      </h2>
      <p class="mb-8 text-lg lg:text-xl text-secondary-200">
        Join Weed Garden today and leverage advanced features like cost tracking, label generation, and detailed reporting to elevate your operations.
      </p>
      <div class="mt-8">
        <div id="signupForm" ref="signupForm" class="relative w-full cta" style="height: 5rem;"></div>
        <p class="mt-6 text-lg leading-relaxed text-secondary-200">
          By signing up, you’ll be able to follow our journey and contribute directly to shaping the app. We respect your privacy and handle your data with care. Review our
          <NuxtLink to="/privacy-policy" class="underline text-primary-50 hover:text-primary-100">Privacy Policy</NuxtLink>.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToCTA() {
      const container = document.querySelector('.cta');
      if (container) {
        container.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style>
.btn-primary {
  @apply bg-tertiary hover:bg-tertiary-600 text-dark-800 px-6 py-3 rounded-lg font-medium inline-block text-xl;
}

nav a:hover {
  @apply text-tertiary;
}

button[aria-label="Scroll to Top"] {
  @apply fixed bottom-6 right-6 bg-tertiary text-light-50 p-3 rounded-full shadow-lg;
}
</style>
