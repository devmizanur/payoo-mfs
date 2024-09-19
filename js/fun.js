document.getElementById('btn-login').addEventListener('click', function (event) {
  event.preventDefault();
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  if (phoneNumber === '01951398727' && pinNumber === '12345') {
    window.location = "/home.html";
  } else {
    alert('please give right phone number or pin');
  }
})