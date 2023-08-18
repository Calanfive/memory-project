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
        tile.classList.add("tile")
        tile.setAttribute("color",colors[Math.floor(i/2)] )
        tile.classList.add("cachee")
        // tile.classList.toggle( colors[Math.floor(i/2)])
        tile.style.backgroundColor = colors[Math.floor(i/2)]
        return tile
    })

    const parent = document.createElement('div')
    parent.classList.add('section_tiles')

    const body = document.querySelector("body") as HTMLBodyElement
    body.appendChild(parent)
    tiles.sort( () => Math.random() - 0.5)
    tiles.forEach( tile => parent.appendChild(tile))

    let nodeList = document.querySelectorAll(".tile");
    let elements = Array.from(nodeList) as HTMLDivElement[];
    elements.forEach( (element) => {
        element.addEventListener("click", () => {
            console.log("tata", lastClickedColor)
            console.log(element.style.backgroundColor)
            
            if (lastClickedColor === "") {
                console.log("let's play");
                element.classList.remove("cachee")
                lastClickedColor = element.style.backgroundColor
            }
            
            else if (lastClickedColor != element.style.backgroundColor){
                console.log("error");
                lastClickedColor = ""
            }
            else if (lastClickedColor === element.style.backgroundColor) {
                console.log("win");  
                lastClickedColor = ""  
            }
        
        })
    })
}