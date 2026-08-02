const click = document.getElementById("click");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");


click.addEventListener("click" , () =>{
    const dice = document.getElementById("dice").value;
    let values = [];
    let images = [];
    for(let i=1;i<=dice;i++){
        const num = Math.floor(Math.random() * 6) + 1;
        values.push(num);
        images.push(`<img src="dice_images/${num}.png" alt="Dice${num}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' '); 
    
});

