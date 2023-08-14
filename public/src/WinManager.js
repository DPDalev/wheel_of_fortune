class WinManager {
    constructor() {
        this._currentWin = 0;
        this.totalWin = 0;
    }

    get currentWin() {
        return this._currentWin;
    }

    set currentWin(value) {
        this._currentWin = value;
        console.log("Win Manager: ", this._currentWin);
        if (this._currentWin !== "Free Spins") {
            this.updateTotalWin();
        } else {
            document.getElementById("free-spins-message").style.display = "inline";
        }
    }

    updateTotalWin() {
        this.totalWin += this._currentWin;
        this.showTotalWin();
    }

    showTotalWin() {
        let pointsToShow = String(this.totalWin).padStart(4, "0");
        document.getElementById("points").innerHTML = pointsToShow;
    }
}

export default new WinManager;