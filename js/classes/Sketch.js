export default class Sketch {
    constructor({container=document.body}={}) {
        this.container = typeof container == "string" ? document.querySelector(container) : container
        this.dimensions = {width: this.container.offsetWidth, height: this.container.offsetHeight}
        this.objects = []
        this.step = 0
        
        this.createCanvas()

        this.resize()
        document.addEventListener("resize", () => this.resize())
    }
    
    resize() {
        const pixelize = (dimensions) => (
            Object.keys(dimensions).reduce((acc, cur) => ({
                ...acc,
                [cur]: dimensions[cur] + "px"
            }), {})
        )

        Object.assign(this.canvas, this.dimensions)
        Object.assign(this.canvas.style, pixelize(this.dimensions))
    }
    
    add(...objects) {
        for(const object of objects) {
            this.objects.push(object)
        }
    }

    createCanvas() {
        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext("2d")

        this.container.appendChild(this.canvas)
    }

    render() {
        this.step += 0.05

        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)

        for(const object of this.objects) {
            if(typeof object.update == "function") {
                object.update(this)
            }

            if(typeof object.render == "function") {
                object.render(this)
            }
        }

        window.requestAnimationFrame(() => this.render())
    }
}