document.addEventListener('DOMContentLoaded', function() {
    const videoLinks = document.querySelectorAll('.categoria-videos a');
    videoLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const videoId = this.href.split('v=')[1];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        const iframe = document.getElementById('youtube-iframe');
        iframe.src = embedUrl;
      });
    });
  });