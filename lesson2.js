// for (let i = 1; i <= 10; i++) {
//     console.log(`for loop number ${i}`, i);
// }


// FUNCTIONS 

function greeting(name) {
    console.log("=========================");
    console.log("Hello ", name);
    console.log("=========================");
}
greeting("Peter")



function calculateTax(amount) {
    let result = amount * 0.24;
    return result
}


let taxAmount = calculateTax(100);
console.log(taxAmount);

// Timeout function 
setTimeout(function() {
    console.log("I waited 2 seconds");
}, 2000);
