<script setup>

useHead({
  title: 'Weed Garden - Empowering Personal and Licensed Cannabis Growers | Comprehensive ERP Solution',
  meta: [
    { name: 'description', content: 'Streamline cannabis cultivation for personal use (where legally allowed) and licensed businesses. Manage inventory, track costs, generate labels, and more.' },
    { name: 'keywords', content: 'personal cannabis ERP, licensed cannabis software, seed-to-sale tracking, compliance, inventory management, label generation, real-time data' },
    { name: 'referrer', content: 'no-referrer' },
    { property: 'og:site_name', content: 'Weed Garden' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:title', content: 'Weed Garden - Comprehensive ERP for Cannabis Growers' },
    { property: 'og:description', content: 'Cannabis ERP for personal and licensed growers to manage inventory, track compliance, and generate reports.' },
    { property: 'og:url', content: 'https://weed-garden.com' },
    { property: 'og:image', content: 'https://weed-garden.com/img/happy-grow.png' },
    { property: 'og:image:alt', content: 'Weed Garden ERP dashboard preview' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@GrowWithParker' },
    { name: 'twitter:title', content: 'Weed Garden - Cannabis ERP for Growers' },
    { name: 'twitter:description', content: 'Streamline your cannabis operations for personal or licensed use. Manage compliance, inventory, and growth history.' },
    { name: 'twitter:image', content: 'https://weed-garden.com/img/happy-grow.png' },
    { name: 'twitter:image:alt', content: 'Weed Garden ERP dashboard preview' },
    { name: 'twitter:creator', content: '@GrowWithParker' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Weed Garden - Cannabis ERP Software",
        "description": "Manage every aspect of your cannabis grow operation, from personal grows to licensed commercial cultivation with seed-to-sale tracking, inventory, and compliance.",
        "publisher": {
          "@type": "Organization",
          "name": "Weed Garden Inc.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://weed-garden.com/site-logo.webp"
          }
        }
      })
    }
  ]
});
</script>


<template>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
      <div class="absolute inset-0 bg-opacity-10 bg-cannabis-pattern pointer-events-none"></div>
      <div class="container mx-auto flex flex-col text-center items-center relative z-10">
        <!-- Center-aligned content -->
        <h1 class="text-4xl font-extrabold leading-tight">
          <span class="font-black text-8xl text-primary-50 mb-2 drop-shadow-lg">Join Our</span><br />
          <span class="text-6xl mb-2 text-light-50">Cannabis Growers Community</span>
        </h1>
        <h2 class="mt-6 text-lg lg:text-xl text-secondary-200 leading-relaxed max-w-3xl">
          Help us build a trusted online space for cannabis cultivators. Follow us on Facebook, Twitter, or join our Discord server to stay connected and boost our visibility. Your support helps us grow our influence and authority!
        </h2>
        <!-- Centered buttons -->
        <div class="flex mt-7 space-x-4 justify-center">
          <a href="https://www.facebook.com/WeedGardenERP" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center px-6 py-4 bg-blue-600 text-light-50 font-semibold rounded-lg hover:bg-blue-700 transition-colors text-xl">
            <font-awesome class="text-2xl mr-3" :icon="['fab', 'square-facebook']" />
            <span>Follow Us on Facebook</span>
          </a>
          <a href="https://discord.gg/sXvNqTH3" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center px-6 py-4 bg-indigo-600 text-light-50 font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-xl">
            <font-awesome class="text-2xl mr-3" :icon="['fab', 'discord']" />
            <span>Join Our Discord</span>
          </a>
        </div>
        <p class="mt-3 text-secondary-200 text-lg max-w-3xl">
          By joining, you’ll gain access to exclusive content and help us establish authority in the cannabis industry.
        </p>
      </div>
    </section>


    <section class="relative py-40 lg:py-48 bg-gradient-to-all-sides text-light-50">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 class="text-4xl font-extrabold leading-tight">
          <span class="font-black text-8xl text-primary-50 mb-2">Weed Garden</span>
          <span class="text-6xl mb-2">Comprehensive Cannabis ERP Solution</span>
        </h1>
        <h2 class="mt-8 text-lg lg:text-xl text-secondary-200 leading-relaxed">
          Weed Garden offers a comprehensive cannabis ERP solution for both personal growers and licensed cannabis businesses. Join us as we develop powerful tools to help cultivators manage their grow operations from seed to sale. Stay updated to help shape the future of cannabis cultivation technology!
        </h2>
        <div class="flex flex-col lg:flex-row justify-start mt-9 space-y-4 lg:space-y-0 lg:space-x-4">
          <a href="https://www.facebook.com/WeedGardenERP" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-3 bg-blue-600 text-light-50 font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            <span>Follow Us on Facebook</span>
            <font-awesome class="text-2xl ml-3" :icon="['fab', 'square-facebook']" />
          </a>
          <a href="https://ghost.weed-garden.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-3 bg-primary-100 text-dark-900 font-semibold rounded-lg hover:bg-primary-200 transition-colors">
            <span>Subscribe to Our Blog</span>
            <font-awesome class="text-2xl ml-3" icon="blog" />
          </a>
        </div>
      </div>
      <div class="aspect-w-16 aspect-h-9">
        <img class="w-full h-auto object-contain shadow-lg transition-transform transform scale-150 hover:scale-102 duration-300 ease-in-out"
             src="/img/macbook-air-m2-still.webp" alt="Weed Garden Cannabis ERP Solution Interface Overview on MacBook Air" />
      </div>
    </div>
  </section>



