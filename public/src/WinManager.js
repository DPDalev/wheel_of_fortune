import { wins } from "./gameData.js"

class WinManager {
    constructor() {
        this._currentWin = 0;
        this.totalWin = 0;

    }

    get currentWin() {
        return this._currentWin
    }

    set currentWin(value) {
        this._currentWin = value;
        this.updateTotalWin()
    }

    // set totalWin(value) {
    //     this.totalwin += this._currentWin
    // }

    checkWin(index) {
        if (wins[index] != "Free Spins") {
            this.updateTotalWin(sectors[index]);
        }
    }

    updateTotalWin() {
        console.log(this._currentWin, this.totalWin, this)
        if (this._currentWin !== 0 && this._currentWin !== "Free Spins") {
            this.totalWin += this._currentWin
            this.showTotalWin()
        }
        document.getElementById("free-spins-message").style.display = this._currentWin === "Free Spins" ? "inline" : "none"
    }

    showTotalWin() {
        if (this._currentWin !== "Free Spins") {
            let pointsToShow = String(this.totalWin).padStart(4, "0");
            // let duration = this._currentWin / 100
            // gsap.to(document.getElementById("points"), {
            //     innerText: this._currentWin,
            //     duration: duration, 
            //     snap: {
            //       innerText: 1
            //     } 
            // });
            // this._scoreValueText.text = this._scoreValue;
            document.getElementById("points").innerHTML = pointsToShow
        }
    }
}

export default new WinManager