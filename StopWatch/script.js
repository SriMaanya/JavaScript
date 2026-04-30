const stopwatch = document.getElementById("stopwatch");
const startbtn = document.getElementById("startbtn");
const stopbtn = document.getElementById("stopbtn");
const resetbtn = document.getElementById("resetbtn");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


startbtn.addEventListener("click", () => {
    
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }

});

stopbtn.addEventListener("click", () => {


    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

});

resetbtn.addEventListener("click", () => {

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    stopwatch.textContent = `00:00:00:00`;
});

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,0);
    minutes = String(minutes).padStart(2,0);
    seconds = String(seconds).padStart(2,0);
    milliseconds = String(milliseconds).padStart(2,0);


    stopwatch.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}