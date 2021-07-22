export default class Sketch {
    constructor({container=document.body}={}) {
        this.container = container

        this.objects = []
        this.step = 0
        
        this.createCanvas()
    }
    
    add(objects) {
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

        for(const object of this.objects) {
            if(typeof object.update == "function") {
                object.update(this)
            }

            if(typeof object.render == "function") {
                object.render(this.ctx)
            }
        }

        window.requestAnimationFrame(() => this.render())
    }
}