<section class="relative py-20 lg:py-28 bg-gradient-to-b from-dark-900 via-dark-700 to-dark-800 text-light-50 border-t border-gray-700">
  <div class="px-4 mx-auto max-w-7xl">
    <div class="flex flex-col justify-start lg:text-left">
      <h2 class="mb-6 text-4xl lg:text-5xl font-extrabold">
        <span class="text-6xl font-black text-primary-50">Our Mission</span>: Supporting Cannabis Growers
      </h2>
      <p class="mb-6 text-lg leading-relaxed lg:text-xl text-secondary-200">
        Weed Garden is committed to empowering personal growers (where legally allowed) and licensed businesses. Our platform provides real-time monitoring, regulatory compliance, and simplified operations to support your grow process.
      </p>
      <ul class="list-disc list-inside mb-6 text-lg lg:text-xl text-secondary-200">
        <li>Real-time monitoring for small and large-scale operations</li>
        <li>Customizable dashboards for data insights</li>
        <li>Automated compliance and reporting for licensed businesses</li>
        <li>Growth tracking from planting to harvest</li>
        <li>Inventory management with state reporting integration</li>
      </ul>
      <p class="mb-8 text-lg leading-relaxed lg:text-xl text-secondary-200">
        Whether you’re cultivating at home or running a licensed operation, our tools help you reduce manual tasks and stay compliant.
      </p>
      <div class="flex mt-4">
        <a href="/about-us" class="inline-block px-4 py-2 bg-primary-100 text-dark-900 font-semibold rounded-lg hover:bg-primary-200 transition-colors">
          <font-awesome class="text-2xl mr-3" icon="circle-info" />
          <span>Learn more about our mission</span>
        </a>
      </div>
    </div>
  </div>
