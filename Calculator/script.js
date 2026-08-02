
const input = document.getElementById('inputValue');

function appendToDisplay(val){
    input.value +=val;
}

function clearDisplay(){
    input.value = '';
}

function deleteVal(){
    input.value = input.value.slice(0,-1);
}

function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch(error){
        input.value = "Error";
    }
}