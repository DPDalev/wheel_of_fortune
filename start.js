const params = {
    rotation: 0,
    speed: 3,
    angle: 0,
    index: 0,
    sectorsCount: 18,
    win: 0,
    freeSpinsCount: 0,
    mode: "idle",
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

function start() {

    let  = 0;

    let arrow = document.getElementById("arrow");
    let containerWidth = document.getElementById("wheel-container").style.width;
    let arrowWidth = arrow.style.width;
    arrow.style.marginLeft = containerWidth - arrowWidth / 2;

    document.getElementById("startButton").addEventListener("click", () => {
        spin(params.index);
        params.index++;
        if (params.index >= params.index.length) {
            params.index = 0;
        }
    })
}

function checkWin() {
    currentWin = params.wins[params.sectors[params.index]]
    if (params.mode != "freeSpins") {
        if (currentWin === 0) {
            return
        } else {
            win(currentWin)
        }
    } else {
        params.mode = "freeSpins"
    }
}

function win(win) {
    params.mode === "win"
    if (currentWin === "Free Spins") {

        params.freeSpinsCount += 3

        if (params.mode != "freeSpins") {
            freeSpins();
        }

    } else {
        params.win = params.win + currentWin
        document.getElementById("win-container").innerHTML = params.win
        console.log(`Current win: ${currentWin}, Toral win: ${params.win}`)
        toggleStartButton()
    }
    return
}

function freeSpins() {
    // params.freeSpins += 3
    while(params.freeSpinsCount > 0) {
        console.log(`Free spins: ${params.freeSpinsCount}`)
        params.index++
        if (params.index >= params.index.length) {
            params.index = 0;
        }
        params.freeSpinsCount--
        spin(params.index)
    }
    toggleStartButton()
}

async function spin(index) {
    params.mode = "spin"
    let sectorAngle =  params.sectors[index] / params.sectorsCount * 360;
    let wheelSpeed = params.speed * 360;

    params.angle = sectorAngle + wheelSpeed
    console.log(` params.index: ${index},\n Sector: ${params.sectors[params.index]},\n Sector angle: ${sectorAngle}`);

    toggleStartButton()

    await gsap.fromTo("#wheel", {
            rotation: 0
        },
        {
        rotation: params.angle,
        duration: 5,
        onComplete: checkWin,
        onCompleteParams: [index]
    });
}

function toggleStartButton() {
    document.getElementById("startButton").disabled = !document.getElementById("startButton").disabled
}

window.onload = start();

