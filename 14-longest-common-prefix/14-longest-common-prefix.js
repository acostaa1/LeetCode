/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(arr) {
  let result = ''; 
  let j = 0;
  if (arr.length === 1) return arr[0]; //edge case
  for (let letter of arr[0]) { 
   
    let count = 0;
    for (let i=0; i< arr.length -1 ; i++) { 
      if (letter === arr[i+1][j]) {
        count++; 
      } else {
        return result;
      }
      if(count === arr.length -1) { 
        j++;
        result += letter;
      }
    }
  }
  return result;
};