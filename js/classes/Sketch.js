import Camera from "./objects/Camera.js"

export default class Sketch {
    constructor({container=document.body, control}={}) {
        this.container = typeof container == "string" ? document.querySelector(container) : container
        this.dimensions = {width: this.container.offsetWidth, height: this.container.offsetHeight}
        this.objects = []
        this.step = 0
        
        this.createCanvas()

        if(control) {
            this.controlType = control.toLowerCase().trim()
            this.createControl()
        }

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

    createControl() {
        switch(this.controlType) {
            case "pan":
            default:
                this.camera = new Camera()
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
        
        if(this.camera) {
            this.ctx.save()
            const dampen = 0.1

            const {mouse: {first, last}} = this.camera
            this.camera.offset.x += (first[0] - last[0]) * dampen
            this.camera.offset.y += (first[1] - last[1]) * dampen

            this.ctx.translate(this.camera.offset.x, this.camera.offset.y)
            this.ctx.scale(this.camera.scroll, this.camera.scroll)
        }

        for(const object of this.objects) {
            if(typeof object.update == "function") {
                object.update(this)
            }

            if(typeof object.render == "function") {
                object.render(this)
            }
        }

        if(this.camera) {
            this.ctx.restore()
        }

        window.requestAnimationFrame(() => this.render())
    }
}