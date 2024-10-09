<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-primary-100 text-light-50">
    <h1 class="text-9xl font-extrabold">404</h1>
    <p class="text-2xl mt-4">Oops! Page not found.</p>
    <p class="mt-2 text-lg text-secondary-200">Sorry, the page you are looking for doesn’t exist or has been moved.</p>
    <nuxt-link to="/" class="btn btn-primary mt-6">Back to Home</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ error }) {
    error({ statusCode: 404, message: 'Page not found' })
  }
}
</script>
