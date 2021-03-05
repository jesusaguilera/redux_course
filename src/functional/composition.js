let input = "    Javascript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim(); 
const wrapInDiv = str => `<div> ${src} </div>`;
const toLowerCase = str => str.toLowerCase();


const result = wrapInDiv(toLowerCase(trim(input)));
console.log(result);
