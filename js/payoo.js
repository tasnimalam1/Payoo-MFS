
// hw: search: form submit reloading the page.

// step-1 add event handler
document.getElementById('btn-login').addEventListener('click',function(event){
    // step-2: prevent default behavior(prevent reloading browser)
    event.preventDefault();
    console.log('login button clicked')

    
    // step-3: get the number
    const phoneNumber=document.getElementById('number-input').value;
    // step-4: get the pin number
    const pinNumber=document.getElementById('pin-number').value;

    if(phoneNumber === '12345' && pinNumber === '521252'){
        window.location.href= '/home.html';
        console.log('logged in')
    }
    else{
        alert('wrong phone number or pin')
    }
    
})