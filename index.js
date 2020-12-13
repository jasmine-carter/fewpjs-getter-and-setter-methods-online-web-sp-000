// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter(radius) {
    this.diameter = radius + radius
  }
  get circumference() {
    this.circumference = 2 * Math.PI * this.radius
  }

  get area() {
    this.area = Math.PI * (this.radius * this.radius)
  }
}
