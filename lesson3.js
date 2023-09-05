let number = 100;

if (number === 10) {
    console.log("Number is 10");
}
else if (number > 10) {
    console.log("number is greater than 10")
}
else {
    console.log("number is less than 10")
}


let character = "superman";

switch (character.toLowerCase()) {
    case "superman":
        console.log("super strong");
        console.log("x-ray vision");
        console.log("dark suit");
        break;
    case "batman":
        console.log("barely strong");
        console.log("bat animals");
        console.log("joker friend");
        break;
    default:
        console.log("Science fiction character")
}