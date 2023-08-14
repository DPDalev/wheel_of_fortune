import Game from "./Game.js";
import Wheel from "./Wheel.js";
import WinManager from "./WinManager.js";


class FreeSpinsManager {
    constructor() {
        this._freeSpinsCount = 0;
    }

    get freeSpinsCount() {
        return this._freeSpinsCount;
    }

    set freeSpinsCount(value) {
        this._freeSpinsCount = value;
    }

    init() {
        Game.state = "Free Spins";
        Game.toggleStartButton();
        this.incrementFreeSpinsCount();
        this.nextFreeSpin();
    }

    async nextFreeSpin() {
        Game.toggleStartButton();
        while (this._freeSpinsCount > 0) {
            await Wheel.spin(Game.index);
            this.decrementFreeSpinsCount();
        }
        Game.toggleStartButton();
        document.getElementById("free-spins-message").innerHTML = `Won: ${WinManager.freeSpinsTotalPoints}`;
        WinManager.freeSpinsTotalPoints = 0;
        Game.state = "Idle";
    }

    incrementFreeSpinsCount() {
        this._freeSpinsCount += 3;
    }

    decrementFreeSpinsCount() {
        this._freeSpinsCount -= 1;
    }
}

export default new FreeSpinsManager;