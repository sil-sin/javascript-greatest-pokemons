// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
let getAllFirePokemons = (pokedex) => {
  // create empty arr
  let fireTypes = [];
  //    check & filter all pokemons
  for (var i = 0; i < pokedex.length; i++) {
    // contiotion
    if (pokedex[i].type.includes("Fire")) {
      //    push the filtered
      fireTypes.push(i);
    }
  }
  return fireTypes; //return new array
};
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
// create a function , takes array and returns name
// check all pokemons height and return the shortes
// need a empty variable to register the height

let shortestPokemon = (pokedex) => {
  let cloneArr = JSON.parse(JSON.stringify(pokemons));

  if (pokedex.length == 0) {
    return 0;
  }

  let sorted = pokedex.sort((elem1, elem2) => {
    if (elem1.height > elem2.height) {
      return 1;
    } else if (elem1.height < elem2.height) {
      return -1;
    } else {
      return 0;
    }
  });
  return sorted[0].name;
};

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
let candyAverage = (pokedex) => {
  if (pokedex.length == 0) {
    return 0;
  }
  let totatlCandy = pokedex.reduce((acc, sum) => {
    if (sum.candy_count) {
      return acc + sum.candy_count;
    } else {
      return acc;
    }
  }, 0);

  return Number((totatlCandy / pokedex.length).toFixed(2));
};
// Iteration 4: images for the first 10 `Ground`  Pokemons
let getGroundPokeImg = (pokedex) => {
  if (pokedex.length == 0) {
    return 0;
  }
  let groundTypes = [];
  for (var i = 0; i < pokedex.length; i++) {
    if (pokedex[i].type.includes("Ground")) {
      groundTypes.push(pokedex[i]);
    }
  }
  return groundTypes.slice(0, 10);
};


// Iteration 5: Find all pokemon names heavier than Pikachu

console.log(getHeavyPokemons(pokemons))
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

let cloneArr = JSON.parse(JSON.stringify(pokemons));
let orderAlphabetically = (pokedex) => {
  let sortedPoke = pokedex
    .sort((elem1, elem2) => {
      let sortedNames = [];
      if (elem1.name > elem2.name) {
        return 1;
      } else if (elem1.name < elem2.name) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((allPokemons) => allPokemons.name);

  return sortedPoke.slice(0, 20);
};


// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(pokedex) {
  strongest = [];
  for (i = 0; i < pokedex.length; i++) {
    if (pokedex[i].weaknesses.length == 1) {
      strongest.unshift(pokedex[i].name);
    }
  }

  return strongest.slice(0, 15);
}
