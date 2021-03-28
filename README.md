# PRACTICE LAB | POKEDEX

  

![](https://media3.giphy.com/media/8e3GWFlllPboI/giphy.gif?cid=ecf05e47mrp1s45xv2yezej6vlg9k61laok4q9iwggml92ck&rid=giphy.gif)

  

## Introduction

  

We have just learned some super useful methods, that will help us a lot to manipulate **objects and arrays**. In this exercise, we will focus on practicing them, and this being said, it is mandatory to implement at least one of them in each iteration.

  

Best way to practice is to work with real data. In the **`src/data.js`** file you will find an array of info about all the pokemons in your pokedex

  

## Requirements

  

- Fork this repo

- Clone this repo

- Practice JavaScript advanced methods (`map`, `forEach`, `reduce`, `filter` and `sort` to manipulate arrays)

  

## Submission

  

- Upon completion, run the following commands:

  

```

git add .

git commit -m "done"

git push origin master

```

  

- Don't create a Pull Request. This is only for practice. Just make sure Jasmine is happy :)

  

## Introduction

  

The `src/data.js` contains an array of pokemons. Here is one example of how the data is displayed:

  

```javascript

{

	"id": 1,

	"num": "001",

	"name": "Bulbasaur",

	"img": "http://www.serebii.net/pokemongo/pokemon/001.png",

	"type": [

		"Grass",

		"Poison"

	],

	"height": "0.71 m",

	"weight": "6.9 kg",

	"candy": "Bulbasaur Candy",

	"candy_count": 25,

	"egg": "2 km",

	"spawn_chance": 0.69,

	"avg_spawns": 69,

	"spawn_time": "20:00",

	"multipliers": [

		1.58

	],

	"weaknesses": [

		"Fire",

		"Ice",

		"Flying",

		"Psychic"

	],

	"next_evolution": [

		{

			"num":  "002",

			"name":  "Ivysaur"

		},

		{

			"num":  "003",

			"name":  "Venusaur"

		}

	]

},

```

  

In the next a couple of iterations, you will be using your JS knowledge to manipulate with this data.

  

## Tests!

  

Ohh yes! We have our beloved tests, and you already know how this works. Open the `SpecRunner.html` file on your browser and start coding to pass the test. Remember to focus on one test at a time and read carefully the instructions to understand what you have to do. The tests can be found in the `tests/pokemons.spec.js` file.

  

## Instructions

  

You have to work on the `src/pokemons.js` file.

  

### Iteration 1: All Fire Pokemons

  

We need to get the array of all Fire type pokemons. Go ahead and create a function named `getAllFirePokemons()` that receives an array of pokemons as an argument and returns a new filtered array.

  

```javascript
"type": [
	"Fire",
],
```

  

All fire type pokemons will have that type Fire

  

### Iteration 2: Find the Shortest Pokemon?


Go ahead and create a `shortestPokemon()` function that receives an array as a parameter and returns the `name` of the shortest pokemon


### Iteration 3: All `candy_count` average

  
  Create a `candyAverage()` function that receives an array as a parameter. This function must return the average of `candy_count` for all the pokemons
The average must be returned rounded to 2 decimals! Note: Some pokemons do not have a `candy_count`.  Handle that scenario gracefully.

 
**:bulb: Maybe you want to _"reduce"_ the data to a single value. :wink:**

  

### Iteration 4: Get the images for the first 10 `Ground`  Pokemons

Create a function `getGroundPokeImg()` which accepts an array of pokemons as a parameter and returns an array of images for the first 10 `Ground` type pokemons.

Note: `Ground` type pokemons have this property in the object

```
"type": [
	"Ground",
],
```

### Iteration 5: Find all pokemon names heavier than Pikachu

 
We might need to use more than a single loop here

Create a function `getHeavyPokemons()` that receives an array as parameter and returns a _new filtered array_ with the names of all Pokemons heavier than Pikachu.
Note: All pokemons have a `weight` attribute. You moght need to use that 

  

![](https://media2.giphy.com/media/fSvqyvXn1M3btN8sDh/giphy.gif?cid=ecf05e478030b7360b033edb07e68eda3a6ac55bfe14f306&rid=giphy.gif)

  

  

**:bulb: Make sure not to mutate the original array :wink:**

  

### Iteration 6: Alphabetic order

Create a `orderAlphabetically()` function, that receives an array and returns an array of first 20 pokemons, alphabetically ordered based on their `name`. Return only the name of each pokemon, and if the array you receive has less than 20 pokemons, return all of them.

**:bulb: Make sure not to mutate the original array :wink:**

###  Iteration 7: Strong pokemons

Create a `strongPokemons()` function, that receives an array and returns an array of first 15 pokemon names, that have just one `weakness`

![](https://media4.giphy.com/media/mhEXfMFWYf9PW/200w.webp?cid=ecf05e47nqpzk135dsl6a2w917n5urose39aezjexlynxnn2&rid=200w.webp)

**Happy coding!** :heart:
