export default class Utils {
    randomFloat(min, max) {
        return Math.random() * (max - min) + min
    }

    randomInt(min, max) {
        return Math.floor(this.randomFloat(min, max))
    }
}