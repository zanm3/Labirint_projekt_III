const coordinates = [
    [232, 2], [234, 10], [218, 10], [218, 26], [186, 26], [186, 10], [138, 10], [138, 42], [106, 42], [106, 26],
    [90, 26], [90, 42], [74, 42], [74, 74], [58, 74], [58, 58], [42, 58], [42, 90], [58, 90], [58, 106],
    [42, 106], [42, 122], [10, 122], [10, 138], [26, 138], [26, 154], [58, 154], [58, 122], [90, 122],
    [90, 138], [74, 138], [74, 154], [122, 154], [122, 138], [154, 138], [154, 122], [138, 122], [138, 106],
    [106, 106], [106, 90], [122, 90], [122, 74], [138, 74], [138, 58], [154, 58], [154, 90], [170, 90],
    [170, 74], [218, 74], [218, 58], [202, 58], [202, 42], [250, 42], [250, 58], [266, 58], [266, 74],
    [282, 74], [282, 44], [298, 42], [298, 58], [314, 58], [314, 74], [298, 74], [298, 90], [314, 90],
    [314, 122], [330, 122], [330, 186], [378, 186], [378, 170], [394, 170], [394, 202], [410, 202],
    [410, 234], [394, 234], [394, 250], [378, 250], [378, 234], [362, 234], [362, 266], [378, 266],
    [378, 282], [362, 282], [362, 330], [378, 330], [378, 346], [394, 346], [394, 362], [410, 362],
    [410, 346], [426, 346], [426, 394], [442, 394], [442, 410], [346, 410], [346, 474], [282, 474],
    [282, 442], [266, 442], [266, 426], [250, 426], [250, 482]
  ];

function drawSolution(){
    const svg = document.getElementById("labirint"); // dobi labirint
    const line = document.createElementNS("http://www.w3.org/2000/svg","polyline"); // naredimo črto

    line.setAttribute("fill","none");
    line.setAttribute("stroke","black");
    line.setAttribute("stroke-width","4");
    line.setAttribute("stroke-linecap","square");

    // lastnosti spremenljivke "line" (polyline)

    svg.appendChild(line); // dodamo črto v svg (labirint)

    let currentIndex = 0; // začnemo z animacijo risanja poti
    const coords = [];

    const interval = setInterval(() => {
        const currentCoordinates = coordinates[currentIndex];
        coords.push(`${currentCoordinates[0]},${currentCoordinates[1]}`); // dodamo v začasno tabelo coords koordinate na currentIndex mestu (tabela)
        
        line.setAttribute("points",coords.join(" ")); // damo nove točke v lastnost "points"

        currentIndex++; // gremo naprej

        if(currentIndex == coordinates.length){
            clearInterval(interval);
        }
    }, 50) // narišemo vsakih 200 milisekund
}

function clearSolution(){
    const svg = document.getElementById("labirint"); // dobimo labirnt (svg)
    const line = svg.querySelector("polyline"); // dobimo iz labirinta polyline

    if(line){ // če je polyline, izbriši ga iz labirinta
        svg.removeChild(line);
    }
}
const draw = document.getElementById("click1");
const clear = document.getElementById("click2");

draw.addEventListener("click", function(){ // ko kliknemo gumb, se sproži funkcija drawSolution
    drawSolution();
});

clear.addEventListener("click", function(){ // ko kliknemo gumb, se sproži funkcija drawSolution
    clearSolution();
});