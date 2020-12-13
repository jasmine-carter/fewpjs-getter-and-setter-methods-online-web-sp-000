// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  set diameter(radius) {
    this.diameter = radius + radius
  }
  set circumference(radius) {
    this.circumference = 2 * Math.PI * this.radius
  }
}
