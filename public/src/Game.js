export default class Game {
    constructor() {
        this.state = "Idle"
    }

    get state() {
        return this.state
    }

    set state(newState) {
        this.state = newState
    }
}