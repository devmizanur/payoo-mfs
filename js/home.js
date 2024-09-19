document.getElementById('btn-add-money').addEventListener('click',function(event){
  event.preventDefault();
  const inputAddMoney=document.getElementById('input-add-money').value;
  const inputPinNumber=document.getElementById('input-pin-number').value;
 if (inputPinNumber==='12345') {
  const balance=document.getElementById('account-balance').innerText;
  const addMoney=parseFloat(inputAddMoney);
  const balanceNumber=parseFloat(balance);
  const newBalance= balanceNumber + addMoney;
  document.getElementById('account-balance').innerText=newBalance;

 } else {
  alert('Failed to add money! try again.')
 }

})