import Utils from "../Utils.js"

const utils = new Utils()

export default class Dot {
    constructor(x=0, y=0) {
        this.x = x
        this.y = y
        this.radius = 10
        this.offset = {x: 0, y: 0}
    }

    render({ctx, camera}) {
        ctx.fillStyle = "#000"

        ctx.strokeStyle = "#fff"
        ctx.lineWidth = 4

        const {mouse: {first, last}} = camera
        const dampen = 0.1
        this.offset.x += (first[0] - last[0]) * dampen
        this.offset.y += (first[1] - last[1]) * dampen

        ctx.beginPath()
        ctx.arc(this.x + this.offset.x, this.y + this.offset.y, this.radius, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.fill()
    }
}