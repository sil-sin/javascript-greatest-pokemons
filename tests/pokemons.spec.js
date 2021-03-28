/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

/*
 * 1. getAllFirePokemons
 */
describe(' All Fire Pokemons - getAllFirePokemons', () => {
  it('Defines getAllFirePokemons', () => {
    expect(typeof getAllFirePokemons).toBe('function');
  });
  it('Should return an array', () => {
    expect(typeof getAllFirePokemons(pokemons)).toBe('object');
  });

  it('Should return a new array, not update the original one', () => {
    const arr = [];
    expect(getAllFirePokemons(arr)).not.toBe(arr);
  });

  it('Should return all fire type pokemons', () => {
    expect(getAllFirePokemons(pokemons).length).toEqual(12);
  });


});

/*
 * 2. shortestPokemon
 */

describe('the Shortest Pokemon- shortestPokemon', () => {
  it('Defines shortestPokemon', () => {
    expect(typeof shortestPokemon).toBe('function');
  });

  it('Should return a string', () => {
    expect(typeof shortestPokemon(pokemons)).toBe('string');
  });

  it('Should return 0 if the array is empty', () => {
    expect(shortestPokemon([])).toBe(0);
  });

  it('Return the shortest pokemon', () => {
    expect(
      shortestPokemon([
        {
          name: 'Machamp',
          height: '1.60 m'
        },
        {
          name: 'Bellsprout',
          height: '0.71 m'
        }
      ])
    ).toBe('Bellsprout');

    expect(
      shortestPokemon([
        {
          name: 'Weepinbell',
          height: '0.99 m'
        },
        {
          name: 'Mr. Mime',
          height: '1.30 m'
        }
      ])
    ).toBe('Weepinbell');

    expect(
      shortestPokemon([
        {
          name: 'Weedle',
          height: '0.30 m'
        },
        {
          name: 'Kakuna',
          height: '0.61 m'
        }
      ])
    ).toBe('Weedle');

    expect(shortestPokemon(pokemons)).toBe('Diglett');
  });
});

/*
 * 3. candyAverage
 */
describe('All `candy_count` average - candyAverage', () => {
  it('Defines candyAverage', () => {
    expect(typeof candyAverage).toBe('function');
  });

  it('You should return a number!', () => {
    expect(typeof candyAverage(pokemons)).toBe('number');
  });

  it('You should return the average `candy_count` of 2 pokemons with rate 8 each!', () => {
    expect(candyAverage([{ candy_count: 8 }, { candy_count: 8 }])).toBe(8);
  });

  it('It should be rounded to 2 decimals digits', () => {
    expect(candyAverage([{ candy_count: 8 }, { candy_count: 9 }, { candy_count: 9 }])).toBe(8.67);
  });

  it('It should return 0 if there is no pokemon', () => {
    expect(candyAverage([])).toBe(0);
  });

  it('Return average even if one of the pokemons does not have `candy_count`!', () => {
    expect(candyAverage([{ candy_count: 6 }, { candy_count: '' }, {}])).toBe(2);
  });
});

/*
 * 4. getGroundPokeImg
 */

describe(' first 10 `Ground`  Pokemons - getGroundPokeImg', () => {
  it('Defines getGroundPokeImg', () => {
    expect(typeof getGroundPokeImg).toBe('function');
  });

  it('Should return an array', () => {
    expect(typeof getGroundPokeImg(pokemons)).toBe('object');
  });

  it('Should return a new array, not update the original one', () => {
    expect(getGroundPokeImg(pokemons)).not.toEqual(pokemons);
  });

  it('Should return only the first 10 pokemons', () => {
    expect(getGroundPokeImg(pokemons).length).toEqual(10);
    expect(getGroundPokeImg(pokemons)[0]).toEqual('http://www.serebii.net/pokemongo/pokemon/027.png');
  });

  it('Should return 0 if the array is empty', () => {
    expect(getGroundPokeImg([])).toBe(0);
  });

});

/*
 * 5. getHeavyPokemons
 */

