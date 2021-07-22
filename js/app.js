import Sketch from "./classes/Sketch.js"

import Camera from "./classes/objects/Camera.js"
import Dot from "./classes/objects/Dot.js"
import Utils from "./classes/Utils.js"

const sketch = new Sketch({container: "#canvas__wrapper"})
const utils = new Utils()

for(let i = 0; i < 100; i++) {
    sketch.add(new Dot(
        utils.randomInt(0, sketch.dimensions.width), 
        utils.randomInt(0, sketch.dimensions.height)
    ))
}

const camera = new Camera()
sketch.camera = camera
sketch.add(camera)

sketch.render()