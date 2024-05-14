function calculateSphereVolume(radius) {
   var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
   return volume;
}

var radius = parseFloat(prompt("Enter the radius of the sphere:"));
var volume = calculateSphereVolume(radius);
console.log("The volume of the sphere is: " + volume);
