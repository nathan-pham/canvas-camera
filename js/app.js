import Sketch from "./classes/Sketch.js"

import Camera from "./classes/objects/Camera.js"
import Dot from "./classes/objects/Dot.js"
import Utils from "./classes/Utils.js"

const sketch = new Sketch({container: "#canvas__wrapper"})
const generator = new Utils()

for(let i = 0; i < 100; i++) {
    sketch.add(new Dot(
        generator.randomInt(0, sketch.dimensions.width), 
        generator.randomInt(0, sketch.dimensions.height)
    ))
}

sketch.add(new Camera())

sketch.render()