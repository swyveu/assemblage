class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y)
    }
    negate() {
        return new Vector(-this.x, -this.y)
    }
    subtract(vector) {
        return this.add(vector.negate())
    }
}

