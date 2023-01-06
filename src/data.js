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

export const computeStats = (type, data) =>{
  const x = data.filter(element => element.type.includes(type))
  return ((x.length * 100) / data.length).toFixed(2)
}
  