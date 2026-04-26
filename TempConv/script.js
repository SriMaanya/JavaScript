input = document.getElementById("value");
rd1 = document.getElementById("rd1"); 
rd2 = document.getElementById("rd2");
submit = document.getElementById("submit"); 
result = document.getElementById("res");

let celsius = 0
let fahrenheit = 0
submit.addEventListener("click", () => {
    let val = parseFloat(input.value);
    if(isNaN(val)){
        result.textContent = "Enter a valid number";
    }
    if(rd1.checked){
        fahrenheit = (val* (9/5)) + 32;
        result.textContent = "The result is: " + fahrenheit.toFixed(2) + "°F";         
    }
    else if(rd2.checked){
        celsius = (val - 32) * (5/9);
        result.textContent = "The result is: " + celsius.toFixed(2) + "°C"; 
    }
    else{
        result.textContent = "Select a Unit";
        console.log("select a unit");
    }
});

console.log("hello");
