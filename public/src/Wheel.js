import Game from "./Game.js";
import WinManager from "./WinManager.js";
import FreeSpinsManager from "./FreeSpinsManager.js";
import { gameParams, sectors, wins } from "./gameData.js";

class Wheel {
    constructor() {
        this.wheel = document.getElementById("wheel");
        this.sectorAngle = 0;
        this.angle = 0;
    }
    
    async spin(index) {
        if (FreeSpinsManager.freeSpinsCount === 0) {
            Game.state = "Spin";
            Game.toggleStartButton();
            document.getElementById("free-spins-message").style.display = "none";
        }

        this.sectorAngle = sectors[index] * 360 / gameParams.sectorsCount;
        this.angle = this.sectorAngle + gameParams.speed * 360;

        await gsap.fromTo(this.wheel, {
                rotation: 0
            },
            {
            rotation: this.angle,
            duration: gameParams.spinTime,
            onComplete: this.onComplete
        });
    }

    onComplete() {
        if (FreeSpinsManager.freeSpinsCount > 0) {
            WinManager.freeSpinsPoints = wins[sectors[Game.index]];
        }
        WinManager.currentWin = wins[sectors[Game.index]];
        Game.incrementIndex();
        
        if (Game.state === "Free Spins") {
            if (WinManager.currentWin === "Free Spins") {
                FreeSpinsManager.incrementFreeSpinsCount();
            }
        } else {
            if (WinManager.currentWin === "Free Spins") {
                FreeSpinsManager.init();
            } else {
                Game.toggleStartButton();
            }
        }
    }

}

export default new Wheel;
