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


(function(){
  emailjs.init({
    publicKey: "_zY018WcASe2JOn4v",
  });
})();

function sendMail(){
  let parms = {
    name : getElementById('name').value,
    email : getElementById('email').value,
    pesan : getElementById('pesan').value,
  }
  emailjs.send('service_stbhycw', 'template_fvbp3tm', parms).then(alert('Email Sent!'))
}