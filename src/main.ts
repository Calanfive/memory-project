const btnStart = document.querySelector("#start_button") as HTMLButtonElement;

let lastClickedColor = "";
let lastClicked: HTMLDivElement;

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
        tile.classList.toggle( colors[Math.floor(i/2)])
 
        return tile
    })

    const parent = document.createElement('div')
    parent.classList.add('section_tiles')

    const body = document.querySelector("body") as HTMLBodyElement
    body.appendChild(parent)
    tiles.sort( () => Math.random() - 0.5)
    tiles.forEach( tile => parent.appendChild(tile))

    //création de variable
    let nodeList = document.querySelectorAll(".tile");
    let elements = Array.from(nodeList) as HTMLDivElement[];
    elements.forEach( (carte) => {
        //pour chaque évenement sur la carte
        carte.addEventListener("click", () => {
            console.log("tata", lastClickedColor)
            console.log(carte.getAttribute("color"))
            
            //si la constante est nulle, la classe cachee est retirée pour laisser place à la couleur
            if (lastClickedColor === "") {
                console.log("let's play");
                carte.classList.remove("cachee");
                lastClickedColor = carte.getAttribute("color");
                lastClicked = carte;
            }
            
            //si les couleurs sont différentes, la classe switch après une seconde
            else if (lastClicked.getAttribute("color") != carte.getAttribute("color")){
                console.log("error");
                carte.classList.toggle("cachee");
                setTimeout(() =>  { 
                    carte.classList.toggle("cachee")
                    lastClicked.classList.toggle("cachee");
                }, 1000);
                lastClickedColor= "";    
                }
            
            // si les couleurs sont identiques
            else if (lastClicked.getAttribute("color")=== carte.getAttribute("color")) {
                console.log("win"); 
                carte.classList.remove("cachee");
                carte.classList.add("trouvee");
                lastClicked.classList.add("trouvee");
                lastClicked.classList.remove("cachee");
                lastClickedColor = "";
            }
        //ajouter un compteur : 8 paires = jeu terminé
        })
    })
}