<template>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="mb-12 text-center">
        <h2 class="mb-6 text-5xl font-black text-primary-50">Weed Garden Flyover Video</h2>
        <p class="text-xl leading-relaxed lg:text-2xl text-secondary-200">
          Get an inside look at Weed Garden's comprehensive ERP solution. Watch this video to learn how Weed Garden can help streamline your cannabis grow operation.
        </p>
      </div>

      <!-- Video Section -->
      <div class="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
        <!-- Static Image with Play Button -->
        <div class="relative w-full pb-[56.25%] aspect-w-16 aspect-h-9">
          <img
              v-show="!isVideoLoaded"
              @click="loadVideo"
              class="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg cursor-pointer z-10"
              src="/img/flyover-image.png"
              alt="Flyover Video Thumbnail"
          />
          <!-- Show Video on Click -->
          <iframe
              v-show="isVideoLoaded"
              class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              :src="iframeSrc"
              title="Weed Garden Flyover Video"
              frameborder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
          ></iframe>
          <!-- Play Button Icon -->
          <div v-if="!isVideoLoaded" class="absolute inset-0 flex justify-center items-center">
            <span class="text-6xl text-light-50"><i class="fas fa-play"></i></span>
          </div>
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
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isVideoLoaded = ref(false);
const baseIframeSrc = 'https://www.youtube-nocookie.com/embed/BkcU4lhMti4?si=qk5OTbMrg53ILAO9';

const iframeSrc = ref(baseIframeSrc);

const loadVideo = () => {
  iframeSrc.value = `${baseIframeSrc}&autoplay=1`;
  isVideoLoaded.value = true;
};

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
