class WinManager {
    constructor() {
        this._currentWin = 0;
        this.totalWin = 0;
        this._freeSpinsPoints = 0;
        this._freeSpinsTotalPoints = 0;
        this.freeSpinsInfo = document.getElementById("free-spins-message");
    }

    get currentWin() {
        return this._currentWin;
    }

    set currentWin(value) {
        this._currentWin = value;

        // Logs the current win/sector for convenient check in the console for condition 2 compliance
        console.log("Win Manager: ", this._currentWin);

        if (this._currentWin !== "Free Spins") {
            this.updateTotalWin();
        } else {
            if (this.freeSpinsInfo.innerHTML !== "Free Spins!!!") {
                this.freeSpinsInfo.innerHTML = "Free Spins!!!"
            }
            this.freeSpinsInfo.style.display = "inline";
        }
    }

    set freeSpinsPoints(value) {
        this._freeSpinsPoints = value;
        if (this._freeSpinsPoints !== "Free Spins") {
            this.updatefreeSpinsTotalPoints();
        }
    }

    get freeSpinsTotalPoints() {
        return this._freeSpinsTotalPoints;
    }

    set freeSpinsTotalPoints(value) {
        this._freeSpinsTotalPoints = value;
    }

    updateTotalWin() {
        this.totalWin += this._currentWin;
        this.showTotalWin();
    }

    updatefreeSpinsTotalPoints() {
        this._freeSpinsTotalPoints += this._freeSpinsPoints;
    }

    showTotalWin() {
        let pointsToShow = String(this.totalWin).padStart(4, "0");
        document.getElementById("points").innerHTML = pointsToShow;
    }
}

export default new WinManager;