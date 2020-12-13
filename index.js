// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2
  }
  get circumference() {
    this.circumference = 2 * Math.PI * this.radius
  }

  get area() {
    this.area = Math.PI * (this.radius * this.radius)
  }

  set diameter(diameter) {
    this.radius = diameter/2
  }

  set area(area) {
    this.radius = Math.sqrt(area/Math.PI)
  }
}
