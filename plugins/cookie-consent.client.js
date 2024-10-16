// plugins/vanilla-cookieconsent.client.ts

import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Load the CSS dynamically
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@2.8.5/dist/cookieconsent.css';
    document.head.appendChild(link);

    // Load the script dynamically
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@2.8.5/dist/cookieconsent.js';
    script.onload = () => {
      // Initialize the cookie consent after the script is loaded
      if (window.initCookieConsent) {
        const cc = window.initCookieConsent();
        cc.run({
          current_lang: 'en',
          autoclear_cookies: true, // default: false
          page_scripts: true, // default: false
          gui_options: {
            consent_modal: {
              layout: 'box', // box/cloud/bar
              position: 'bottom right', // bottom/middle/top + left/right/center
              transition: 'slide', // zoom/slide
            },
            settings_modal: {
              layout: 'box', // box/bar
              transition: 'slide', // zoom/slide
            },
          },
          languages: {
            en: {
              consent_modal: {
                title: 'We use cookies!',
                description:
                  'We use cookies to ensure basic functionalities of the website and to enhance your online experience. Read our <a href="/privacy-policy" class="cc-link">Privacy Policy</a>.',
                primary_btn: {
                  text: 'Accept all',
                  role: 'accept_all', // accept_selected/accept_all
                },
                secondary_btn: {
                  text: 'Preferences',
                  role: 'settings', // settings/accept_necessary
                },
              },
              settings_modal: {
                title: 'Cookie preferences',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                  { col1: 'Name' },
                  { col2: 'Domain' },
                  { col3: 'Expiration' },
                  { col4: 'Description' },
                ],
                blocks: [
                  {
                    title: 'Cookie usage',
                    description:
                      'We use cookies to ensure basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.',
                  },
                  {
                    title: 'Strictly necessary cookies',
                    description:
                      'These cookies are essential for the proper functioning of our website. Without these cookies, the website would not work properly.',
                    toggle: {
                      value: 'necessary',
                      enabled: true,
                      readonly: true, // mandatory
                    },
                  },
                  {
                    title: 'Analytics & Performance cookies',
                    description:
                      'These cookies allow the website to remember the choices you have made in the past.',
                    toggle: {
                      value: 'analytics', // your custom category
                      enabled: false,
                      readonly: false,
                    },
                    cookie_table: [
                      {
                        col1: '^_ga', // match all cookies starting with "_ga"
                        col2: '.yourdomain.com',
                        col3: '2 years',
                        col4: 'Google Analytics cookie',
                        is_regex: true,
                      },
                    ],
                  },
                  // Add more blocks as needed
                ],
              },
            },
          },
        });

        // Optional: Make the consent object available globally
        nuxtApp.provide('cookieConsent', cc);
      } else {
        console.error('CookieConsent library failed to initialize.');
      }
    };
    document.head.appendChild(script);
  }
});
