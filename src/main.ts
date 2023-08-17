const btnStart = document.querySelector("#start_button") as HTMLButtonElement;

let lastClickedColor = "";

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
        tile.style.backgroundColor = colors[Math.floor(i/2)]
        return tile
    })

    const parent = document.createElement('div')
    parent.classList.add('section_tiles')

    const body = document.querySelector("body") as HTMLBodyElement
    body.appendChild(parent)
    tiles.forEach( tile => parent.appendChild(tile))

    let nodeList = document.querySelectorAll(".tile");
    let elements = Array.from(nodeList) as HTMLDivElement[];
    elements.forEach( (element) => {
        element.addEventListener("click", () => {
            console.log("tata", lastClickedColor)
            lastClickedColor = element.style.backgroundColor
            console.log(element.style.backgroundColor)

            if (lastClickedColor === "blue") {
                console.log("same");
                
            }

            else if (lastClickedColor != "blue" )
                console.log("error");

        })
    })

    tiles.sort( () => Math.random() - 0.5)
}