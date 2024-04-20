document.addEventListener("DOMContentLoaded", function() {
  var headerHeight = document.querySelector('header').offsetHeight;
  document.body.style.paddingTop = headerHeight + 'px';
});

document.getElementById('userReportForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var formData = new FormData(this);
  var email = formData.get('email');
  var name = formData.get('name');
  var whatsapp = formData.get('whatsapp');
  var complaint = formData.get('complaint');

  var mailtoLink = 'mailto:xenzatowerdigital@gmail.com'
                 + '?subject=Laporan Pengguna'
                 + '&body=Email: ' + email
                 + '%0A%0ANama: ' + name
                 + '%0A%0ANo WhatsApp: ' + whatsapp
                 + '%0A%0AKeluhan: ' + complaint;

  window.location.href = mailtoLink;
});
document.addEventListener("DOMContentLoaded", function() {
  var whatsappInput = document.getElementById('whatsapp');

  // Set default value to +62
  whatsappInput.value = '+62';

  // Prevent deletion of '+62'
  whatsappInput.addEventListener('input', function(event) {
    if (!whatsappInput.value.startsWith('+62')) {
      whatsappInput.value = '+62';
    }
  });
});

