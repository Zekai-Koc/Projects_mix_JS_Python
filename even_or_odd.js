// function checkEvenOrOdd(number) {
//    if (number % 2 === 0) {
//       console.log(number + " is even.");
//    } else {
//       console.log(number + " is odd.");
//    }
// }

// // Example usage:
// let number = 4;
// checkEvenOrOdd(number);

// function checkEvenOrOdd(number) {
//    if ((number & 1) === 0) {
//       console.log(number + " is even.");
//    } else {
//       console.log(number + " is odd.");
//    }
// }

// // Example usage:
// let number = 4;
// checkEvenOrOdd(number);

function checkEvenOrOdd(number) {
   if (Math.floor(number / 2) * 2 === number) {
      console.log(number + " is even.");
   } else {
      console.log(number + " is odd.");
   }
}

// Example usage:
let number = 4;
checkEvenOrOdd(number);
