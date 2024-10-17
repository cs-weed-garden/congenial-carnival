<template>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h2 class="mb-6 text-5xl font-black text-primary-50">Weed Garden Flyover Video</h2>
        <p class="text-xl leading-relaxed lg:text-2xl text-secondary-200">
          Get an inside look at Weed Garden's comprehensive ERP solution. Watch this video to learn how Weed Garden can help streamline your cannabis grow operation.
        </p>
      </div>

      <div class="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
        <!-- Video Embed -->
        <div class="relative w-full pb-[56.25%] aspect-w-16 aspect-h-9">
          <iframe
              class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube-nocookie.com/embed/BkcU4lhMti4?si=qk5OTbMrg53ILAO9"
              title="Weed Garden Flyover Video"
              frameborder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
          ></iframe>
        </div>

        <!-- Text Content -->
        <div class="flex flex-col justify-center text-left">
          <h3 class="mb-4 text-4xl font-extrabold text-light-100">
            Streamline Your Cannabis Operations
          </h3>
          <p class="mb-6 text-lg leading-relaxed lg:text-xl text-secondary-200">
            Our application simplifies cannabis cultivation, helping you track inventory, stay compliant with regulations, and optimize costs. See how Weed Garden can empower your operations.
          </p>
          <p class="text-lg leading-relaxed lg:text-xl text-secondary-200">
            Whether you're a small grower or a commercial operator, our ERP solution adapts to your needs and scales with your growth.
          </p>
        </div>
      </div>

      <!-- Call to Action Section -->
      <div class="mt-16 text-center">
        <h3 class="mb-6 text-3xl font-extrabold text-primary-50">Interested in Learning More?</h3>
        <p class="mb-8 text-lg lg:text-xl text-secondary-200">
          Explore more about our features, stay updated on new developments, and join our community of growers who are transforming the cannabis industry.
        </p>
        <div class="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
          <a href="https://ghost.weed-garden.com" target="_blank" class="inline-block px-5 py-3 bg-primary-100 text-dark-900 font-semibold rounded-lg hover:bg-primary-200 transition-colors">
            <span>Read Our Blog</span>
            <client-only>
              <i class="fas fa-blog ml-2"></i>
            </client-only>
          </a>
          <a href="https://www.facebook.com/WeedGardenERP" target="_blank" class="inline-block px-5 py-3 bg-blue-600 text-light-50 font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            <span>Join Our Facebook Community</span>
            <client-only>
              <i class="fab fa-facebook ml-2"></i>
            </client-only>
          </a>
          <a href="/features" class="inline-block px-5 py-3 bg-dark-900 text-light-50 font-semibold rounded-lg hover:bg-dark-700 transition-colors">
            <span>Explore More Features</span>
            <client-only>
              <i class="fas fa-arrow-right ml-2"></i>
            </client-only>
          </a>
        </div>
      </div>

      <div class="mt-20 text-center border-t border-gray-800 pt-16">
        <h3 class="mb-8 text-3xl font-black text-primary-50">What Our Beta Users Are Saying</h3>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div class="p-6 bg-dark-700 rounded-lg shadow-md">
            <p class="text-xl text-secondary-200">"Weed Garden has transformed how I manage my strawberry growing operations. It's user-friendly, and I love being part of shaping its future."</p>
            <p class="mt-4 font-semibold text-primary-50">- Sarah M.</p>
          </div>
          <div class="p-6 bg-dark-700 rounded-lg shadow-md">
            <p class="text-xl text-secondary-200">"I appreciate how adaptable the solution is. It feels great knowing my feedback directly impacts the features they develop."</p>
            <p class="mt-4 font-semibold text-primary-50">- John R.</p>
          </div>
          <div class="p-6 bg-dark-700 rounded-lg shadow-md">
            <p class="text-xl text-secondary-200">"The community support has been fantastic, and it's exciting to contribute to a product that benefits growers like me."</p>
            <p class="mt-4 font-semibold text-primary-50">- Emily K.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useHead } from '@unhead/vue';

useHead({
  title: 'Weed Garden Flyover Video | Streamline Your Cannabis Operations',
  meta: [
    { name: 'description', content: 'Watch the Weed Garden Flyover Video to see how our ERP solution can help streamline cannabis cultivation, track inventory, ensure compliance, and optimize costs.' },
    { name: 'keywords', content: 'Weed Garden video, cannabis ERP solution, cannabis cultivation, inventory tracking, cannabis compliance, ERP software' },
    { property: 'og:title', content: 'Weed Garden Flyover Video - Streamline Your Cannabis Operations' },
    { property: 'og:description', content: 'Get an inside look at Weed Garden\'s ERP solution and learn how it can streamline your cannabis cultivation operations.' },
    { property: 'og:image', content: 'https://weed-garden.com/img/flyover-video-thumbnail.png' },
    { property: 'og:type', content: 'video.other' },
    { property: 'og:url', content: 'https://weed-garden.com/video-tour' },
    { name: 'twitter:title', content: 'Weed Garden Flyover Video | Cannabis ERP Solution' },
    { name: 'twitter:description', content: 'Watch the Weed Garden Flyover Video and learn how our ERP can empower your cannabis grow operation.' },
    { name: 'twitter:image', content: 'https://weed-garden.com/img/flyover-video-thumbnail.png' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Weed Garden Flyover Video",
        "description": "Watch the Weed Garden Flyover Video to see how our ERP solution can help streamline cannabis cultivation, track inventory, ensure compliance, and optimize costs.",
        "thumbnailUrl": "https://weed-garden.com/img/flyover-video-thumbnail.png",
        "uploadDate": "2024-10-12T00:00:00Z",
        "publisher": {
          "@type": "Organization",
          "name": "Weed Garden Inc.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://weed-garden.com/site-logo.webp"
          }
        },
        "contentUrl": "https://weed-garden.com/video-tour",
        "embedUrl": "https://www.youtube-nocookie.com/embed/BkcU4lhMti4?si=qk5OTbMrg53ILAO9"
      })
    }
  ]
});
</script>
