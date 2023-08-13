class Game {
    constructor() {
        this._state = "Idle"
        this.button = document.getElementById("spinButton")
    }

    logState() {
        console.log("STATE from class: ", this._state)
    }

    get state() {
        return this._state
    }

    set state(newState) {
        this._state = newState
        this.logState()
    }

    whatButton() {
        console.log("dxsfkjghfdhgfdjk", this.button)
    }

    toggleStartButton() {
        this.button.disabled = !this.button.disabled
    }
}

export default new Game