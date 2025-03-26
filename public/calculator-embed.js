
// Sassy Lingerie Bra Size Calculator Embed Script
(function() {
  // Create global object for the calculator
  window.SassyCalculator = {
    init: function(options) {
      // Default options
      const defaults = {
        container: 'sassy-calculator',
        theme: 'light',
        primaryColor: '#f472b6'
      };
      
      // Merge options
      const settings = {...defaults, ...options};
      
      // Get container
      const container = document.getElementById(settings.container);
      if (!container) {
        console.error('Sassy Calculator: Container not found');
        return;
      }
      
      // Create iframe
      const iframe = document.createElement('iframe');
      iframe.src = 'https://your-domain-here.com/calculator';
      iframe.width = '100%';
      iframe.height = '800px';
      iframe.style.border = 'none';
      iframe.style.maxWidth = '100%';
      iframe.title = 'Sassy Lingerie Bra Size Calculator';
      
      // Add theme and color as URL parameters if different from defaults
      if (settings.theme !== defaults.theme || settings.primaryColor !== defaults.primaryColor) {
        iframe.src += `?theme=${settings.theme}&color=${encodeURIComponent(settings.primaryColor)}`;
      }
      
      // Add iframe to container
      container.appendChild(iframe);
      
      // Return API for further interactions
      return {
        resize: function(height) {
          iframe.height = height + 'px';
        }
      };
    }
  };
})();
