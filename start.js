const params = {
    rotation: 0,
    speed: 5,
    angle: 0,
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

    document.getElementById("startButton").addEventListener("click", () => {
        rotate(index);
        index++
    })
}

rotate = (index) => {
    // params.angle = (params.sectors[index] + 2)/ 18 * (180 + params.angle)
    params.angle = params.sectors[index] / 18 * 180 + params.speed * 360

    console.log(index, params.sectors[index], params.angle)

    gsap.to("#wheel", {
        rotation: params.angle,
        duration: 5,
    });
}

window.onload = start();