describe('Find all pokemon names heavier than Pikachu - getHeavyPokemons', () => {
  it('Defines getHeavyPokemons', () => {
    expect(typeof getHeavyPokemons).toBe('function');
  });

  it('Should return an array', () => {
    expect(typeof getHeavyPokemons(pokemons)).toBe('object');
  });

  it('Should return 0 if the array is empty', () => {
    expect(getHeavyPokemons([])).toBe(0);
  });

  it('Should return a new array', () => {
    const arr = [];
    expect(getHeavyPokemons(arr)).not.toBe(arr);
  });

  it('Only return the names of the pokemons! Each element should be a string', () => {
    expect(typeof getHeavyPokemons([
      { name: 'aab', weight: '3 kg'},
      {name: 'Pikachu', weight: '2 kg'}
    ])[0]).toBe('string');
  });

  it('Return all pokemons heavier than Pikachu', () => {
    expect(getHeavyPokemons(pokemons).length).toBe(130);
  });

});

/*
 * 6. orderAlphabetically
 */

describe('Order alphabetically - orderAlphabetically', () => {
  it('Defines orderAlphabetically', () => {
    expect(typeof orderAlphabetically).toBe('function');
  });

  it('You should return an array', () => {
    expect(typeof orderAlphabetically([])).toBe('object');
  });

  it('You should not mutate the original array', () => {
    const arr = [{ name: 'xyz' }, { name: 'abc' }];
    orderAlphabetically(arr);
    expect(arr[0].name).toEqual('xyz');
  });

  it('Only return the name of the pokemons! Each element should be a string', () => {
    expect(typeof orderAlphabetically([{ name: 'aab' }])[0]).toBe('string');
  });

  it('If there are less than 20 elements, return all of them.', () => {
    const moviesArr = [{ name: 'aab' }, { name: 'bab' }, { name: 'acb' }];

    expect(orderAlphabetically(moviesArr).length).toEqual(3);
  });

  it('If there are more than 20 elements, return only 20 of them.', () => {
    const moviesArr = [
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' }
    ];

    expect(orderAlphabetically(moviesArr).length).toEqual(20);
  });

  it('You should order them alphabetically.', () => {
    const moviesArr = [
      { name: 'aab' },
      { name: 'aaa' },
      { name: 'abc' },
      { name: 'acb' },
      { name: 'abb' }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      'aaa',
      'aab',
      'abb',
      'abc',
      'acb'
    ]);
  });

  it('You should return the top20 after ordering them alphabetically.', () => {
    const moviesArr = [
      { name: 'aab' },
      { name: 'bab' },
      { name: 'acb' },
      { name: 'aaa' },
      { name: 'bbb' },
      { name: 'anc' },
      { name: 'kns' },
      { name: 'zds' },
      { name: 'pow' },
      { name: 'gda' },
      { name: 'res' },
      { name: 'ter' },
      { name: 'bca' },
      { name: 'ccc' },
      { name: 'bbt' },
      { name: 'qas' },
      { name: 'kmn' },
      { name: 'frt' },
      { name: 'afb' },
      { name: 'agb' },
      { name: 'apo' },
      { name: 'poa' },
      { name: 'cdf' },
      { name: 'sea' },
      { name: 'lom' },
      { name: 'acs' },
      { name: 'qas' },
      { name: 'mns' },
      { name: 'bvc' },
      { name: 'gha' },
      { name: 'lkj' },
      { name: 'era' },
      { name: 'ert' },
      { name: 'tex' },
      { name: 'zas' },
      { name: 'pol' }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      'aaa',
      'aab',
      'acb',
      'acs',
      'afb',
      'agb',
      'anc',
      'apo',
      'bab',
      'bbb',
      'bbt',
      'bca',
      'bvc',
      'ccc',
      'cdf',
      'era',
      'ert',
      'frt',
      'gda',
      'gha'
    ]);
  });
});

/*
 * 7. strongPokemons
 */

describe('Strong pokemons - strongPokemons', () => {
  it('Defines strongPokemons', () => {
    expect(typeof strongPokemons).toBe('function');
  });

  it('Should return an array', () => {
    expect(typeof strongPokemons(pokemons)).toBe('object');
  });

  it('Should return a new array', () => {
    const arr = [];
    expect(strongPokemons(arr)).not.toBe(arr);
  });

  it('Only return the names of the pokemons! Each element should be a string', () => {
    expect(typeof strongPokemons([{ name: 'aab' , weaknesses: ['test']}])[0]).toBe('string');
  });

  it('Return all strong pokemons', () => {
    expect(strongPokemons(pokemons).length).toBe(15);
  });
});
