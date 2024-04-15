const name = "khushi"
const repoCount = 50

// console.log(name + repoCount + "Value") not recommended


// **** String Interpolation**** ----------here we create placeholders and inject values
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`,)


const gameName = new String('Khushi-ki-hi')  //String is a Object --Key value Pair

console.log(gameName[0]);
console.log(gameName.__proto__);           //gives object {}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));    //character at position 2

// console.log(gameName.indexOf('s'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,-4)  
console.log(anotherString)

const newString1 = "  khushii   ";
console.log(newString1)
console.log(newString1.trim())

const url = "https://hitesh.com/hitesh%20Choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))




