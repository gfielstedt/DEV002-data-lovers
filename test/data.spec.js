import {filterData} from '../src/data.js';

const arrayEntrada = [
  { name: 'Bulbasaur', type: ['grass', 'poison'], num: 1 },
  { name: 'pikachu', type: ['electric'], num: 25 },
  { name: 'psyduck', type: ['water'], num: 54 },
  { name: 'charmander', type: ['fire'], num: 4 },
  { name: 'charmeleon', type: ['fire'], num: 5 },
  { name: 'togepi', type: ['fairy'], num: 175 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170 },
  { name: 'charizard', type: ['fire', 'flying'], num: 6 },
]

/*const fuegoSalida = [
  { name: 'charmander', type: ['fire'], num: 4 },
  { name: 'charmeleon', type: ['fire'], num: 5 },
  { name: 'charizard', type: ['fire', 'flying'], num: 6 },
]*/

const genUnoSalida = [
  { name: 'Bulbasaur', type: ['grass', 'poison'], num: 1 },
  { name: 'pikachu', type: ['electric'], num: 25 },
  { name: 'psyduck', type: ['water'], num: 54 },
  { name: 'charmander', type: ['fire'], num: 4 },
  { name: 'charmeleon', type: ['fire'], num: 5 },
  { name: 'charizard', type: ['fire', 'flying'], num: 6 },
]

const genDosSalida = [
  { name: 'togepi', type: ['fairy'], num: 175 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170 },
]

/*onst azSalida = [
  { name: 'Bulbasaur', type: ['grass', 'poison'], num: 1 },
  { name: 'charizard', type: ['fire', 'flying'], num: 6 },
  { name: 'charmander', type: ['fire'], num: 4 },
  { name: 'charmeleon', type: ['fire'], num: 5 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170 },
  { name: 'pikachu', type: ['electric'], num: 25 },
  { name: 'psyduck', type: ['water'], num: 54 },
  { name: 'togepi', type: ['fairy'], num: 175 },
]

const zaSalida = [
  { name: 'togepi', type: ['fairy'], num: 175 },
  { name: 'psyduck', type: ['water'], num: 54 },
  { name: 'pikachu', type: ['electric'], num: 25 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170 },
  { name: 'charmeleon', type: ['fire'], num: 5 },
  { name: 'charmander', type: ['fire'], num: 4 },
  { name: 'charizard', type: ['fire', 'flying'], num: 6 },
  { name: 'Bulbasaur', type: ['grass', 'poison'], num: 1 },

]*/



describe('pruebas para la función filterData', () => {

  it('debe retornar un arreglo con gen-1', () => {
    expect(filterData(arrayEntrada, "gen-1")).toEqual(genUnoSalida);
  });
  it('debe retornar un arreglo con gen-2', () => {
    expect(filterData(arrayEntrada, "gen-2")).toEqual(genDosSalida);
  });

});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
