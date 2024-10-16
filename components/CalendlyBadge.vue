<template>
  <div>
    <!-- Calendly badge widget container -->
    <div ref="calendlyBadgeWidget"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Load Calendly styles
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      Calendly.initBadgeWidget({
        url: 'https://calendly.com/corey-steinwand/30min',
        text: '<i class="fas fa-calendar-alt"></i> Interested in sponsoring this project? Let’s talk!',
        color: '#74DB89',
        textColor: '#111111',
        branding: undefined
      });
    };
    document.body.appendChild(script);
  }
};


</script>