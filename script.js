document.getElementById('userReportForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var formData = new FormData(this);
  var email = formData.get('email');
  var name = formData.get('name');
  var complaint = formData.get('complaint');

  var mailtoLink = 'mailto:xenzatowerdigital@gmail.com'
                 + '?subject=Laporan Pengguna'
                 + '&body=Email: ' + email
                 + '%0A%0ANama: ' + name
                 + '%0A%0AKeluhan: ' + complaint;

  window.location.href = mailtoLink;
});
