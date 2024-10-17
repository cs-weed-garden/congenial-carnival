<script setup lang="ts">
useHead({
  title: 'Weed Garden Pricing | Flexible Plans for Every Grower',
  meta: [
    { name: 'description', content: 'Explore our flexible pricing options for Weed Garden cannabis ERP software. Pay what you want or start for free and upgrade as your needs grow.' },
    { name: 'keywords', content: 'Weed Garden pricing, cannabis ERP pricing, flexible plans, cannabis software pricing' },
    { property: 'og:title', content: 'Weed Garden Pricing - Flexible Cannabis ERP Plans' },
    { property: 'og:description', content: 'Discover flexible pricing plans for Weed Garden. Start for free or pay what suits you. Choose a plan that meets your cannabis cultivation needs.' },
    { property: 'og:image', content: 'https://weed-garden.com/img/pricing-thumbnail.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://weed-garden.com/pricing' },
    { name: 'twitter:title', content: 'Weed Garden Pricing | Flexible Cannabis ERP Plans' },
    { name: 'twitter:description', content: 'Explore our pricing options for Weed Garden ERP. Start free, pay what it’s worth, or customize for larger operations.' },
    { name: 'twitter:image', content: 'https://weed-garden.com/img/pricing-thumbnail.png' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Weed Garden ERP Software",
        "description": "Explore our flexible pricing options for Weed Garden cannabis ERP software. Pay what you want or start for free and upgrade as your needs grow.",
        "image": "https://weed-garden.com/img/main-interface.webp",
        "brand": {
          "@type": "Brand",
          "name": "Weed Garden Inc.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://weed-garden.com/site-logo.webp"
          }
        },
        "offers": [
          {
            "@type": "Offer",
            "url": "https://weed-garden.com/pricing",
            "image": "https://weed-garden.com/img/main-interface.webp",
            "price": "0.00",
            "priceCurrency": "USD",
            "availability": "http://schema.org/InStock",
            "category": "Free Forever",
            "description": "Access to all basic features, real-time data monitoring, and community support.",
            "hasMerchantReturnPolicy": true,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0.00",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "value": 0,
                  "unitCode": "h"
                }
              },
              "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "US"
              }
            }
          },
          {
            "@type": "Offer",
            "url": "https://weed-garden.com/pricing",
            "image": "https://weed-garden.com/img/main-interface.webp",
            "price": "0.00",
            "priceCurrency": "USD",
            "availability": "http://schema.org/InStock",
            "category": "Pay What You Want",
            "description": "Everything in the Free tier, plus priority feature requests and direct support.",
            "hasMerchantReturnPolicy": true,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0.00",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "value": 0,
                  "unitCode": "h"
                }
              },
              "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "US"
              }
            }
          },
          {
            "@type": "Offer",
            "url": "https://weed-garden.com/pricing",
            "image": "https://weed-garden.com/img/main-interface.webp",
            "price": "0.00",
            "priceCurrency": "USD",
            "availability": "http://schema.org/InStock",
            "category": "Custom Support",
            "description": "Tailored solutions, custom integrations, and dedicated support for larger operations.",
            "hasMerchantReturnPolicy": true,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0.00",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "value": 0,
                  "unitCode": "h"
                }
              },
              "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "US"
              }
            }
          }
        ]
      })
    }
  ]
});
</script>

<template>
  <section class="relative py-20 lg:py-28 bg-dark-900 text-light-50">
    <div class="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-12">
        <h2 class="mb-4 text-5xl tracking-tight font-extrabold">
          <span class="text-primary-50">Flexible Pricing:</span><br />
          <span class="text-light-50">Pay What You Want or Start for Free</span>
        </h2>
        <p class="mb-8 font-light text-secondary-200 sm:text-xl">
          Choose a plan that fits your needs. Use it for free, pay what it's worth to you, or check out our open-source code on GitHub for custom solutions.
        </p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">

        <!-- Free Forever Card -->
        <div class="flex flex-col p-8 bg-dark-700 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 class="mb-4 text-2xl font-semibold text-primary-50">Free Forever: Basic Features for Cannabis Growers</h3>
          <p class="mb-6 font-light text-secondary-200 text-xl">Perfect for getting started.</p>
          <ul class="mb-6 space-y-3 text-xl text-secondary-200 text-left">
            <li class="flex items-center">
              <client-only>
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
              </client-only>
              Access to all basic features
            </li>
            <li class="flex items-center">
              <client-only>
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
              </client-only>
              Real-time data monitoring
            </li>
            <li class="flex items-center">
              <client-only>
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
              </client-only>
              Community support
            </li>
          </ul>
          <a href="https://ghost.weed-garden.com" target="_blank" class="inline-block px-5 py-3 bg-primary-100 text-dark-900 font-semibold rounded-lg hover:bg-primary-200 transition-colors">
            <span>Discover What’s Coming Next</span>
            <client-only>
              <i class="fas fa-arrow-right ml-2"></i>
            </client-only>
          </a>
        </div>

        <!-- Pay What You Want Card -->
        <div class="flex flex-col p-8 bg-primary-100 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 class="mb-4 text-2xl font-semibold text-dark-900">Pay What You Want: Enhanced Features & Priority Support</h3>
          <p class="mb-6 font-light text-dark-900 text-xl">Support us and get a little more.</p>
          <ul class="mb-6 space-y-3 text-xl text-dark-900 text-left">
            <li class="flex items-center">
              <client-only>
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
              </client-only>
              Everything in Free Tier
            </li>
            <li class="flex items-center">
              <client-only>
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
              </client-only>
              Priority feature requests
            </li>
            <li class="flex items-center">
              <client-only>
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
              </client-only>
              Direct support
            </li>
          </ul>
          <a href="https://ghost.weed-garden.com" target="_blank" class="inline-block px-5 py-3 bg-dark-900 text-light-50 font-semibold rounded-lg hover:bg-dark-700 transition-colors">
            <span>Discover What’s Coming Next</span>
            <client-only>
              <i class="fas fa-arrow-right ml-2"></i>
            </client-only>
          </a>
        </div>

        <!-- Custom Support Card -->
        <div class="flex flex-col p-8 bg-dark-700 border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 class="mb-4 text-2xl font-semibold text-primary-50">Custom Support: Tailored Solutions for Larger Operations</h3>
          <p class="mb-6 font-light text-secondary-200 text-xl">Need more? Get in touch.</p>
          <ul class="mb-6 space-y-3 text-xl text-secondary-200 text-left">
            <li class="flex items-center">
              <client-only>
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
              </client-only>
              Tailored solutions
            </li>
            <li class="flex items-center">
              <client-only>
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
              </client-only>
              Custom integrations
            </li>
            <li class="flex items-center">
              <client-only>
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
              </client-only>
              Dedicated support
            </li>
          </ul>
          <a href="https://ghost.weed-garden.com" target="_blank" class="inline-block px-5 py-3 bg-primary-100 text-dark-900 font-semibold rounded-lg hover:bg-primary-200 transition-colors">
            <span>Discover What’s Coming Next</span>
            <client-only>
              <i class="fas fa-arrow-right ml-2"></i>
            </client-only>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>