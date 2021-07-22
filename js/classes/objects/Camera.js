export default class Camera {
    constructor(x=0, y=0) {
        this.x = x
        this.y = y

        this.state = {down: false, first: [0, 0], last: [0, 0]}

        this.addEventListeners()
    }

    addEventListeners() {
        document.body.addEventListener("mousedown", e => {
            const position = [e.clientX, e.clientY]
            Object.assign(this.state, {down: true, first: position, last: position})
        })

        document.body.addEventListener("mouseup", e => {
            this.state.down = false
        })

        document.body.addEventListener("mousemove", e => {
            if(this.state.down) {
                this.state.last = [e.clientX, e.clientY]
            }
        })
    }

    render({ctx}) {
        if(this.state.down) {
            const {first, last} = this.state
            ctx.strokeStyle = "#000"
            ctx.lineWidth = 4

            ctx.beginPath()
            ctx.moveTo(...first)
            ctx.lineTo(...last)
            ctx.stroke()
        }
    }
}