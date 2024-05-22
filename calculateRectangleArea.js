// function calculateArea(length, width) {
//    if (length <= 0 || width <= 0) {
//       throw new Error("Length and width must be positive numbers.");
//    }
//    return length * width;
// }

// const length = 5;
// const width = 3;
// try {
//    const area = calculateArea(length, width);
//    console.log(`The area of the rectangle is: ${area}`);
// } catch (error) {
//    console.error(error.message);
// }

class Rectangle {
   constructor(length, width) {
      if (length <= 0 || width <= 0) {
         throw new Error("Length and width must be positive numbers.");
      }
      this.length = length;
      this.width = width;
   }

   calculateArea() {
      return this.length * this.width;
   }
}

// Example usage:
try {
   const rectangle = new Rectangle(5, 3);
   const area = rectangle.calculateArea();
   console.log(`The area of the rectangle is: ${area}`);
} catch (error) {
   console.error(error.message);
}
