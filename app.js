const pokedex = document.getElementById("pokedex")
console.log(pokedex)

function fetchPokemon(){
    //USE FETCH API TO FETCH POKEMON
    //let create a promise so that this will not start storing 150 pokemon as son as page loads
    const promises = []
    for(let i = 1; i<150;i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        promises.push(fetch(url).then((response => response.json())))
    }

    Promise.all(promises).then(results=>{
        const pokemon = results.map(data=> ({
            name: data.name,
            id: data.id,
            sprite: data.sprites['front_shiny'],
            type: data.types.map( (type) => type.type.name).join(', ')
        }))
        displayPokemon(pokemon)
    })
            // .then((data)=>{

            // const pokemon = {
            //     name: data.name,
            //     id:data.id,
            //     sprite: data.sprites['front_shiny'],
            //     type: data.types.map( type => type.type.name).join(', ')
            // }
            // pokemon['name'] = data.name
            // // pokemon['type'] = data.types[0].type.name
            // // pokemon['secondaryType'] = data.types[1].type['name']
            // //iterate through the array..
            // pokemon['type'] = data.types.map( type => type.type.name).join(', ')
            // pokemon['sprite'] = data.sprites['front_shiny']
            //INSTEAD OF WRITING LIKE THIS WE CAN JUST WRITE IN OUR OBJ
            
        
}

function displayPokemon(pokemon){
    console.log(pokemon)
    // const html = `<li>TESTING</li>`
    const pokemonHTMLString = pokemon.map(pp => `
    <li class="card">
        <img class="card-image" src="${pp.sprite}"/>
        <h2 class="card-title" >${pp.id}. ${pp.name}</h2>
        <p class="card-subtitle">Type: ${pp.type}</p>
    </li>
    `).join("")
    pokedex.innerHTML = pokemonHTMLString
    console.log(pokedex)
}


    // displayPokemon()
    fetchPokemon();