</section>
  
  <section class="relative py-20 lg:py-28 bg-dark-900 text-light-50">
    <div class="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-12">
        <h2 class="mb-4 text-5xl tracking-tight font-extrabold">
          <span class="text-primary-50">Flexible Pricing:</span><br/>
          <span class="text-light-50">Pay What You Want or Start for Free</span>
        </h2>
        <p class="mb-8 font-light text-secondary-200 sm:text-xl">
          Choose the plan that suits your needs. Get started for free, contribute what you think it's worth, or explore our open-source code on GitHub to customize or extend the platform yourself.
        </p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">

        <!-- Free Forever Card -->
        <div class="flex flex-col p-8 bg-dark-700 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 class="mb-4 text-2xl font-semibold text-primary-50">Free Forever: Basic Features for Cannabis Growers</h3>
          <p class="mb-6 font-light text-secondary-200 text-xl">Perfect for getting started.</p>
          <ul class="mb-6 space-y-3 text-xl text-secondary-200 text-left">
            <li class="flex items-center">
              <font-awesome class="text-green-500 mr-2" icon="circle-check" />
              Access to all basic features
            </li>
            <li class="flex items-center">
              <font-awesome class="text-green-500 mr-2" icon="circle-check" />
              Real-time data monitoring
            </li>
            <li class="flex items-center">
              <font-awesome class="text-green-500 mr-2" icon="circle-check" />
              Community support
            </li>
          </ul>
          <a href="https://ghost.weed-garden.com" target="_blank" class="inline-block px-5 py-3 bg-primary-100 text-dark-900 font-semibold rounded-lg hover:bg-primary-200 transition-colors">
            <span>Sign Up for Early Access</span>
            <font-awesome class="ml-2" icon="arrow-right" />
          </a>
        </div>

        <!-- Pay What You Want Card -->
        <div class="flex flex-col p-8 bg-primary-100 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 class="mb-4 text-2xl font-semibold text-dark-900">Pay What You Want: Enhanced Features & Priority Support</h3>
          <p class="mb-6 font-light text-dark-900 text-xl">Support us and unlock more features.</p>
          <ul class="mb-6 space-y-3 text-xl text-dark-900 text-left">
            <li class="flex items-center">
              <font-awesome class="text-green-500 mr-2" icon="circle-check" />
              Everything in the Free Tier
            </li>
            <li class="flex items-center">
              <font-awesome class="text-green-500 mr-2" icon="circle-check" />
              Priority feature requests
            </li>
            <li class="flex items-center">
              <font-awesome class="text-green-500 mr-2" icon="circle-check" />
              Direct support
            </li>
          </ul>
          <a href="https://www.facebook.com/WeedGardenERP" target="_blank" class="inline-block px-5 py-3 bg-dark-900 text-light-50 font-semibold rounded-lg hover:bg-dark-700 transition-colors">
            <span>Join Our Facebook Community</span>
            <font-awesome class="ml-2" icon="arrow-right" />
          </a>
        </div>

        <!-- Custom Support Card -->
        <div class="flex flex-col p-8 bg-dark-700 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 class="mb-4 text-2xl font-semibold text-primary-50">Custom Support: Tailored Solutions for Larger Operations</h3>
          <p class="mb-6 font-light text-secondary-200 text-xl">Need more? Let’s talk about custom solutions.</p>
          <ul class="mb-6 space-y-3 text-xl text-secondary-200 text-left">
            <li class="flex items-center">
              <font-awesome class="text-green-500 mr-2" icon="circle-check" />
              Tailored solutions for your needs
            </li>
            <li class="flex items-center">
              <font-awesome class="text-green-500 mr-2" icon="circle-check" />
              Custom integrations and features
            </li>
            <li class="flex items-center">
              <font-awesome class="text-green-500 mr-2" icon="circle-check" />
              Dedicated support
            </li>
          </ul>
          <a href="https://ghost.weed-garden.com" target="_blank" class="inline-block px-5 py-3 bg-primary-100 text-dark-900 font-semibold rounded-lg hover:bg-primary-200 transition-colors">
            <span>Watch Our Product Preview</span>
            <font-awesome class="ml-2" icon="arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </section>



