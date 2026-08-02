val=document.getElementById("value")
decre=document.getElementById("decre")
reset=document.getElementById("reset")
incre=document.getElementById("incre")
count=0

decre.addEventListener("click", () => {
    count--;
    val.textContent = count;
});

incre.onclick = function() {
    count++;
    val.textContent = count;
};

reset.onclick = function() {
    val.textContent = 0;
    count=0;
};