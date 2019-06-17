// Registering Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('js/sw/index.js').then(function(registration) {
            // Registration was successful
            console.log('Service Worker registration successful with scope:', registration);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed:', err);
        });
    });
  }