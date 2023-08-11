const params = {
    rotation: 0,
    speed: 3,
    angle: 0,
    sectorsCount: 18,
    win: 0,
    freeSpins: 0,
    sectors: [
        0,
        14,
        10,
        3,
        14,
        9,
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

start = () => {

    let index = 0;

    let arrow = document.getElementById("arrow");
    let containerWidth = document.getElementById("wheel-container").style.width;
    let arrowWidth = arrow.style.width;
    arrow.style.marginLeft = containerWidth - arrowWidth / 2;

    document.getElementById("startButton").addEventListener("click", () => {
        spin(index);
        index++;
    })
}

const win = (index) => {
    currentWin = params.wins[params.sectors[index]]
    if (currentWin === "Free Spins") {
        console.log(currentWin)
    } else {
        params.win = params.win + currentWin
        document.getElementById("win-container").innerHTML = params.win
        console.log(`Current win: ${currentWin}, Toral win: ${params.win}`)
    }
}

const spin = (index) => {
    let sectorAngle =  params.sectors[index] / params.sectorsCount * 360;
    let wheelSpeed = params.speed * 360;

    params.angle = sectorAngle + wheelSpeed
    console.log(` index: ${index},\n Sector: ${params.sectors[index]},\n Sector angle: ${sectorAngle}`);

    gsap.fromTo("#wheel", {
            rotation: 0
        },
        {
        rotation: params.angle,
        duration: 5,
        onComplete: win,
        onCompleteParams: [index]
    });
}

window.onload = start();

