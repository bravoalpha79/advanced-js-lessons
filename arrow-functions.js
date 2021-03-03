/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function


// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
   return a + b;
}

let sum = addTwoNumbers(3, 12);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(3, 12);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething("Hello!");

const sayGoodMorning = () => console.log("Good morning!");
sayGoodMorning();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
      This is a multiline string
    </p>`
)
console.log(returnMultipleLines());
