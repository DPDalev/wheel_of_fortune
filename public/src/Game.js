import { sectors } from "./gameData.js";

class Game {
    constructor() {
        this._state = "Idle";
        this._index = 0;
        this.button = document.getElementById("spin-button");
    }
    
    get state() {
        return this._state;
    }
    
    set state(newState) {
        this._state = newState;
    }
    
    get index() {
        return this._index;
    }
    
    logState() {
        console.log("STATE: ", this._state);
    }
    
    toggleStartButton() {
        this.button.disabled = !this.button.disabled;
    }

    incrementIndex() {
        this._index++;
        if (this._index >= sectors.length) {
            this._index = 0;
        }
    }
}

export default new Game;