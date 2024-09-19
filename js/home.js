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
/**
 * cash out js-start
 */
document.getElementById('btn-cash-out').addEventListener('click',function(event){
  event.preventDefault();
  const cashOut=document.getElementById('input-cash-out').value;
  const cashOutPin=document.getElementById('input-cash-out-pin').value;
  if (cashOutPin==='12345') {
    const startBalance=document.getElementById('account-balance').innerText;
    const cashOutInput=parseFloat(cashOut);
    const presentBalance=parseFloat(startBalance);
    const newAfterOut= presentBalance -cashOutInput;
    document.getElementById('account-balance').innerText=newAfterOut;
  } else {
    alert('cash out failed!');
  }

})