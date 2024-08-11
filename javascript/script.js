const pokemonListElement = document.getElementById('gridContainer')
let currentPage = 1

// Define the parseUrl function
function parseUrl(url) {
  const urlParts = url.split('/')
  return urlParts[urlParts.length - 2]
}


pokemonListElement.innerHTML = ''
// Fetch the list of Pokémon from the PokeAPI
async function fetchPokemonList() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(currentPage - 1) * 20}`)
        const data = await response.json()

           // Log the results to the console
           console.log(data)

        // Display the Pokémon's details on each card
        data.results.forEach((pokemon) => {
            displayPokemon(pokemon)
        })
    } catch (error) {
        console.error('An unexpected error occurred:', error)
    }
}

// Function to display Pokémon information and add buttons for caught and card.
function displayPokemon(pokemon) {

    // Create a catch status
    const catchStatusElement = document.createElement('button')
    const pokemonName = pokemon.name
  
    // Check if the Pokémon is already caught in localStorage (prevent from refresh)
    const isCaught = localStorage.getItem(`caught-${pokemonName}`) === 'true'
  
    if (isCaught) {
      catchStatusElement.textContent = 'Caught'
      catchStatusElement.classList.add('caughtButton')
    } else {
      catchStatusElement.textContent = 'Uncaught'
      catchStatusElement.classList.add('uncaughtButton')
    }
  
    catchStatusElement.addEventListener('click', () => {  //add a click to press caught or uncaught
      if (catchStatusElement.textContent === 'Uncaught') {
        catchStatusElement.textContent = 'Caught'
        catchStatusElement.classList.remove('uncaughtButton')
        catchStatusElement.classList.add('caughtButton')
        localStorage.setItem(`caught-${pokemonName}`, 'true')

      } else {
        catchStatusElement.textContent = 'Uncaught'
        catchStatusElement.classList.remove('caughtButton')
        catchStatusElement.classList.add('uncaughtButton')
        localStorage.removeItem(`caught-${pokemonName}`)
  }
})
  

    // Get the Pokémon ID from the URL
    const pokemonId = parseUrl(pokemon.url)
    const pokemonNumber = String(pokemonId).padStart(3, '000')

    // Create a new div called card that contains each pokemon information 
    const cardElement = document.createElement('div')
    cardElement.classList.add('card')

    // Create a div and the pokemon image inside 
    const imgWrap = document.createElement('div')
    imgWrap.classList.add('wrappokeball')
    const imageElement = document.createElement('img')
    imageElement.classList.add('imgCard')
    imageElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

    // Create the number for each pokemon
    const numberElement = document.createElement('p')
    numberElement.classList.add('number')
    numberElement.textContent = `#${pokemonNumber}`

    // Create the name
    const nameElement = document.createElement('h2')
    nameElement.textContent = pokemon.name

    //Create a div called categories to display types. This names are the same that i added in html, so in css i use the same info
    const typesContainerElement = document.createElement('div')
    typesContainerElement.classList.add('categories')

    // Fetch the Pokémon's details from the PokeAPI
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(pokemonData => {
            // Extract the Pokémon's types
            const types = pokemonData.types.map(type => type.type.name)

            // Create a type for each type
            types.forEach(type => {
                const typeElement = document.createElement('div')
                typeElement.classList.add('type')
                typeElement.textContent = type;
                typesContainerElement.appendChild(typeElement)
            })
       
        })

    //Append catch status, imgWrap, imageElement, numberElement, nameElement and typesContainerElement to the card element & imageElement to the imgWrap
    cardElement.appendChild(catchStatusElement)
    cardElement.appendChild(imgWrap)
    imgWrap.appendChild(imageElement)
    cardElement.appendChild(numberElement)
    cardElement.appendChild(nameElement)
   cardElement.appendChild(typesContainerElement)
   
   //////////////////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////// new container for each pokemon's information/////////

