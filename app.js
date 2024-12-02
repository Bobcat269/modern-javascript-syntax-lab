//1
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const nums2 = nums.map((currentElement) => {
    return currentElement*2
})
console.log(nums2);

//2
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [topp1, topp2] = pizzaToppings

console.log(topp1);
console.log(topp2);


//3
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
const {make, model} = car

console.log(make, model);


//but how would we destructure an array of objects?
const cars = [
    {
        make: 'Audi',
        model: 'q5',
      },
      {
        make: 'Kia',
        model: 'Sorento',
      },
      {
        make: 'Honda',
        model: 'Civic',
      }
]
const pairs = cars.map((currentElement) => {
    const {make, model} = currentElement
    return `${make}: ${model}`
})
console.log(cars);
console.log(pairs);
//Neat

//4
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const dupeToppings = [...pizzaToppings2]

console.log(dupeToppings);


//5
// Duplicate the following object and spread its values into a new variable `myCar`.

const car2 = {
    make: 'Audi',
    model: 'q5',
  };
  

  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  const myCar = {...car2}  
myCar.model = 'q7'
console.log(car2, myCar);


// Dynamic Keys
const fruitInventory = {
    apples: 2,
    oranges: 4,
  };
  
  const selectedFruit = 'apples'; // Variable as a dynamic key
  const selectedFruitCount = fruitInventory[selectedFruit];
  
  console.log(selectedFruitCount); // 2
  
  const fruitType = 'bananas'; // Variable as a dynamic key

const fruitInventory2 = {
  [fruitType]: 5,
};

console.log(fruitInventory2); // { bananas: 5 }


//6
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const userProfile = {
    username: 'BobbyHill',
    email: 'Dangitbobby@propane.com'
}
const propertyName = 'email'

userProfile[propertyName]='Dangitbobby@StricklandPropane.com'

console.log(userProfile);



//Named exports: For exporting multiple items from a file:
// export const myNumber = 123;
// export const myString = 'Hello';

//Default exports: For exporting a single item from a file:
// export default function superCoolFunction() {
//     /* ... */
//   }
  
//examples

// import { myNumber, myString } from './myData.js';

// import superCoolFunction from './superCoolFunction.js';

//import all named exports as a single object 
// import * as MyData from './myData.js';
//   console.log(MyData.myNumber);
//   console.log(MyData.myString);
  



//example of default params (will be used if no val received.)
  function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
    return numA + numB + numC;
  }
  //what if we pass nulls?
  console.log(
   addThreeNumbers(2,null));
  //will this return 3?


 //8
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function sentence(noun = 'cat', adjective = 'white') {
    return `The ${noun} is ${adjective}.`
}

console.log(sentence('monkey'));

//can I pass only a specific param?
console.log(sentence(undefined,'green'));

// closer but not what we are looking for......
console.log(sentence({adjective:'blue'}));


//ask Matt why we need brackets in order to do this?
//is it because we are making noun and adjective objects in this functin?
function weirdSentence({noun = 'spoon', adjective = 'perfect'}) {
    return `My ${noun} is ${adjective}.`
}

console.log(weirdSentence({adjective:'too big'}));



//TERNARY OPERATORS
// const age = 22;
// let access;

// if (age > 21) {
//   access = 'Yes';
// } else {
//   access = 'No';
// }

// console.log(access); // 'Yes'
//Becomes 
const age = 22;
let access = age > 21 ? 'Yes' : 'No';

console.log(access); // 'Yes'


//9
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here
console.log(pizza === 'tasty' ? 'yum' : 'yuck');

//BOOLEAN GATES
// const result = false && 'foo';
// console.log(result); // Output: false

// const result2 = 'hello' && false;
// console.log(result2); // Output: ''  becauce empty string is falsy?

// const result3 = '' || 'foo';
// console.log(result); // Output: 'foo'


//THESE WILL ALWAYS RETURN THE LAST VALUE IF NO TRUTHY/FALSY VALUE IS FOUND

//This will throw an error unless you declare myVar
let myVar
const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;
const result4 = myVar || 3000;

console.log('result1:', result1);
console.log('result2:', result2);
console.log('result3:', result3);
console.log('result4:', result4);

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
let LANG = localLangConfig || 'English'

// Log the result
console.log('Language setting:', LANG);


// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
let USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('User theme setting:', USER_THEME);



//optional chaining allows you to reference objects that don't exist yet.  (they may be added later)
// const adventurer2 = {
//     name: 'Alice',
//   };
  
//   let dog = adventurer.dog?.name;
  
//   console.log(dog); // undefined
  

  //11
  // Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.name;; // Your code here
  
  console.log(cat);


  
// const adventurer3 = {
//     name: 'Alice',
//     cat: {name: 'Charlene'}
//   };
//   let cat2 = adventurer3.cat?.name;; // Your code here
  
//   console.log(cat2);
  