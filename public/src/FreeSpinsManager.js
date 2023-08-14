import Game from "./Game.js";
import Wheel from "./Wheel.js";

class FreeSpinsManager {
    constructor() {
        this.freeSpinsCount = 0;
    }

    init() {
        Game.toggleStartButton();
        this.incrementFreeSpinsCount();
        this.nextFreeSpin();
    }

    async nextFreeSpin() {
        while (this.freeSpinsCount > 0) {
            await Wheel.spin(Game.index);
            this.decrementFreeSpinsCount();
        }
        document.getElementById("free-spins-message").style.display = "none";
        Game.state = "Idle";
    }

    incrementFreeSpinsCount() {
        this.freeSpinsCount += 3;
    }

    decrementFreeSpinsCount() {
        this.freeSpinsCount -= 1;
    }
}

export default new FreeSpinsManager;