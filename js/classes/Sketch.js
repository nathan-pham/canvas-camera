export default class Sketch {
    constructor({container=document.body}={}) {
        this.container = container

        this.objects = []
        this.step = 0
        
        this.createCanvas()
    }
    
    add(...objects) {
        this.objects.push(...objects)
    }

    createCanvas() {
        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext("2d")

        this.container.appendChild(this.canvas)
    }

    render() {
        this.step += 0.05

        for(const object of this.objects) {
            if(typeof object.update == "function") {
                object.update(this)
            }

            object.render()
        }

        window.requestAnimationFrame(() => this.render())
    }
}