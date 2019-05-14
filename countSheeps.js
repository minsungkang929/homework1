/*
Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.
*/

function countSheeps(arrayOfSheep) {
  // TODO
  let count = 0;
  for(let i = 0; i < arrayOfSheep.Length; i++){
   if(arrayOfSheep[i]) count++; 
  }
  return count;
}

var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
console.log(countSheeps(array1) === 17));
// TODO write more tests!