<section class="relative py-40 lg:py-48 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h2 class="mb-12 text-5xl font-extrabold text-center">
      <span class="text-6xl font-black text-primary-50">Key</span> Features of Our Cannabis ERP Software
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

      <!-- Seed-to-Sale Tracking -->
      <div class="p-6 bg-dark-700 dark:bg-gray-800 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div class="text-5xl mb-4">
          <font-awesome class="text-primary-50" icon="seedling" />
        </div>
        <h3 class="text-2xl font-bold text-light-50">Seed-to-Sale Tracking</h3>
        <p class="mt-4 text-lg text-secondary-200">Track every stage of growth, ensuring complete visibility from planting to final sale.</p>
      </div>

      <!-- Inventory Management -->
      <div class="p-6 bg-dark-700 dark:bg-gray-800 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div class="text-5xl mb-4">
          <font-awesome class="text-primary-50" icon="warehouse" />
        </div>
        <h3 class="text-2xl font-bold text-light-50">Inventory Management</h3>
        <p class="mt-4 text-lg text-secondary-200">Gain real-time updates and control over your inventory, optimizing stock levels and reporting.</p>
      </div>

      <!-- Regulatory Compliance -->
      <div class="p-6 bg-dark-700 dark:bg-gray-800 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div class="text-5xl mb-4">
          <font-awesome class="text-primary-50" icon="gavel" />
        </div>
        <h3 class="text-2xl font-bold text-light-50">Regulatory Compliance</h3>
        <p class="mt-4 text-lg text-secondary-200">Our platform is designed to meet local and federal regulations. METRC integration is a future goal in our development roadmap.</p>
      </div>
      
    </div>
    <p class="mx-auto mt-12 text-lg lg:text-xl text-secondary-200 text-center">
      Weed Garden offers additional features like cost tracking, label generation, and in-depth reporting.
    </p>
    <div class="flex justify-center mt-4">
      <NuxtLink to="/features" class="inline-flex items-center px-4 py-2 bg-primary-100 text-dark-900 font-semibold rounded-lg hover:bg-primary-200 transition-colors">
        <span>Learn more about all the features</span>
        <client-only>
          <font-awesome class="ml-2" icon="list" /> 
        </client-only>
      </NuxtLink>
    </div>
  </div>
</section>


  <section class="relative py-40 lg:py-48 bg-gradient-to-b from-dark-800 via-dark-600 to-dark-700 text-light-50 border-t border-gray-800">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 class="mb-8 text-4xl lg:text-5xl font-extrabold">
        <span class="font-black text-primary-50">Ready</span> To Learn How You Can Transform Your Cannabis Business?
      </h2>
      <h3 class="mb-8 text-lg lg:text-xl text-secondary-200">
        Follow our journey of building Weed Garden—a cutting-edge cannabis ERP solution. Stay updated with the latest news, exclusive features, and industry insights.
      </h3>
      <div class="flex flex-col lg:flex-row justify-start space-y-4 lg:space-y-0 lg:space-x-4">
        <a href="https://ghost.weed-garden.com" target="_blank" class="inline-block px-5 py-3 bg-primary-100 text-dark-900 font-semibold rounded-lg hover:bg-primary-200 transition-colors">
          <span>Read Our Blog</span>
          <font-awesome class="ml-3" icon="blog" />
        </a>
        <a href="https://www.facebook.com/WeedGardenERP" target="_blank" class="inline-block px-5 py-3 bg-blue-600 text-light-50 font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          <span>Join Our Facebook Community</span>
          <font-awesome class="ml-3" :icon="['fab', 'square-facebook']" />
        </a>
      </div>
      <h3 class="mt-6 text-lg leading-relaxed text-secondary-200">
        Discover how we’re shaping the future of cannabis operations with innovative grow management tools and cannabis ERP solutions. Stay updated with every milestone as we develop new features, tackle challenges, and share industry news.
        Check out our blog at <a href="https://ghost.weed-garden.com" target="_blank" class="underline text-primary-50 hover:text-primary-100">
        <span>ghost.weed-garden.com</span>
        <client-only>
          <i class="fas fa-external-link-alt ml-1"></i>
        </client-only>
      </a> for more insights, or join our community on Facebook.
      </h3>
    </div>
  </section>

</template>

