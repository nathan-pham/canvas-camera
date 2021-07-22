export default class Utils {
    randomFloat(min, max) {
        return Math.random() * (max - min) + min
    }

    randomInt(min, max) {
        return Math.floor(this.randomFloat(min, max))
    }

    distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    }
}