/* JAVASCRIPT MAD LIBS — FULL-BLOCK STARTER
   Write your OWN prompt questions and story. This file deliberately does not contain a completed answer.
   Keep your JavaScript here, not inside index.html.
*/

// PART 1 — INPUTS AND VARIABLES
// TODO: Ask for AT LEAST 6 words/text responses and 2 numbers with prompt().
// TODO: Save all responses in meaningfully named variables using let or const.
 const animal = prompt ("enter an animal")
const  place = prompt ("enter a place")
const adjective1 = prompt ("add an adjective")
const adjective2 = prompt ("add another adjective")
const verb = prompt ("enter an action verb")
const food = prompt ("enter a food")


let age = Number(prompt("Enter a number for age:"));
let count = Number(prompt("Enter another number:"));






// PART 3 — VARIABLE CHANGES AND CONCATENATION
// TODO: Reassign one let variable after its first value (use the updated value).
// TODO: Combine a quoted string and a variable with +; show the result.
age = age + 5;

let message = "Welcome to the grand story of the " + adjective1 + " " + animal + "!";
console.log(message);
// PART 4 — MATH OPERATORS
// TODO: Use ALL six operators with numeric values: +  -  *  /  %  **
// TODO: Store each result in a clearly named variable.
// TODO: Use at least TWO math results in your final story.
const sum = age + count ; //addition
const difference = age - count; //subtraction
const product = age * count; //Multiplication
const quotient = age / count;  // division
const remainder = age % count;  //modulus or Remainder
const power = age ** count; //exponents or Power

// PART 5 — STORY (TEMPLATE LITERAL)
// TODO: Build one original story with BACKTICKS and ${variableName}.
// TODO: Include ALL eight prompt responses, plus at least two math results.
let story = `Once upon a time, a ${age}-year old ${adjective1} ${animal} lived at ${place} as they sat comfortably at this place it loved to go and live in was ${verb} its lifestyle was incredibly ${adjective2} it loved to eat ${count} lbs of ${food} every day its power level is ${power} meaning it could easily survive for ${sum} years!`;
// PART 6 — DISPLAY ON THE WEBPAGE
// TODO: Uncomment and complete the line below once your story variable exists.
document.getElementById("madlib-output").innerHTML = story;

// FINAL: Add at least three meaningful comments describing your code.
// TEST: Try TWO sets of answers and check the browser console for errors.









