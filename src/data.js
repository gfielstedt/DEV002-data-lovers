/**
 * TODO: JSDoc
 * @param {array} data 
 * @param {string} sortBy 
 * @param {string} sortOrder being ASC or DESC
 * @returns retrurns the array sorted
 */

//order
export const sortData = (data, sortBy, sortOrder) => {
  return data.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      if(sortOrder == 'ASC')
      {
        return 1;
      }
      else {
        return -1;
      }
    }

    if (a[sortBy] < b[sortBy]) {
      if(sortOrder == 'ASC')
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
console.log(data)

/*export const anotherExample = () => {
  return 'OMG';
};*/
