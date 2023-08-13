const params = {
    rotation: 0,
    speed: 3,
    angle: 0,
    index: 0,
    sectorsCount: 18,
    win: 0,
    freeSpinsCount: 0,
    gameState: "idle",
    // sectors: [
    //     0,
    //     14,
    //     10,
    //     3,
    //     14,
    //     9,
    //     17,
    //     5,
    //     14,
    //     9,
    //     11
    // ],
    sectors: [
        10,
        14,
        9,
        10,
        3,
        14,
        7,
        17,
        5,
        14,
        9,
        11
    ],
    wins: [
        100,
        3,
        20,
        5,
        40,
        4,
        200,
        50,
        0,
        "Free Spins",
        0,
        30,
        5,
        10,
        2,
        40,
        1,
        10
    ]
}

var freeSpinsBanner = document.getElementById("free-spins")

let game


function start() {

    console.log("START GAME!!!")

    let index = 0;

    // game = new Game();

    // console.log(Game.state)

    let arrow = document.getElementById("arrow");
    let containerWidth = document.getElementById("wheel-container").style.width;
    let arrowWidth = arrow.style.width;
    arrow.style.marginLeft = containerWidth - arrowWidth / 2;
    // console.log(freeSpinsBanner)
    // gsap.set(freeSpinsBanner, {
    //     scale: "0%"
    // })
    updateState("Idle")
    document.getElementById("startButton").addEventListener("click", () => {
        spin(params.index);

        incrementIndex()
    })
}

function checkWin(index) {
    updateState("Idle")

    console.log(index, params.sectors[index], params.wins[params.sectors[index]] )
    currentWin = params.wins[params.sectors[params.index]]

    toggleStartButton("Idle")

    if (currentWin === 0) {
        return
    }

    if (currentWin === "Free Spins" && params.gameState != "Free Spins") {
        params.freeSpins = 3
        freeSpins()
    }

    if (params.gameState != "Free Spins" && win != "Free Spins") {
        win(currentWin);
    } else if (params.gameState === "Free Spins" ) {

        params.freeSpinsCount += 3

    }
}

async function win(win) {
    updateState("Win")
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

        if (params.gameState != "Free Spins") {
            freeSpins();
        }

    } else {
        params.win = params.win + currentWin
        document.getElementById("win-container").innerHTML = params.win
        console.log(`Current win: ${currentWin}, Total win: ${params.win}`)
        updateState("Idle")
        toggleStartButton("Win")
    }
    return
}

function updateState(state) {
    console.log(`STATE: `, state)
    params.gameState = state;
}

async function freeSpins() {
    updateState("Free Spins")
    toggleStartButton("Free Spins")

    while(params.freeSpinsCount > 0) {
        console.log(`Free spins: ${params.freeSpinsCount}`)
        incrementIndex();
        params.freeSpinsCount--
        await spin(params.index)
    }
    toggleStartButton("Free spins")
}

async function spin(index) {
    updateState("Spin")
    toggleStartButton(params.gameState)
    document.getElementById("startButton").disabled = true

    let sectorAngle =  params.sectors[index] / params.sectorsCount * 360;
    let wheelSpeed = params.speed * 360;

    params.angle = sectorAngle + wheelSpeed
    console.log(` params.index: ${index},\n Sector: ${params.sectors[params.index]},\n Sector angle: ${sectorAngle}`);


    await gsap.fromTo("#wheel", {
            rotation: 0
        },
        {
        rotation: params.angle,
        duration: 5,
        onComplete: onComplete,
        onCompleteParams: [index]
    });

    function onComplete() {
        console.log("ONCOMPLETE", index);
        checkWin(index)
    }
}

function toggleStartButton(state) {
    console.log(`TOGGLE From state: ${state}`)
    document.getElementById("startButton").disabled = !document.getElementById("startButton").disabled
}

function incrementIndex() {
    params.index++
    if (params.index >= params.index.length) {
        params.index = 0;
    }
}


window.onload = start();

