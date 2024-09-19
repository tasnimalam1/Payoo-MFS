// add money to the account
/**
 * s-1: add event
 * prevent page reload after form submit
 * s-2: get money to be added to the account
 * s-3: get the pin
 */
// step-1: add  an event handler to the add money button
document.getElementById('btn-money').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // get money to be added to the account
    const addMoney=document.getElementById('add-money-input').value;
    

    // get the pin
    const pinNumber=document.getElementById('pin-number-input').value;

    // verify pin number
    if(pinNumber === '1234'){
        

    // get the current balance
        const balance=document.getElementById('account-balance').innerText;

        // add money input balance with balance

        const addMoneyNumber= parseFloat(addMoney);
        const balanceNumber= parseFloat(balance);
        const newBalance= balanceNumber+addMoneyNumber;

        // update balance
        document.getElementById('account-balance').innerText= newBalance;

    }
    else{
        alert('fail to add money')
    }
    

})