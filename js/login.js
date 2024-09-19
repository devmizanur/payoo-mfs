document.getElementById('btn-login').addEventListener('click',function(event){
event.preventDefault();//for must be use in form it prevent reloding the page
// step-2
const phoneNumber=document.getElementById('phone-number').value;
const pinNumber=document.getElementById('pin-number').value;
if (phoneNumber==='01751551434' && pinNumber==='12345') {
  window.location.href="/home.html";//redirect to another page

} else {
  alert('wrong phone number or pin');
}

})