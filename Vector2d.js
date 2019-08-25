class Vector2d {
    constructor(x=0, y=0) {
        this.x = x
        this.y = y
    }
    negate() {
        return new Vector(-this.x, -this.y)
    }
    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y)
    }
    subtract(vector) {
        return this.add(vector.negate())
    }
    multiply(scalar) {
        return new Vector(this.x * scalar, this.y * scalar)
    }
    divide(scalar) {
        if (scalar === 0) return new Vector()
        else              return this.multiply(1/scalar)
    }
}
