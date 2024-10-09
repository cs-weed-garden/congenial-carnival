<template>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <!-- Left: Text Content -->
        <div class="flex flex-col justify-center text-center lg:text-left">
          <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-light-50">
            <span class="font-black text-7xl lg:text-8xl text-primary-50">Weed</span>
            <span class="text-6xl text-light-50">Garden</span><br>
            Cannabis Grow Tracking and ERP Solution
          </h1>
          <p class="mt-6 text-lg leading-relaxed lg:text-xl text-secondary-400">
            Weed Garden empowers you to manage every aspect of your cannabis grow operation, from seed-to-sale tracking, inventory management, and regulatory compliance to analytics and cost tracking. Get started today to streamline your cultivation business.
          </p>
          <div class="mt-8">
            <button @click="scrollToCTA" class="w-full px-8 py-4 text-xl font-bold transition-transform rounded-lg shadow-lg bg-tertiary-200 hover:bg-tertiary-800 text-dark focus:outline-none focus:ring-4 focus:ring-tertiary-400 lg:text-2xl hover:text-light hover:shadow-2xl">
              Get Started with Cannabis ERP Software
            </button>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="flex items-center justify-center">
          <img
              src="/img/happy-grow-medium.webp"
              srcset="/img/happy-grow-small.webp 400w, /img/happy-grow-medium.webp 600w, /img/happy-grow-large.webp 800w"
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 600px, 800px"
              alt="Cannabis Grow Tracking ERP Software by Weed Garden"
              class="rounded-lg shadow-lg"
              loading="lazy" decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h2 class="mb-6 text-5xl font-black text-primary-50">Welcome to Weed Garden</h2>
        <p class="text-xl leading-relaxed lg:text-2xl text-secondary-200">
          Get an inside look at Weed Garden, your comprehensive ERP solution for cannabis cultivation. This flyover video will guide you through the features that help streamline your operations.
        </p>
      </div>

      <div class="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
        <!-- Video Embed -->
        <div class="relative w-full pb-[56.25%]">
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
            Our application is designed to make cannabis cultivation easier, more efficient, and fully compliant with regulations. Check out the flyover video to see how Weed Garden can help you manage your grow operations effectively.
          </p>
          <p class="text-lg leading-relaxed lg:text-xl text-secondary-200">
            From seed to sale, Weed Garden provides powerful tools for inventory, compliance, reporting, and more. Whether you're a small grower or a commercial operator, Weed Garden adapts to your needs.
          </p>
        </div>
      </div>
    </div>
  </section>
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
              loading="lazy" decoding="async"
          />
        </div>

        <!-- Right: Text Content -->
        <div class="flex flex-col justify-center lg:text-left">
          <h2 class="mb-8 text-4xl font-extrabold text-light-50">
            <span class="text-6xl font-black text-primary-50">Our Mission</span>: Empowering Cannabis Growers
          </h2>
          <p class="mb-6 text-lg leading-relaxed lg:text-xl text-secondary-200">
            At Weed-Garden, we believe in growing together. Our mission is to be a trusted partner for cannabis cultivators, providing a powerful yet intuitive management solution that simplifies operations, boosts productivity, and ensures compliance with local regulations.
          </p>
          <p class="text-lg leading-relaxed lg:text-xl text-secondary-200">
            We are committed to supporting your journey, helping you cultivate excellence and grow your business confidently.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto text-left max-w-7xl sm:px-6 lg:px-8">
      <h2 class="mb-8 text-4xl font-extrabold text-light-100">
        <span class="text-6xl font-black text-primary-50">About Weed Garden</span>: Leading ERP Software for Cannabis
      </h2>
      <p class="text-lg leading-relaxed lg:text-xl text-secondary-200">
        Weed-Garden is the foremost grow tracking and enterprise resource planner for licensed dispensaries in Minnesota. We aim to partner with growers to build a better application that fits operations of all sizes.
      </p>
    </div>
  </section>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 class="mb-12 text-5xl font-extrabold text-center text-light-100">
        <span class="text-6xl font-black text-primary-50">Key</span> Features of Our Cannabis ERP Software
      </h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

        <!-- Feature 1: Seed-to-Sale Tracking -->
        <div class="flex items-center p-6 transition-transform rounded-lg shadow-lg bg-dark-700 hover:scale-105">
          <i class="mr-6 text-5xl fas fa-seedling text-primary-50" aria-hidden="true"></i>
          <div>
            <h3 class="mb-2 text-2xl font-bold text-light-50">
              <span class="text-primary-50">Seed-to-Sale</span> Cannabis Tracking
            </h3>
            <p class="leading-relaxed text-secondary-200">
              Our advanced seed-to-sale cannabis tracking system ensures total visibility into every stage of your grow operation, enabling compliance and quality control at all times.
            </p>
          </div>
        </div>

        <!-- Feature 2: Inventory Management -->
        <div class="flex items-center p-6 transition-transform rounded-lg shadow-lg bg-dark-700 hover:scale-105">
          <i class="mr-6 text-5xl fas fa-warehouse text-primary-50" aria-hidden="true"></i>
          <div>
            <h3 class="mb-2 text-2xl font-bold text-light-50">
              <span class="text-primary-50">Real-Time</span> Cannabis Inventory Management
            </h3>
            <p class="leading-relaxed text-secondary-200">
              Efficiently manage your cannabis inventory with our real-time inventory tracking system, complete with live updates, low stock alerts, and analytics to optimize supply management.
            </p>
          </div>
        </div>

        <!-- Feature 3: Cannabis Compliance Tools -->
        <div class="flex items-center p-6 transition-transform rounded-lg shadow-lg bg-dark-700 hover:scale-105">
          <i class="mr-6 text-5xl fas fa-check-circle text-primary-50" aria-hidden="true"></i>
          <div>
            <h3 class="mb-2 text-2xl font-bold text-light-50">
              <span class="text-primary-50">Regulatory</span> Cannabis Compliance
            </h3>
            <p class="leading-relaxed text-secondary-200">
              Stay compliant with all local, state, and federal cannabis regulations. Our cannabis ERP software is designed to handle the complexities of cannabis compliance effortlessly.
            </p>
          </div>
        </div>

        <!-- Feature 4: Automated Label Generation -->
        <div class="flex items-center p-6 transition-transform rounded-lg shadow-lg bg-dark-700 hover:scale-105">
          <i class="mr-6 text-5xl fas fa-tag text-primary-50" aria-hidden="true"></i>
          <div>
            <h3 class="mb-2 text-2xl font-bold text-light-50">
              <span class="text-primary-50">Automated</span> Label Generation for Cannabis Products
            </h3>
            <p class="leading-relaxed text-secondary-200">
              Generate compliant labels with ease. Our cannabis ERP software automates label generation, ensuring your products meet all packaging and labeling regulations.
            </p>
          </div>
        </div>

        <!-- Feature 5: Cost Tracking for Cannabis Operations -->
        <div class="flex items-center p-6 transition-transform rounded-lg shadow-lg bg-dark-700 hover:scale-105">
          <i class="mr-6 text-5xl fas fa-dollar-sign text-primary-50" aria-hidden="true"></i>
          <div>
            <h3 class="mb-2 text-2xl font-bold text-light-50">
              <span class="text-primary-50">Comprehensive</span> Cannabis Cost Tracking
            </h3>
            <p class="leading-relaxed text-secondary-200">
              Track costs associated with each cannabis lot in real-time to optimize your budget. Our ERP system provides detailed cost breakdowns to increase profitability and efficiency.
            </p>
          </div>
        </div>

        <!-- Feature 6: Cannabis Reporting & Analytics -->
        <div class="flex items-center p-6 transition-transform rounded-lg shadow-lg bg-dark-700 hover:scale-105">
          <i class="mr-6 text-5xl fas fa-chart-pie text-primary-50" aria-hidden="true"></i>
          <div>
            <h3 class="mb-2 text-2xl font-bold text-light-50">
              <span class="text-primary-50">In-Depth</span> Cannabis Reporting & Analytics
            </h3>
            <p class="leading-relaxed text-secondary-200">
              Gain actionable insights into your cannabis operation with our powerful reporting and analytics tools. Customize reports to track yields, labor costs, and more.
            </p>
          </div>
        </div>

        <!-- Feature 7: Document Progress with Cannabis Growth Images -->
        <div class="flex items-center p-6 transition-transform rounded-lg shadow-lg bg-dark-700 hover:scale-105">
          <i class="mr-6 text-5xl fas fa-camera text-primary-50" aria-hidden="true"></i>
          <div>
            <h3 class="mb-2 text-2xl font-bold text-light-50">
              <span class="text-primary-50">Progress</span> Image Tracking for Cannabis Growth
            </h3>
            <p class="leading-relaxed text-secondary-200">
              Easily upload and manage images at every stage of your cannabis growth process. Document progress from seed to harvest to ensure optimal plant development.
            </p>
          </div>
        </div>

        <!-- Feature 8: Cannabis Source Management -->
        <div class="flex items-center p-6 transition-transform rounded-lg shadow-lg bg-dark-700 hover:scale-105">
          <i class="mr-6 text-5xl fas fa-database text-primary-50" aria-hidden="true"></i>
          <div>
            <h3 class="mb-2 text-2xl font-bold text-light-50">
              <span class="text-primary-50">Cannabis</span> Source Management
            </h3>
            <p class="leading-relaxed text-secondary-200">
              Keep track of your cannabis plant genetics and sources for quality assurance and compliance. Our ERP system provides easy access to detailed source information.
            </p>
          </div>
        </div>

        <!-- Feature 9: Notes & Timeline Management for Cannabis Grows -->
        <div class="flex items-center p-6 transition-transform rounded-lg shadow-lg bg-dark-700 hover:scale-105">
          <i class="mr-6 text-5xl fas fa-sticky-note text-primary-50" aria-hidden="true"></i>
          <div>
            <h3 class="mb-2 text-2xl font-bold text-light-50">
              <span class="text-primary-50">Notes</span> & Timeline Tracking for Cannabis Grows
            </h3>
            <p class="leading-relaxed text-secondary-200">
              Document notes, milestones, and track the entire timeline of your cannabis grow operation with our detailed timeline and note management features.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <!-- Left: Image -->
        <div class="flex items-center justify-center">
          <img
              src="/img/open-source-medium.webp"
              srcset="/img/open-source-small.webp 400w, /img/open-source-medium.webp 600w, /img/open-source-large.webp 800w"
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 600px, 800px"
              alt="Illustration of transparency in development"
              class="rounded-lg shadow-lg"
              loading="lazy" decoding="async">
        </div>

        <!-- Right: Text Content -->
        <div class="flex flex-col justify-center text-left">
          <h2 class="mb-8 text-4xl font-extrabold text-light-100">
            <span class="text-6xl font-black text-primary-50">Why</span> Transparency in Cannabis ERP Software?
          </h2>
          <p class="mb-8 text-lg leading-relaxed text-secondary-200">
            At Weed Garden, we believe that transparency builds trust. That’s why we’ve made our source code available for public inspection. While the code isn’t fully open-source, we are committed to sharing it openly so users can see how the software operates and ensures compliance with local regulations.
          </p>
          <p class="text-lg leading-relaxed text-secondary-200">
            This approach allows us to maintain control over the direction of the project, while still fostering trust and collaboration with our community. By making the code accessible, we invite feedback and scrutiny, ensuring the highest standards of security and reliability.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <!-- Left: Text Content -->
        <div class="flex flex-col justify-center text-left">
          <h2 class="mb-8 text-4xl font-extrabold text-light-100">
            <span class="text-6xl font-black text-primary-50">Privacy</span> Matters in Cannabis Cultivation Software
          </h2>
          <p class="mb-8 text-lg leading-relaxed text-secondary-200">
            At Weed Garden, safeguarding your data is paramount. Your sensitive information—including costs, images, source details, notes, and growth timelines—is securely stored and never shared with third parties. We ensure your proprietary cultivation methods and business data remain confidential.
          </p>
        </div>

        <!-- Right: Image -->
        <div class="flex items-center justify-center">
          <img
              src="/img/privacy.webp"
              alt="Symbol of data security and privacy"
              class="rounded-lg shadow-lg"
              loading="lazy">
        </div>
      </div>
    </div>
  </section>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <!-- Left: Text Content -->
        <div class="flex flex-col justify-center text-left">
          <h2 class="mb-8 text-4xl font-extrabold text-light-100">
            <span class="text-6xl font-black text-primary-50">Advanced</span> Location and Crop Management for Cannabis Growers
          </h2>
          <p class="text-lg leading-relaxed lg:text-xl text-secondary-200">
            Weed Garden empowers you to manage multiple cultivation locations and track lots or individual plants with precision. Our platform allows you to:
          </p>
          <ul class="mt-6 space-y-4">
            <li class="flex items-start">
              <i class="mt-1 text-2xl fas fa-check text-primary-50"></i>
              <p class="ml-3 text-lg leading-relaxed text-secondary-200">Generate compliant labels for products and plants.</p>
            </li>
            <li class="flex items-start">
              <i class="mt-1 text-2xl fas fa-check text-primary-50"></i>
              <p class="ml-3 text-lg leading-relaxed text-secondary-200">Track costs associated with each lot for effective budgeting.</p>
            </li>
            <li class="flex items-start">
              <i class="mt-1 text-2xl fas fa-check text-primary-50"></i>
              <p class="ml-3 text-lg leading-relaxed text-secondary-200">Upload progress images to monitor growth stages visually.</p>
            </li>
            <li class="flex items-start">
              <i class="mt-1 text-2xl fas fa-check text-primary-50"></i>
              <p class="ml-3 text-lg leading-relaxed text-secondary-200">Manage plant sources and genetics for quality control.</p>
            </li>
            <li class="flex items-start">
              <i class="mt-1 text-2xl fas fa-check text-primary-50"></i>
              <p class="ml-3 text-lg leading-relaxed text-secondary-200">Add notes and maintain a comprehensive timeline for each grow.</p>
            </li>
            <li class="flex items-start">
              <i class="mt-1 text-2xl fas fa-check text-primary-50"></i>
              <p class="ml-3 text-lg leading-relaxed text-secondary-200">Utilize robust reporting tools for insights and compliance.</p>
            </li>
          </ul>
        </div>

        <!-- Right: Image -->
        <div class="flex items-center justify-center">
          <img
              src="/img/location-management-medium.webp"
              srcset="/img/location-management-small.webp 400w, /img/location-management-medium.webp 600w, /img/location-management-large.webp 800w"
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 600px, 800px"
              alt="Illustration of advanced location and crop management"
              class="rounded-lg shadow-lg"
              loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <!-- Left: Image -->
        <div class="flex items-center justify-center">
          <img
              src="/img/reporting-medium.webp"
              srcset="/img/reporting-small.webp 400w, /img/reporting-medium.webp 600w, /img/reporting-large.webp 800w"
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 600px, 800px"
              alt="Illustration of in-depth reporting and analytics"
              class="rounded-lg shadow-lg"
              loading="lazy" decoding="async">
        </div>

        <!-- Right: Text Content -->
        <div class="flex flex-col justify-center text-left">
          <h2 class="mb-8 text-4xl font-extrabold text-light-100">
            <span class="text-6xl font-black text-primary-50">In-Depth</span> Reporting & Analytics
          </h2>
          <p class="text-lg leading-relaxed lg:text-xl text-secondary-200">
            Make data-driven decisions with Weed Garden's comprehensive reporting and analytics tools. Our platform provides:
          </p>
          <ul class="mt-6 space-y-4">
            <li class="flex items-start">
              <i class="mt-1 text-2xl fas fa-chart-line text-primary-50"></i>
              <p class="ml-3 text-lg leading-relaxed text-secondary-200">Customizable reports on yields, costs, and productivity.</p>
            </li>
            <li class="flex items-start">
              <i class="mt-1 text-2xl fas fa-tachometer-alt text-primary-50"></i>
              <p class="ml-3 text-lg leading-relaxed text-secondary-200">Real-time analytics to monitor plant health and growth.</p>
            </li>
            <li class="flex items-start">
              <i class="mt-1 text-2xl fas fa-file-export text-primary-50"></i>
              <p class="ml-3 text-lg leading-relaxed text-secondary-200">Exportable data for compliance and auditing purposes.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="px-4 mx-auto text-left max-w-7xl sm:px-6 lg:px-8">
      <h2 class="mb-8 text-4xl font-extrabold text-light-100">
        <span class="font-black text-primary-50">Ready</span> to Transform Your Cannabis Business?
      </h2>
      <p class="mb-8 text-lg lg:text-xl text-secondary-200">
        Join Weed Garden today and leverage advanced features like cost tracking, label generation, and detailed reporting to elevate your operations.
      </p>
      <div class="mt-8">
        <div id="signupForm" ref="signupForm" class="relative w-full cta" style="height: 5rem;"></div>
        <p class="mt-6 text-lg leading-relaxed text-secondary-200">
          By signing up, you’ll be able to follow our journey and contribute directly to shaping the app. We respect your privacy and handle your data with care. Review our
          <a href="/privacy-policy" class="underline text-primary-50 hover:text-primary-100">Privacy Policy</a>.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    scrollToCTA() {
      const container = document.querySelector('.cta');
      if (container) {
        container.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
};
</script>

<style>
/* Button styles */
.btn-primary {
  @apply bg-tertiary hover:bg-tertiary-600 text-dark-800 px-6 py-3 rounded-lg font-medium inline-block text-xl;
}

/* General hover effect for navigation */
nav a:hover {
  @apply text-tertiary;
}

/* Scroll-to-top button */
button[aria-label="Scroll to Top"] {
  @apply fixed bottom-6 right-6 bg-tertiary text-light-50 p-3 rounded-full shadow-lg;
}

</style>
