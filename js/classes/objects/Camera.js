export default class Camera {
    constructor(x=0, y=0) {
        this.x = x
        this.y = y

        this.mouse = {down: false, first: [0, 0], last: [0, 0]}
        this.scroll = 1

        this.addEventListeners()
    }

    addEventListeners() {
        document.body.addEventListener("mousedown", e => {
            const position = [e.clientX, e.clientY]
            Object.assign(this.mouse, {down: true, first: position, last: position})
        })

        document.body.addEventListener("mouseup", e => {
            Object.assign(this.mouse, {down: false, first: [0, 0], last: [0, 0]})
        })

        document.body.addEventListener("mousemove", e => {
            if(this.mouse.down) {
                this.mouse.last = [e.clientX, e.clientY]
            }
        })

        window.addEventListener("wheel", e => {
            this.scroll += e.deltaY < 0 ? 0.1 : -0.1
        })
    }

    render({ctx}) {
        if(this.mouse.down) {
            const {first, last} = this.mouse
            ctx.strokeStyle = "#000"
            ctx.lineWidth = 4

            ctx.beginPath()
            ctx.moveTo(...first)
            ctx.lineTo(...last)
            ctx.stroke()
        }
    }
}