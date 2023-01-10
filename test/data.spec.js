import {filterData, sortData, computeStats} from '../src/data.js';

const arrayEntrada = [
  { name: 'bulbasaur', type: ['grass', 'poison'], num: 1 },
  { name: 'pikachu', type: ['electric'], num: 25 },
  { name: 'psyduck', type: ['water'], num: 54 },
  { name: 'charmander', type: ['fire'], num: 4 },
  { name: 'charmeleon', type: ['fire'], num: 5 },
  { name: 'togepi', type: ['fairy'], num: 175 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170 },
  { name: 'charizard', type: ['fire', 'flying'], num: 6 },
]

const genUnoSalida = [
  { name: 'bulbasaur', type: ['grass', 'poison'], num: 1 },
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

const azSalida = [
  { name: 'bulbasaur', type: ['grass', 'poison'], num: 1 },
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
  { name: 'bulbasaur', type: ['grass', 'poison'], num: 1 },

]

const estadisticaSalida = "25.00"

//Test filterData

describe('Pruebas para la función filterData', () => {

  it('Debe retornar un arreglo con gen-1', () => {
    expect(filterData(arrayEntrada, "gen-1")).toEqual(genUnoSalida);
  });
  it('Debe retornar un arreglo con gen-2', () => {
    expect(filterData(arrayEntrada, "gen-2")).toEqual(genDosSalida);
  });

});

//Test sortData

describe('Pruebas para la función sortData', () => {
  
  it('Debe retornar un arreglo con la data ordenada de forma ascendente A-Z', () => {
    expect(sortData(arrayEntrada, 'name', 'ASC')).toEqual(azSalida);
  });

  it('Debe retornar un arreglo con la data ordenada de forma descendente Z-A', () => {
    expect(sortData(arrayEntrada, 'name', 'DESC')).toEqual(zaSalida);
  });

});

//Test computeStats

describe ('Prueba para la función computeStats ', () => {
  it('debe ser una función', () => {
    expect(typeof computeStats ).toBe('function');
  });
});

describe('Prueba para la función computeStats', () => {

  it('Debe retornar un número que contenga el porcentaje de tipo agua', () => {
    expect(computeStats('water',arrayEntrada)).toEqual(estadisticaSalida);
  });
});

