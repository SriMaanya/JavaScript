const paypal = document.getElementById("payPalbtn");
const master = document.getElementById("masterCardbtn");
const visa = document.getElementById("visabtn");
const check = document.getElementById("checkbox");
const submit = document.getElementById("mySubmit");
const result = document.getElementById("Result");
const radioRes = document.getElementById("radioResult");

submit.onclick = function(){
    if(check.checked){
        result.textContent = `You are Subscribed`;
    }
    else{
        result.textContent = `You are NOT Subscribed`;
    }

    if(visa.checked){
        radioRes.textContent = `You are paying with Visa`;
    }
    else if(master.checked){
        radioRes.textContent = 'You are paying with MasterCard';
    }
    else if(paypal.checked){
        radioRes.textContent = 'You are paying with Paypal';
    }
    else{
        radioRes.textContent = 'You must select a Payment Type';
    }
};
