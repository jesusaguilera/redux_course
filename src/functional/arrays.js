const numbers = [1, 2, 3];

// Adding
let addedLast =  [...numbers, 4];
let addedInit =  [4, ...numbers];
let index = numbers.indexOf(2);
let addedInPositionTwo =  [
  ...numbers.slice(0, index), 
  4, 
  ...numbers.slice(index)
];
console.log("Added at last", addedLast);
console.log("Added at init", addedInit);
console.log("Added at second position", addedInPositionTwo);


// Removing
let removedTwo = numbers.filter(n => n !== 2);
console.log("Removed 2", removedTwo);


// Update
let updateTwo = numbers.map(n => n === 2 ? 50 : n);
console.log("Update 2", updateTwo);
