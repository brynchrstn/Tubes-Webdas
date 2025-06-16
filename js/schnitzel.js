document.querySelectorAll('.gallery-item').forEach(function(item) {
    item.addEventListener('click', function() {
        item.style.boxShadow = '0 0 0 4px #ffc107, 0 4px 18px rgba(0,0,0,0.15)';
        setTimeout(function() {
            item.style.boxShadow = '';
        }, 500);
    });
});

document.querySelectorAll('.btn-below').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = btn.getAttribute('data-target');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fadeEls = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    fadeEls.forEach(el => {
      observer.observe(el);
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const fadeEls = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    fadeEls.forEach(el => {
      observer.observe(el);
    });
  });