
async function fetchData(){
    try{

        let characters = document.getElementById("pokemonChar").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${characters}`);
        console.log(response);

        if(!response.ok){
            console.error("Could not fetch resources");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imageEle = document.getElementById("pokiID");

        imageEle.src = pokemonSprite;
        imageEle.style.display = "block";

    }
    catch(error){
        console.error(error);
    }
}
