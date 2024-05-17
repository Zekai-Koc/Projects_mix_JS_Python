// function calculateCircleArea(radius) {
//    return Math.PI * radius ** 2;
// }

// const radius = parseFloat(prompt("Enter the radius of the circle: "));
// const area = calculateCircleArea(radius);
// console.log("The area of the circle is:", area);

//

// const readline = require("readline");
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout,
// });

// function calculateCircleArea(radius) {
//    return Math.PI * radius ** 2;
// }

// rl.question("Enter the radius of the circle: ", function (radius) {
//    const area = calculateCircleArea(parseFloat(radius));
//    console.log("The area of the circle is:", area);
//    rl.close();
// });

//

function calculateCircleArea(radius) {
   return Math.PI * radius ** 2;
}

function main() {
   const radius = 5.0;
   const area = calculateCircleArea(radius);
   console.log(`The area of the circle with radius ${radius} is: ${area}`);
}

main();
