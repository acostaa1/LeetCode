/**
 * @param {string} s
 * @return {number}
 */

const romanToInt =  (roman) => {
  let result = 0;
  const romanArr = roman.split('')
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  
  for (let i=0; i<romanArr.length; i++) {
    if (obj[romanArr[i]] < obj[romanArr[i+1]]) {
      result += (obj[romanArr[i+1]] - obj[romanArr[i]]);
      i++;
    }
    else {
      result += obj[romanArr[i]]
    }
  }
  return result;
}