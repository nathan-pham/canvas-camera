class Utils {
    globalize() {
        Object.getOwnPropertyNames(Math).forEach(key => {
            window.key = Math[key]
        })
    }

    randomFloat(min, max) {
        return Math.random() * (max - min) + min
    }

    randomInt(min, max) {
        return Math.floor(this.randomFloat(min, max))
    }
}

const utils = new Utils()
export default utils