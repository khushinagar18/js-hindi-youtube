//primitive data types----Call by Value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100   //============JS is Dynamically Typed(data type decide dynamically)
const scoreValue = 100.3

const isLoggedIn = false  //bollean
const outsideTemp = null 
let userEmail;     //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const bigNumber = 37862462876286482n  //bigInt
console.log(bigNumber)


// Non Primitive data types(Reference)
// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];  //array


let myObj = {
    name : "hitesh",         //Object
    age : 22,
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp)   //null-->Object
console.log(typeof myFunction)    //Function Object




