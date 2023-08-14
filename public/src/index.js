import Game from "./Game.js";
import Wheel from "./Wheel.js"
import { gameParams, wins, sectors } from "./gameData.js";
// import wins from "./gameData.js"


var freeSpinsBanner = document.getElementById("free-spins")

function start() {

    console.log("START GAME!!!")

    Game.state = "Idle"
    document.getElementById("spin-button").addEventListener("click", () => {
        // spin(Game.index);
        Wheel.spin(Game.index);
        // Game.incrementIndex();
        // Game.toggleStartButton();
    })
}

function checkWin(index) {
    Game.state = "Idle"

    console.log(index, sectors[index], wins[sectors[index]] )
    currentWin = wins[sectors[Game.index]]

    
    if (currentWin === 0) {
        Game.toggleStartButton()
        return
    }

    if (currentWin === "Free Spins" && params.gameState != "Free Spins") {
        params.freeSpins = 3
        freeSpins()
    }

    if (Game.state != "Free Spins" && win != "Free Spins") {
        Game.toggleStartButton()

        win(currentWin);
    } else if (Game.state === "Free Spins" ) {

        params.freeSpinsCount += 3

    }
}

async function win(win) {
    Game.state = "Win"
    if (currentWin === "Free Spins") {

        params.freeSpinsCount += 3

        // await gsap.to(freeSpinsBanner, {
        //     scale: 1,
        //     duration: 0.5
        // })

        // await gsap.to(freeSpinsBanner, {
        //     rotation: 360,
        //     duration: 1
        // })

        // await gsap.to(freeSpinsBanner, {
        //     scale: 0,
        //     duration: 0.5
        // })

        if (Game.state != "Free Spins") {
            freeSpins();
        }

    } else {
        params.win = params.win + currentWin
        document.getElementById("points").innerHTML = params.win
        console.log(`Current win: ${currentWin}, Total win: ${params.win}`)
        Game.state = "Idle"
        Game.toggleStartButton()
    }
    return
}

async function freeSpins() {
    Game.state = "Free Spins"
    Game.toggleStartButton();

    while(params.freeSpinsCount > 0) {
        console.log(`Free spins: ${params.freeSpinsCount}`)
        Game.incrementIndex();
        params.freeSpinsCount--
        await spin(params.index)
    }
    Game.toggleStartButton()
}

// function incrementIndex() {
//     params.index++
//     if (params.index >= params.index.length) {
//         params.index = 0;
//     }
// }


window.onload = start();

