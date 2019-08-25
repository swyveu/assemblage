class Vector {
    constructor(x=0, y=0) {
        this.x = x
        this.y = y
    }
    negate() {
        return new Vector(-this.x, -this.y)
    }
    add(vector) {
        if (!vector) return 'err: no vector specified'
        return new Vector(this.x + vector.x, this.y + vector.y)
    }
    subtract(vector) {
        return this.add(vector.negate())
    }
    multiply(scalar=1) {
        return new Vector(this.x * scalar, this.y * scalar)
    }
    divide(scalar=1) {
        if (scalar === 0) return new Vector()
        else              return this.multiply(1/scalar)
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y
    }
    length() {
        return Math.sqrt(this.dot(this))
    }
    normalize() {
        return this.divide(this.length())
    }
}


/* -------------------------------------------------------------------------------- */

const vec = new Vector()
