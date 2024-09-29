// 1. Activating Strict Mode
'use strict';
function strictModeExample() {
  let x = 10;
  console.log(x);
}
strictModeExample();

// 2. Functions
function greet(name) {
  console.log('Hello ' + name + '!');
}
greet('Suneel');

// 3. Function Declarations vs. Expressions

// Function Declaration
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// Function Expression
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(2, 3));

// 4. Arrow Functions
const greetUser = (name) => {
  return `Hello, ${name}!`;
};
console.log(greetUser('Suneel'));

// 5. Functions Calling Other Functions
function square(num) {
  return num * num;
}

function displaySquare(n) {
  console.log(`The square of ${n} is: ${square(n)}`);
}
displaySquare(4);

// 6. Basic Array Operations (Methods)

let fruits = ['Apple', 'Banana', 'Mango'];

// Adding and removing elements
fruits.push('Orange');   // Adds Orange to the end
fruits.unshift('Strawberry');  // Adds Strawberry to the beginning
fruits.pop();            // Removes the last item (Orange)
fruits.shift();          // Removes the first item (Strawberry)

// Accessing elements
console.log('First fruit:', fruits[0]);  // Accessing the first element
console.log('Last fruit:', fruits[fruits.length - 1]);  // Accessing the last element

// Finding elements
let index = fruits.indexOf('Banana');
if (index !== -1) {
  console.log('Banana is at index:', index);
}

// Slicing arrays
let slicedFruits = fruits.slice(0, 2);  // Creates a new array with first two elements
console.log('Sliced fruits:', slicedFruits);

// Splicing arrays (inserting and removing elements)
fruits.splice(1, 1, 'Grapes', 'Pineapple');  // Replaces Banana with Grapes and Pineapple
console.log('Fruits after splice:', fruits);

// Merging arrays
let moreFruits = ['Papaya', 'Kiwi'];
let allFruits = fruits.concat(moreFruits);  // Merging two arrays
console.log('All Fruits:', allFruits);




// 7. Introduction to Objects
const person = {
  name: 'Jagadeesh',
  age: 25,
  profession: 'Web Developer'
};
console.log(person);

// 8. Dot vs. Bracket Notation
let car = {
  brand: 'Toyota',
  model: 'Camry'
};
console.log(car.brand);  // Dot notation
console.log(car['model']);  // Bracket notation

// 9. Object Methods
const personDetails = {
  firstName: 'Suneel',
  lastName: 'Kumar',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};
console.log(personDetails.getFullName());

// 10. The for Loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// 11. Looping Arrays, Breaking and Continuing
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) continue;  // Skip 3
  if (numbers[i] === 5) break;  // Stop at 5
  console.log(numbers[i]);
}

// 12. The while Loop
let count = 0;
while (count < 5) {
  console.log('Count is: ' + count);
  count++;
}

// 13. DOM and DOM Manipulation
document.body.style.backgroundColor = 'lightblue';
console.log('Background color changed');

// 14. Selecting and Manipulating Elements
const heading = document.querySelector('h1');
heading.textContent = 'Updated Title!';
console.log('Heading updated');

// 15. Handling Click Events
const button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('Button Clicked!');
});

// 16. Manipulating CSS Styles
const box = document.querySelector('.box');
box.style.width = '200px';
box.style.height = '200px';
box.style.backgroundColor = 'purple';
console.log('Box styles updated');
