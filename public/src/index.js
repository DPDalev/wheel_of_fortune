import Game from "./Game.js";
import Wheel from "./Wheel.js"

window.onload = start();

function start() {
    console.log("GAME STARTS")
    Game.state = "Idle"
    document.getElementById("spin-button").addEventListener("click", () => {
        Wheel.spin(Game.index);
    })
}