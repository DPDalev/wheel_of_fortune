const params = {
    rotation: 0,
    speed: 3,
    angle: 0,
    sectorsCount: 18,
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
    ]
}

start = () => {

    let index = 0;

    let arrow = document.getElementById("arrow");
    let containerWidth = document.getElementById("wheel-container").style.width;
    let arrowWidth = arrow.style.width;
    arrow.style.marginLeft = containerWidth - arrowWidth / 2;

    document.getElementById("startButton").addEventListener("click", () => {
        rotate(index);
        index++;
    })
}

rotate = (index) => {
    let sectorAngle =  params.sectors[index] / params.sectorsCount * 360;
    let wheelSpeed = params.speed * 360;

    params.angle = sectorAngle + wheelSpeed
    console.log(` index: ${index},\n Sector: ${params.sectors[index]},\n Sector angle: ${sectorAngle}`);
    
    gsap.to("#wheel", {
        rotation: 0,
        duration: 0.01
    });

    gsap.to("#wheel", {
        rotation: params.angle,
        duration: 5,
    });
}

window.onload = start();

