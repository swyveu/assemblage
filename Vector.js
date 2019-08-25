class Vector {
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

    multiply(scalar=1) {
        return new Vector(this.x * scalar, this.y * scalar)
    }

    divide(scalar=1) {
        return this.multiply(1/scalar)
    }

    dot(vector) {
        return this.x * vector.x + this.y * vector.y
    }

    length() {
        return Math.sqrt(this.dot(this))
    }

    angle() {
        return Math.atan2(this.y, this.x)
    }

    angleTo(vector) {
        return Math.acos(this.dot(vector) / (this.length() * vector.length()));
    }

    normalize() {
        return this.divide(this.length())
    }

    equals(vector) {
        return (this.x === vector.x && this.y === vector.y)
    }

    /* ------------------------------------------ */

    static fromAngle(angle, length = 1) {
        return new Vector(Math.cos(angle) * length, Math.sin(angle) * length)
    }

}

