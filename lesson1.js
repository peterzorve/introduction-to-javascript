console.log("Hello Peter Zorve");

// VARIABLES

// 1. Number 
let number = 10;
console.log(number);
console.log(typeof(number));

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