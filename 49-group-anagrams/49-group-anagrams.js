/**
 * @param {string[]} strs
 * @return {string[][]}
 */


const groupAnagrams = (arr) => {
  
  const result = [];
  const store = {}; // keep track of letters of each word
  for (let word of arr) {
    let sorted = word.split('').sort().join('')
    if (!(sorted in store)) {
      store[sorted] = [sorted]; //[sorted] || []
    }
    store[sorted].push(word);//store[sorted].push(word)
  }
  for(let val of Object.values(store)) {
    //console.log(val)
    if (val.length >= 2) {
     result.push(val)
   }
  }
  return result.map((a)=> a.splice(1, a.length -1));
}