// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    this.diameter = this.radius * 2
  }
  get circumference() {
    this.circumference = 2 * Math.PI * this.radius
  }

  get area() {
    this.area = Math.PI * (this.radius * this.radius)
  }

  set diameter(radius) {
    this.radius = radius
    this.diameter = this.radius * 2
  }
}
