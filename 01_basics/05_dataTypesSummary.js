//two type data types 
// 1. Primitive data types
// primitive data types is a call back values (driect memmery not allocated).

// 7 types :- String , Number , Boolean , null , undefiend ,Symbol , BigInt


const id = Symbol('123');
const newId = Symbol('123');

console.log(id === newId);  /// symbol is use for return unique value.

const bigNumer = 1234566789n

// 2. Non perimitive or reference type(directo memmoy allocation is provided) :-

// 3 types :- Array , Objects , Functions

let car = ["punch", "harrier", "creata"];

let userDetails = {
    name :'Himanshee Pawar',
    email: 'abc@gmail.com',
    number: 8827727902
}


let myFunction = function(){
    console.log('Hello World!');
}
myFunction();

console.log(typeof(bigNumer));
console.log(typeof(myFunction));
