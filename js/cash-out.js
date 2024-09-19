document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut=document.getElementById('cash-out-input').value;
    const cashOutNumber=parseFloat(cashOut);
    const cashOutPin=document.getElementById('pin-cash-out-input').value;

    if(cashOutPin === '1234'){
        const balance= document.getElementById('account-balance').innerText;
        const balanceNumber=parseFloat(balance);
        const newBalance=balanceNumber-cashOutNumber;

        // update balance
        document.getElementById('account-balance').innerText=newBalance;

    }
    else{
        alert('Failed to cash out, Please try again later')
    }
})