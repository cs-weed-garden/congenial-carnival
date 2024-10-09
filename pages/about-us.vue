<template>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <!-- Left: Text Content -->
        <div class="flex flex-col justify-center text-center lg:text-left">
          <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-light-50">
            <span class="font-black text-7xl lg:text-8xl text-primary-50">Weed</span>
            <span class="text-6xl text-light-50">Garden</span><br>
            Empowering Cannabis Growers
          </h1>
          <p class="mt-6 text-lg leading-relaxed lg:text-xl text-secondary-400">
            Weed Garden is more than just an ERP solution—it's your partner in building an efficient, compliant, and successful cannabis cultivation business. Our mission is to streamline every aspect of your operation, helping you stay focused on growing top-quality products.
          </p>
        </div>

        <!-- Right: Image -->
        <div class="flex items-center justify-center">
          <img
              src="/img/happy-grow-medium.webp"
              srcset="/img/happy-grow-small.webp 400w, /img/happy-grow-medium.webp 600w, /img/happy-grow-large.webp 800w"
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 600px, 800px"
              alt="Weed Garden ERP Software"
              class="rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h2 class="mb-6 text-5xl font-black text-primary-50">Our Mission</h2>
        <p class="text-xl leading-relaxed lg:text-2xl text-secondary-200">
          At Weed Garden, we believe in supporting cannabis growers of all sizes, from small-scale operations to large commercial cultivators. Our mission is to simplify your work, improve efficiency, and help you navigate the complexities of regulatory compliance.
        </p>
      </div>
    </div>
  </section>

  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 class="mb-8 text-4xl font-extrabold text-light-100">
        <span class="text-6xl font-black text-primary-50">Why</span> Choose Weed Garden?
      </h2>
      <p class="text-lg leading-relaxed lg:text-xl text-secondary-200">
        Weed Garden is designed with cannabis cultivators in mind. Our ERP platform is fully customizable to suit the unique needs of your business, allowing you to scale seamlessly as you grow. We focus on:
      </p>
      <ul class="mt-6 space-y-4">
        <li class="flex items-start">
          <i class="mt-1 text-2xl fas fa-seedling text-primary-50"></i>
          <p class="ml-3 text-lg leading-relaxed text-secondary-200">Seed-to-sale tracking for total visibility at every stage.</p>
        </li>
        <li class="flex items-start">
          <i class="mt-1 text-2xl fas fa-warehouse text-primary-50"></i>
          <p class="ml-3 text-lg leading-relaxed text-secondary-200">Real-time inventory and compliance management.</p>
        </li>
        <li class="flex items-start">
          <i class="mt-1 text-2xl fas fa-check-circle text-primary-50"></i>
          <p class="ml-3 text-lg leading-relaxed text-secondary-200">Automated label generation for streamlined packaging.</p>
        </li>
        <li class="flex items-start">
          <i class="mt-1 text-2xl fas fa-chart-pie text-primary-50"></i>
          <p class="ml-3 text-lg leading-relaxed text-secondary-200">Detailed analytics and reporting for data-driven decisions.</p>
        </li>
      </ul>
    </div>
  </section>

  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 class="mb-8 text-4xl font-extrabold text-light-100">
        <span class="text-6xl font-black text-primary-50">Our Team</span> and Values
      </h2>
      <p class="text-lg leading-relaxed lg:text-xl text-secondary-200">
        Weed Garden is built by a passionate team of technologists, cultivators, and business experts dedicated to creating the best ERP platform for cannabis growers. We value transparency, innovation, and community, and we are committed to helping you thrive in this fast-growing industry.
      </p>
    </div>
  </section>

  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div class="flex items-center justify-center">
<!--          <img-->
<!--              src="/img/team.webp"-->
<!--              srcset="/img/team-small.webp 400w, /img/team-medium.webp 600w, /img/team-large.webp 800w"-->
<!--              sizes="(max-width: 600px) 400px, (max-width: 1200px) 600px, 800px"-->
<!--              alt="Weed Garden team"-->
<!--              class="rounded-lg shadow-lg"-->
<!--              loading="lazy"-->
<!--              decoding="async"-->
<!--          />-->
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="text-4xl font-extrabold text-light-100">
            <span class="text-6xl font-black text-primary-50">Join</span> Our Journey
          </h2>
          <p class="mt-6 text-lg leading-relaxed lg:text-xl text-secondary-200">
            Be part of the Weed Garden community and help shape the future of cannabis cultivation software. Follow our progress, provide feedback, and contribute to the development of features that will make your business grow.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style>
.btn-primary {
  @apply bg-tertiary hover:bg-tertiary-600 text-dark-800 px-6 py-3 rounded-lg font-medium inline-block text-xl;
}

/* General hover effect for navigation */
nav a:hover {
  @apply text-tertiary;
}
</style>
