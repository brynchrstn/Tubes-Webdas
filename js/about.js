document.querySelectorAll('.post-card').forEach(function(card) {
    card.addEventListener('click', function() {
        card.style.boxShadow = '0 0 0 4px #ffc107, 0 8px 32px rgba(0,0,0,0.25)'; // #ffc107 is Bootstrap warning color
        setTimeout(function() {
            card.style.boxShadow = '';
        }, 500);
    });
});
document.getElementById('showFormBtn').addEventListener('click', function () {
  const formSection = document.getElementById('formSection');
  formSection.classList.remove('hidden-form');
  this.style.display = 'none';
  formSection.scrollIntoView({ behavior: 'smooth' });
});

function sendMail(event){
  event.preventDefault();
  let parms = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    subject : document.getElementById('subject').value,
    message : document.getElementById('message').value,
  };
  emailjs.send('service_stbhycw', 'template_tjbmykh', parms)
    .then(function() {
      alert('Email Sent!');
      document.querySelector('form').reset();
    }, function(error) {
      alert('Gagal mengirim email: ' + JSON.stringify(error));
    });
}