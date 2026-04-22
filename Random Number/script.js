const btn = document.getElementById("click");
const val = document.getElementById("value");
const min=1;
const max=100;

btn.addEventListener("click" , () =>{
    randomNum = Math.floor(Math.random() * max) + min;
    val.textContent = randomNum
});