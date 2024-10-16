<template>
  <section class="relative py-20 transition-colors duration-500 lg:py-28 bg-gradient-to-r from-dark-800 via-primary to-dark-800 text-light-50">
    <div class="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-left">
        <h1 class="mb-6 text-5xl font-extrabold tracking-tight text-primary-50 sm:text-6xl">Accessibility Statement</h1>

        <!-- Introduction -->
        <h2 class="mb-6 text-4xl font-extrabold text-light-100">Introduction</h2>
        <p class="mb-8 text-lg text-secondary-200">
          We are dedicated to providing an exceptional experience for every user. We believe in breaking down barriers and ensuring that our website is accessible to everyone, including people with disabilities. We recognize that the internet should be available to all, and we are committed to maintaining standards that enable accessibility for everyone, regardless of their circumstances or abilities.
        </p>
        <p class="mb-8 text-lg text-secondary-200">
          As part of our commitment to making the web accessible to everyone, we strive to exceed industry standards for web accessibility compliance, using the Web Content Accessibility Guidelines (WCAG) 2.1 AA as our benchmark. These guidelines were established by the World Wide Web Consortium's (W3C) Web Accessibility Initiative to ensure that web content is accessible to a broad range of people with disabilities.
        </p>
        <p class="mb-8 text-lg text-secondary-200">
          Our website's accessibility is continuously optimized by an AI-based application that runs in the background. This application remediates the HTML of the website and adapts its functionality and behavior so that blind and visually impaired individuals can use screen readers to access the website's content, and individuals with physical disabilities can use the keyboard to navigate the website without the need to activate any prompts.
        </p>
        <p class="mb-8 text-lg text-secondary-200">
          We are committed to providing the best possible experience for all users, and we will continue to make accessibility a top priority as we work to improve our website's functionality and design.
        </p>

        <!-- Disclaimer -->
        <h2 class="mb-6 text-4xl font-extrabold text-light-100">Disclaimer</h2>
        <p class="mb-8 text-lg text-secondary-200">
          We aim to provide the highest standards of accessibility on our website because we understand the moral and practical importance of being compliant with the WCAG 2.1 AA standards. We perform regular scans to identify and fix any accessibility issues that may arise. Despite our best efforts to uphold the highest possible accessibility standards on our website, you may find that some pages or components of our website may fall short of accessibility standards. This may be because we have not yet identified, or are currently in the process of identifying, the best possible solution for such a problem.
        </p>

        <!-- Accessibility Features -->
        <h2 class="mb-6 text-4xl font-extrabold text-light-100">Accessibility Features</h2>
        <p class="mb-8 text-lg text-secondary-200">
          We utilize a web accessibility interface that enables people with disabilities to adjust the website's user interface and design to meet their specific needs.
        </p>
        <p class="mb-8 text-lg text-secondary-200">
          To enable the accessibility assistant on our website, click on the accessibility interface. The menu will appear, and you can then interact with the features and options to suit your specific needs:
        </p>
        <ul class="pl-5 mb-8 space-y-4 text-lg list-disc text-secondary-200">
          <li><strong>Vision:</strong> This profile allows users with visual impairments (such as low vision and color blindness) to adjust our website’s text size, color contrast, and saturation to suit their preferences.</li>
          <li><strong>Cognitive:</strong> This profile provides assistive features that improve the concentration of users with cognitive impairments and help them focus on essential elements of the website.</li>
          <li><strong>Seizure Safe:</strong> This profile reduces the risk of epileptic seizures by disabling animations and pausing flashing content and triggering color combinations.</li>
          <li><strong>ADHD:</strong> This profile provides a less disruptive web experience for users with ADHD and other neurodevelopmental impairments to improve browsing, reading, and concentration.</li>
          <li><strong>Dyslexia:</strong> This profile makes it easier for people with learning difficulties such as dyslexia to read and understand content on the website.</li>
        </ul>

        <p class="mb-8 text-lg text-secondary-200">
          The accessibility features also provide adjustment settings for:
        </p>
        <ul class="pl-5 mb-8 space-y-4 text-lg list-disc text-secondary-200">
          <li><strong>Content:</strong> Users can underline links and headers, adjust text size and spacing, and improve content readability with readable fonts, reading guide, read mode, reading mask, and other available options.</li>
          <li><strong>Color:</strong> Users can adjust color contrast and saturation levels on the website with options to reverse contrast, brighten contrast, and enable high saturation. Settings are available to adjust text color, pointer color, background color, and header color.</li>
          <li><strong>Navigation:</strong> Users can adjust navigation settings to enable big cursor/mouse pointer, page structure, and keyboard focus, as well as resize the screen.</li>
        </ul>

        <!-- Support for Assistive Technology -->
        <h2 class="mb-6 text-4xl font-extrabold text-light-100">Support for Assistive Technology</h2>
        <p class="mb-8 text-lg text-secondary-200">
          We use modern methods such as semantic HTML and ARIA (Accessible Rich Internet Applications) attributes to ensure our website is accessible to user agents (browsers, assistive technology, etc.). This allows our customers to choose suitable tools with little or no limitations. We support the major user agents in the market.
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useHead } from '@unhead/vue';

useHead({
  title: 'Accessibility Statement | Weed Garden',
  meta: [
    { name: 'description', content: 'Read our Accessibility Statement to learn how Weed Garden is committed to providing an inclusive and accessible experience for all users, in compliance with WCAG 2.1 AA standards.' },
    { name: 'keywords', content: 'accessibility, WCAG compliance, inclusive experience, accessible website, assistive technology' },
    { property: 'og:title', content: 'Accessibility Statement | Weed Garden' },
    { property: 'og:description', content: 'We are committed to making Weed Garden accessible to everyone. Read our Accessibility Statement to learn how we maintain WCAG 2.1 AA standards.' },
    { property: 'og:image', content: 'https://weed-garden.com/img/accessibility-preview.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://weed-garden.com/accessibility-statement' },
    { name: 'twitter:title', content: 'Accessibility Statement | Weed Garden' },
    { name: 'twitter:description', content: 'Discover our commitment to web accessibility and inclusion for everyone. Learn how we uphold WCAG 2.1 AA standards at Weed Garden.' },
    { name: 'twitter:image', content: 'https://weed-garden.com/img/accessibility-preview.png' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Accessibility Statement | Weed Garden",
        "description": "We are dedicated to ensuring an accessible web experience for everyone. Learn about our accessibility efforts and WCAG 2.1 AA compliance.",
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
