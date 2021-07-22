export default class Dot {
    constructor(x=0, y=0) {
        this.x = x
        this.y = y
        this.radius = 10
    }

    render(ctx) {
        ctx.fillStyle = "#000"

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }
}

console.log(sin(100))