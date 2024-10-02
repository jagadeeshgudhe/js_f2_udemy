// 1. Start by using Strict Mode
'use strict';
function showStrictModeExample() {
  let x = 10;  // Initialize x with 10
  console.log(x);  // Log x to the console
}
showStrictModeExample();  // Call the function

// 2. Defining a greeting function
function greetUser(name) {
  console.log('Hello ' + name + '!');  // Greeting the user
}
greetUser('Suneel');  // Call greetUser with 'Suneel'

// 3. Understanding Function Declarations and Expressions

// Function Declaration
function addNumbers(a, b) {
  return a + b;  // Return the sum of a and b
}
console.log(addNumbers(2, 3));  // Log the result of adding 2 and 3

// Function Expression
const multiplyNumbers = function(a, b) {
  return a * b;  // Return the product of a and b
};
console.log(multiplyNumbers(2, 3));  // Log the result of multiplying 2 and 3

// 4. Using Arrow Functions
const greetWithArrow = (name) => {
  return `Hello, ${name}!`;  // Return a greeting message
};
console.log(greetWithArrow('Suneel'));  // Log the greeting

// 5. Functions that Call Other Functions
function squareNumber(num) {
  return num * num;  // Return the square of num
}

function displaySquareOfNumber(n) {
  console.log(`The square of ${n} is: ${squareNumber(n)}`);  // Log the square of n
}
displaySquareOfNumber(4);  // Call the function with 4

// 6. Basic Array Operations
let fruits = ['Apple', 'Banana', 'Mango'];

// Add and remove elements from the array
fruits.push('Orange');  // Add Orange to the end of the array
fruits.unshift('Strawberry');  // Add Strawberry to the start
fruits.pop();  // Remove the last element (Orange)
fruits.shift();  // Remove the first element (Strawberry)

// Accessing elements
console.log('First fruit:', fruits[0]);  // Log the first element
console.log('Last fruit:', fruits[fruits.length - 1]);  // Log the last element

// Finding an element's index
let index = fruits.indexOf('Banana');
if (index !== -1) {
  console.log('Banana is at index:', index);  // Log the index of Banana
}

// Slicing the array
let slicedFruits = fruits.slice(0, 2);  // Get the first two elements
console.log('Sliced fruits:', slicedFruits);  // Log the sliced array

// Splicing the array (inserting and removing elements)
fruits.splice(1, 1, 'Grapes', 'Pineapple');  // Replace Banana with Grapes and Pineapple
console.log('Fruits after splice:', fruits);  // Log the updated array

// Merging arrays
let moreFruits = ['Papaya', 'Kiwi'];
let allFruits = fruits.concat(moreFruits);  // Combine the two arrays
console.log('All Fruits:', allFruits);  // Log all fruits

// 7. Introduction to Objects
const person = {
  name: 'Jagadeesh',
  age: 25,
  profession: 'Web Developer'  // Details about a person
};
console.log(person);  // Log the person object

// 8. Dot Notation vs. Bracket Notation
let car = {
  brand: 'Toyota',
  model: 'Camry'  // Car details
};
console.log(car.brand);  // Accessing brand using dot notation
console.log(car['model']);  // Accessing model using bracket notation

// 9. Using Methods in Objects
const personDetails = {
  firstName: 'Suneel',
  lastName: 'Kumar',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;  // Return full name
  }
};
console.log(personDetails.getFullName());  // Log the full name

// 10. The for Loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);  // Log each iteration
}

// Looping through an array with breaks and continues
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) continue;  // Skip the number 3
  if (numbers[i] === 5) break;  // Stop the loop at 5
  console.log(numbers[i]);  // Log the number
}

// The while Loop
let count = 0;
while (count < 5) {
  console.log('Count is: ' + count);  // Log the current count
  count++;  // Increment count
}

// DOM Manipulation
document.body.style.backgroundColor = 'lightblue';  // Change the background color
console.log('Background color changed');  // Log the change

// Selecting and updating elements in the DOM
const heading = document.querySelector('h1');
heading.textContent = 'Updated Title!';  // Change the heading text
console.log('Heading updated');  // Log the update

// Handling Click Events
const button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('Button Clicked!');  // Alert when the button is clicked
});

// Updating CSS styles
const box = document.querySelector('.box');
box.style.width = '200px';  // Set the width
box.style.height = '200px';  // Set the height
box.style.backgroundColor = 'purple';  // Change background color
console.log('Box styles updated');  // Log the style changes
