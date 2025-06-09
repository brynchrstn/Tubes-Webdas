document.querySelectorAll('.gallery-item').forEach(function(item) {
    item.addEventListener('click', function() {
        item.style.boxShadow = '0 0 0 4px #ffc107, 0 8px 32px rgba(0,0,0,0.25)';
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