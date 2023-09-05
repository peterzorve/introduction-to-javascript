
console.log("Hello Peter Zorve");

// VARIABLES

// 1. Number 
let number = 10;
console.log(number);
console.log(typeof(number));


let x = 7;
let y = 3;
let z = x + y;

console.log("Answer: " + z);
console.log("Answer: ", z);


// 2. String
let name = "Peter Zorve";
console.log(name);


// 3. Array
let myArray = ["Peter Zorve", 10, 50, "150"];
console.log(myArray[2]);
console.log(myArray);

myArray[5] = "Beatrice Enyonam"
console.log(myArray);


const myConstArray = ["Peter Zorve", 10, 50, "150"];
console.log(myConstArray[2]);
console.log(myConstArray);

myConstArray[5] = "Beatrice Enyonam"
console.log(myConstArray); 


// Add the the end 
myConstArray.push("Asigbey")
console.log(myConstArray); 

// Add the the beginning 
myConstArray.unshift("Daniel")
console.log(myConstArray); 

// 4. Object
let myObject = {
    name: "Peter Zorve", 
    age: 30,
    education: "University"
    }


console.log(myObject);
console.log(myObject.education);
console.log(myObject["education"]);


function addition(number1, number2) {
    result = number1 + number2;
    return result 
}


add = addition(10, 15)
console.log(add) 


// Convert one datatype to the other 

let a = "9"
let b = 6
let c = a + b 
console.log(c)


let d = "9"
d = parseInt(d, 10)  // 10 here is decimal 10 
let e = 6
let f = d + e 

console.log(f)


// Categories of Operators 

// Assignment = 
// Arithmetic + - * / %
// Increment / Decrement ++ -- 
// String Operators  
// Precedence  1 + 2 * 3 
// Function invocation operators ()
// Logical and: && or: ||  
// Member accessor operators 
// Code block operator {}
// Array element access operators []

var number1 = 1; 
number1++
console.log(number1)

let myItems = ["120", 450, true, false]

console.log("length of the items: ", myItems.length)