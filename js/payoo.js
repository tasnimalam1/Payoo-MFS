// step-1 add event handler
document.getElementById('btn-login').addEventListener('click',function(event){
    // step-2: prevent default behavior(prevent reloading browser)
    event.preventDefault();
    console.log('login button clicked')

    
    // step-3: get the number
    const phoneNumber=document.getElementById('number-input').value;
    console.log(phoneNumber);
})