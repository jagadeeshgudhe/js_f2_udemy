// 1. Start by using Strict Mode
'use strict';
function showStrictModeExample() {
  let x = 10;  
  console.log(x);  
}
showStrictModeExample();  

// 2. Defining a greeting function
function greetUser(name) {
  console.log('Hello ' + name + '!');  
}
greetUser('Suneel');  

// 3. Function Declaration for Addition
function add(a, b) {
  return a + b;  
}
console.log(add(2, 3));  

// 4. Function Expression for Multiplication
const multiply = function(a, b) {
  return a * b;  
};
console.log(multiply(2, 3));  

// 5. Using Arrow Functions for Greeting
const greetUserArrow = (name) => {
  return `Hello, ${name}!`;  
};
console.log(greetUserArrow('Suneel'));  

// 6. Functions Calling Other Functions
function square(num) {
  return num * num;  
}
function displaySquare(n) {
  console.log(`The square of ${n} is: ${square(n)}`);  
}
displaySquare(4);  

// 7. Basic Array Operations (Methods)
let fruits = ['Apple', 'Banana', 'Mango'];
// Adding and removing elements
fruits.push('Orange');   
fruits.unshift('Strawberry');  
fruits.pop();            
fruits.shift();          
// Accessing elements
console.log('First fruit:', fruits[0]);  
console.log('Last fruit:', fruits[fruits.length - 1]);  
// Finding elements
let index = fruits.indexOf('Banana');
if (index !== -1) {
  console.log('Banana is at index:', index);  
}
// Slicing arrays
let slicedFruits = fruits.slice(0, 2);  
console.log('Sliced fruits:', slicedFruits);  
// Splicing arrays (inserting and removing elements)
fruits.splice(1, 1, 'Grapes', 'Pineapple');  
console.log('Fruits after splice:', fruits);  
// Merging arrays
let moreFruits = ['Papaya', 'Kiwi'];
let allFruits = fruits.concat(moreFruits);  
console.log('All Fruits:', allFruits);  

// 8. Introduction to Objects
const person = {
  name: 'Jagadeesh',
  age: 25,
  profession: 'Web Developer'  
};
console.log(person);  

// 9. Dot vs. Bracket Notation
let car = {
  brand: 'Toyota',
  model: 'Camry'  
};
console.log(car.brand);  
console.log(car['model']);  

// 10. Object Methods
const personDetails = {
  firstName: 'Suneel',
  lastName: 'Kumar',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;  
  }  
};
console.log(personDetails.getFullName());  

// 11. The for Loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);  
}

// 12. Looping Arrays, Breaking and Continuing
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) continue;  
  if (numbers[i] === 5) break;  
  console.log(numbers[i]);  
}

// 13. The while Loop
let count = 0;
while (count < 5) {
  console.log('Count is: ' + count);  
  count++;  
}

// 14. DOM and DOM Manipulation
document.body.style.backgroundColor = 'lightblue';  
console.log('Background color changed');  

// 15. Selecting and Manipulating Elements
const heading = document.querySelector('h1');
heading.textContent = 'Updated Title!';  
console.log('Heading updated');  

// 16. Handling Click Events
const button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('Button Clicked!');  
});

// 17. Manipulating CSS Styles
const box = document.querySelector('.box');
box.style.width = '200px';  
box.style.height = '200px';  
box.style.backgroundColor = 'purple';  
console.log('Box styles updated');  
