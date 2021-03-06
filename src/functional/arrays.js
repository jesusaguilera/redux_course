const numbers = [1, 2, 3];

// Adding at the end
let addedLast =  [...numbers, 4];
console.log("Added at last", addedLast);

// Adding in the beginning
let addedInit =  [4, ...numbers];
console.log("Added at first", addedInit);

// Adding in X position
let index = numbers.indexOf(2);
console.log("index", index)
let addedInPositionTwo =  [
  ...numbers.slice(0, index), 
  4, 
  ...numbers.slice(index)
];
console.log("Added at second position", addedInPositionTwo);


// Removing
let removedTwo = numbers.filter(n => n !== 2);
console.log("Removed 2", removedTwo);


// Update
let updateTwo = numbers.map(n => n === 2 ? 50 : n);
console.log("Update 2", updateTwo);


// Get user from array objects of users through its name and surname
const users = [
  {id: 1, name: "Marty", surname: "McFly"},
  {id: 2, name: "Helen", surname: "Reagan"},
  {id: 3, name: "Susan", surname: "Sogan"},
];
const user = users.findIndex(u => u.name === "Helen" && u.surname === "Reagan");
console.log(users[user]);
