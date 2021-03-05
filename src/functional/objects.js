// Immutability
const person = {
  name: "John", 
  address : {
    contry : "USA",
    city: "San Francisco",
  }
};

// Object.assign copies a object (where, aka empty object, origin object to copy, if you want to update any property);
let a = Object.assign({}, person, {name: "Mary"});

// Same like a but short way
let b = {...person, name: "Mary"}; 


console.log(person);
console.log(a);
console.log(b);
