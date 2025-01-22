emailjs.init('GvDMaBfEzgjp6yO_E');

const ambianceModal = document.querySelector('#ambiance-modal');
const skillsModal = document.querySelector('#skills-modal');
const ambianceBtn = document.querySelector('.modal-shop-ambiance');
const skillsBtn = document.querySelector('.modal-shop-talent');
const modal = document.querySelectorAll('.modal');
const closeModal = document.querySelectorAll('.close');


skillsBtn.onclick = () => {
    skillsModal.style.display = "block";
  }
  ambianceBtn.onclick = () => {
    ambianceModal.style.display = "block";
  }
  
  closeModal.forEach((btn, i) => {
    btn.onclick = () => {
      modal[i].style.display = 'none';
    }
  })
  
  window.onclick = function(e) {
    if (e.target == skillsModal || e.target == ambianceModal) {
      skillsModal.style.display = "none";
      ambianceModal.style.display = "none";
    }
  }

  var map = L.map('map').setView([48.8, 2.3], 15);

var marker = L.marker([48.8, 2.3]).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            emailjs.sendForm('contact_service', 'template_vwsqg0z', contactForm, 'GvDMaBfEzgjp6yO_E')
                .then(() => {
                    console.log('SUCCESS!');
                    alert('Message envoyé avec succès!');
                })
                .catch((error) => {
                    console.error('FAILED...', error);
                    alert('Échec de l\'envoi du message.');
                });
        });
    }
});