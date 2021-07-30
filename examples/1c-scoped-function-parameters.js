"use strict";

function printGreeting(name) {
  console.log(`Hello, ${name}!`);
  return name;
}

printGreeting("Richard");
printGreeting("Natalya");

// below line will error
console.log("The name chosen was", printGreeting("Hello"));

console.log("Programme complete!")