//Create the new page to display each pokemon's information. This by clicking on the pokemon image for each card
   nameElement.addEventListener('click', () => {
    // Fetch the Pokémon's details from the PokeAPI
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
       .then(response => response.json())
       .then(pokemonData => {
            // create the new container
            const modalElement = document.createElement('div')
            modalElement.classList.add('each-pokemon')

            
            // Create a close button element to go back to index.html 
            const closeButtonElement = document.createElement('button')
            closeButtonElement.classList.add('close')
            closeButtonElement.textContent = 'Close'
            closeButtonElement.addEventListener('click', () => {
                modalElement.remove() 
                //this is to remove the new page once i click the close button
            })

            // Create a caught status element
      const caughtStatusElement = document.createElement('p')
      caughtStatusElement.classList.add('caught-status')
      
      
      // Check if the Pokémon is already caught in localStorage
      const isCaught = localStorage.getItem(`caught-${pokemonName}`) === 'true'
      caughtStatusElement.textContent = isCaught ? 'Caught' : 'Not caught'


            // Create the name for the pokemon that is displayed
            const nameElement = document.createElement('h2')
            nameElement.classList.add('name-pokemon')
            nameElement.textContent = pokemonData.name

            // Create a number element
            const numberElement = document.createElement('h3')
            numberElement.classList.add('h3Pokemon')
            numberElement.textContent = `#${pokemonNumber}`

            //create a div for all elements
          const divElement = document.createElement('div')
           divElement.classList.add('divElement')

          // Create a hd image element
          const hdImageElement = document.createElement('img')
          hdImageElement.classList.add('hd-pokemon')
          hdImageElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
          hdImageElement.alt = pokemonData.name;

          // Create a div for type element, p and h3 for type
          const types = document.createElement('div')
          types.classList.add('types')

          const typesH3 = document.createElement('h3')
          typesH3.textContent = 'Types'
          typesH3.classList.add('typesH3')
 
        const typeElement = document.createElement('p')
        typeElement.classList.add('typesp')
        typeElement.textContent = pokemonData.types.map(type => type.type.name).join(', ')


            // Create a div and heading for height

            const heightContainer = document.createElement('div')
            heightContainer.classList.add('height-container')

            const heightH3 = document.createElement('h3')
             heightH3.textContent = 'Height'
             heightH3.classList.add('heightH3')

            const heightElement = document.createElement('p')
            heightElement.classList.add('heightp')
            heightElement.textContent = `${pokemonData.height} decimeters`

            // Create a div and heading for weight 
            const weightContainer = document.createElement('div')
            weightContainer.classList.add('weight-container')

            const weightH3 = document.createElement('h3')
             weightH3.textContent = 'Weight'
             weightH3.classList.add('weightH3')

            const weightElement = document.createElement('p')
            weightElement.classList.add('weightp')
            weightElement.textContent = `${pokemonData.weight} hectograms`

            // Create an a div for abilities and get data
            const abilitiesContainerElement = document.createElement('div')
            const abilityH3 = document.createElement('h3')
             abilityH3.textContent = 'Abilities'
            abilitiesContainerElement.classList.add('abilities')

            // Extract the Pokémon's abilities
            const abilities = pokemonData.abilities.map(ability => ability.ability.name)

            // Create a div for ability
            abilities.forEach(ability => {
                const abilityElement = document.createElement('div')
                abilityElement.classList.add('ability')
                abilityElement.textContent = ability
                abilitiesContainerElement.appendChild(abilityElement)
            })

            // Create a div for stats
            const statsContainerElement = document.createElement('div')
            statsContainerElement.classList.add('statsc')

            // Extract the Pokémon's stats
            const stats = pokemonData.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`)

            // Create a div for stats
            stats.forEach(stat => {
                const statElement = document.createElement('div')
                statElement.classList.add('statsp')
                statElement.textContent = stat
                statsContainerElement.appendChild(statElement)
            })


            // Append the name, number, height, weight, abilities, and stats elements to the modal element
            modalElement.appendChild(caughtStatusElement) 
            modalElement.appendChild(closeButtonElement)
            modalElement.appendChild(caughtStatusElement)
            modalElement.appendChild(hdImageElement)
            modalElement.appendChild(nameElement)
            modalElement.appendChild(numberElement)
            modalElement.appendChild(divElement)
            divElement.appendChild(weightContainer)
            weightContainer.appendChild(weightH3)
            weightContainer.appendChild(weightElement)
            divElement.appendChild(heightContainer)
            heightContainer.appendChild(heightH3)
            heightContainer.appendChild(heightElement)
            divElement.appendChild(types)
            types.appendChild(typesH3)
            types.appendChild(typeElement)
            divElement.appendChild(abilitiesContainerElement)
            abilitiesContainerElement.appendChild(abilityH3)
            divElement.appendChild(statsContainerElement)

            // Append the modal element to the body element
            document.body.appendChild(modalElement)


            
        })
})

// Append the card element to the Pokémon list element
pokemonListElement.appendChild(cardElement)
}

// parseURL
// Will return the pokemon's id from the provided url
function parseUrl(url) {
    return url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
}

// Call the fetchData function to initiate the process
fetchPokemonList()

//get the element .show more by class with query selector and ad a click to display 2 more pokemons
document.querySelector('.showMore').addEventListener('click', () => {
    currentPage++;
    fetchPokemonList()
  })
