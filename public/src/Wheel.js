import Game from "./Game.js";
import WinManager from "./WinManager.js"
import { gameParams, sectors, wins } from "./gameData.js";

class Wheel {
    constructor() {
        this.wheel = document.getElementById("wheel");
        this.sectorAngle = 0;
        this.angle = 0;
    }
    
    async spin(index) {
        Game.state = "Spin";
        Game.toggleStartButton();

        this.sectorAngle = sectors[index] * 360 / gameParams.sectorsCount;

        this.angle = this.sectorAngle + gameParams.speed * 360
        
        console.log(`INDEX: ${index} ${this.angle}`)

        console.log(` params.index: ${index},\n Sector: ${sectors[index]},\n Sector angle: ${this.sectorAngle}`);

        await gsap.fromTo(this.wheel, {
                rotation: 0
            },
            {
            rotation: this.angle,
            duration: 5,
            onComplete: this.onComplete,
            // onCompleteParams: [index]
        });
    }

    onComplete() {
        if (Game.state != "Free Spins") {
            Game.toggleStartButton();
            Game.state = "Idle"
        }
        WinManager.currentWin = wins[sectors[Game.index]]
        console.log("Current win: ", WinManager.currentWin)
        // WinManager.updateTotalWin(Game.index)
        console.log(Game.index)
        Game.incrementIndex();
        console.log(Game.index)

    }
}

export default new Wheel
