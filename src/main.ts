const btnStart = document.querySelector("#start_button") as HTMLButtonElement;

let cpt = 0;

btnStart.addEventListener("click", () => {
    init();
});

function init(){
    console.log('start')
    btnStart.remove();
    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"];

    const tiles = new Array(16).fill('').map( (_, i) => {
        const tile = document.createElement("div")
        tile.setAttribute("class", "tile")
        tile.style.width = "50px"
        tile.style.height = "50px"
        tile.style.backgroundColor = colors[Math.floor(i/2)]
        return tile
    })
    const body = document.querySelector("body") as HTMLBodyElement
    tiles.forEach( tile => body.appendChild(tile))
}
