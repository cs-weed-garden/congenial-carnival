export default defineNuxtPlugin((nuxtApp) => {
    const loadGoogleTag = () => {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MNXFHMTM28';
      script.async = true;
      document.head.appendChild(script);
  
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-MNXFHMTM28');
    };
  
    const getCookieConsent = () => {
      const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = value;
        return acc;
      }, {});
  
      return cookies['cc_cookie'];
    };
  
    const checkCookieConsent = () => {
      const consent = getCookieConsent();
    //   if (consent === 'true') {
        loadGoogleTag();
    //   }
    };
  
    if (process.client) {
      checkCookieConsent(); // Check on page load
    }
  });
  