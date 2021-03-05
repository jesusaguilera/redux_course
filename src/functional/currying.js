function add(a) {
  return function(b) {
    return a + b;
  }
}

let addTwo = a => b => a + b;

const add1 = add(1)(4);
const add2 = addTwo(4)(4);
console.log("add1", add1);
console.log("add2", add2);
