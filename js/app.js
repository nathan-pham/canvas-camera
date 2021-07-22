import Sketch from "./classes/Sketch.js"
import Dot from "./classes/objects/Dot.js"

import utils from "./Utils.js"

utils.globalize()

const sketch = new Sketch({container: "canvas__wrapper"})

sketch.render()