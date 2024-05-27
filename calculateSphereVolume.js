// function calculateSphereVolume(radius) {
//    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
//    return volume;
// }

// var radius = parseFloat(prompt("Enter the radius of the sphere:"));
// var volume = calculateSphereVolume(radius);
// console.log("The volume of the sphere is: " + volume);

// function power(base, exponent) {
//    let result = 1;
//    for (let i = 0; i < exponent; i++) {
//       result *= base;
//    }
//    return result;
// }

// function calculateSphereVolume(radius) {
//    var volume = (4 / 3) * Math.PI * power(radius, 3);
//    return volume;
// }

// var radius = parseFloat(prompt("Enter the radius of the sphere:"));
// var volume = calculateSphereVolume(radius);
// console.log("The volume of the sphere is: " + volume);

class Sphere {
   constructor(radius) {
      this.radius = radius;
   }

   volume() {
      return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
   }
}

const radius = parseFloat(prompt("Enter the radius of the sphere:"));
const sphere = new Sphere(radius);
console.log("The volume of the sphere is: " + sphere.volume());
