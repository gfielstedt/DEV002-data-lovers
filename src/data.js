//filter

import pokemon from "./data/pokemon/pokemon.js";

export const filterData = (data,condition) => {
  if (condition== "gen-1") {
    return data.filter((data) => {
      return data.num <= 151;
    });
  }
  if( condition=="gen-2"){
    return data.filter((data) => {
      return data.num > 151;
    });
  }
  return data
};

//order

export const sortData = (data, sortBy, sortOrder) => {
  return data.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      if(sortOrder == "ASC")
      {
        return 1;
      }
      else {
        return -1;
      }

    }

    if (a[sortBy] < b[sortBy]) {
      if(sortOrder == "ASC")
      {
        return -1;
      }
      else {
        return 1;
      }
    }
    return 0;
  });

};

//compute 

//saber cuantas pelotas hay en una piscina
//data.lenght
export const filterType = (type, data) =>{
  const x = data.filter(element => element.type == type)
  return x
  }
   /*const computeStats = (poke) => {
const totalDePokemon = poke.length
const totalPokeAgua = filterType("water",poke ).length

console.log(totalDePokemon)



  console.log(totalPokeAgua)*/








//separarlas por color 
//recorer la data y hacer includes de type

//sacar porcentaje de cuantas hay por color en relacion al total
// una regla de 3 = 

