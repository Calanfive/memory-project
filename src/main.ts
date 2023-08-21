const btnStart = document.querySelector("#start_button") as HTMLButtonElement;
let compteur = 0
let lastClickedColor = "";
let lastClicked: HTMLDivElement;
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"];

btnStart.addEventListener("click", () => {
    init();
});

function init(){
    console.log('start')
    btnStart.remove();

    let tiles: HTMLDivElement[] = []
    for (let i = 0; i < 16; i++) {
        const tile = document.createElement("div")
        tile.classList.add("tile")
        tile.setAttribute("color",colors[Math.floor(i/2)] )
        tile.classList.add("cachee")
        tile.classList.add(colors[Math.floor(i/2)])
        tiles.push(tile)        
    }
    // const tiles = new Array(16).fill('').map( (_, i) => {
    //     const tile = document.createElement("div")
    //     tile.classList.add("tile")
    //     tile.setAttribute("color",colors[Math.floor(i/2)] )
    //     tile.classList.add("cachee")
    //     tile.classList.add(colors[Math.floor(i/2)])
    //     return tile
    // })

    const parent = document.createElement('div')
    parent.classList.add('section_tiles')

    const body = document.querySelector("body") as HTMLBodyElement
    body.appendChild(parent)
    // tiles.sort( () => Math.random() - 0.5)
    tiles.forEach( tile => parent.appendChild(tile))

    let nodeList = document.querySelectorAll(".tile");//création de variable
    let elements = Array.from(nodeList) as HTMLDivElement[]; //jsp ce que c'est Array.from §
    
    elements.forEach( (carte) => {
        
        carte.addEventListener("click", () => {//pour chaque action sur une carte
            console.log("tata", lastClickedColor)
            console.log(carte.getAttribute("color"))
            // lastClickedColor = carte.getAttribute("color")
            carte.classList.toggle("cachee")
            carte.classList.add("tourner")

            let selection = document.querySelectorAll(".tourner")
            let e = Array.from(selection) as HTMLDivElement[]; //jsp ce que c'est Array.from §

            if(e.length === 2) {
                if (e[0].getAttribute("color") === e[1].getAttribute("color")) { //si les deux tiles son égale elles prennent la classe paire
                    console.log("bien jouée");
                e[1].classList.replace("tourner","paire"); 
                e[0].classList.replace("tourner","paire");  
                }
                else{
                    console.log("perdu") //si les deux tiles ne sont pas égaux alors elles redeviennent cachée 
                    setTimeout(() => {
                        e[1].classList.replace("tourner","cachee")  
                        e[0].classList.replace("tourner","cachee")
                    }, 1000);
                }
            }

            let selection_win = document.querySelectorAll(".paire")//le compteur pour savoir si t'as toutes les paires
            let i = Array.from(selection_win) as HTMLDivElement[]; //jsp ce que c'est Array.from §

            if (i.length === 16) {//problème avec le nombre de tiles (16) §
                parent.remove();
                compteur++
                const btn_reco = document.createElement("button") //système du bouton recommencer
                btn_reco.innerText = "recommencer"
                btn_reco.addEventListener("click", () => {
                    btn_reco.remove();
                    compteur_nbr.remove();
                    init();
                });
                document.body.appendChild(btn_reco)
                let compteur_nbr = document.createElement("counter")
                compteur_nbr.innerText = compteur.toString()               
                document.body.appendChild(compteur_nbr)
                console.log("gagnée")
            }
        })
    })
}





            //si la constante est nulle, la classe cachee est retirée pour laisser place à la couleur
            // if (lastClickedColor === "") {
            //     console.log("let's play");
            //     carte.classList.remove("cachee");
            //     lastClickedColor = carte.getAttribute("color");
            //     lastClicked = carte;
            // }
            
            // //si les couleurs sont différentes, la classe switch après une seconde
            // else if (lastClicked.getAttribute("color") != carte.getAttribute("color")){
            //     console.log("error");
            //     carte.classList.toggle("cachee");
            //     setTimeout(() =>  { 
            //         carte.classList.toggle("cachee")
            //         lastClicked.classList.toggle("cachee");
            //     }, 1000);
            //     lastClickedColor= "";    
            //     }
            
            // // si les couleurs sont identiques
            // else if (lastClicked.getAttribute("color")=== carte.getAttribute("color")) {
            //     console.log("win"); 
            //     carte.classList.remove("cachee");
            //     carte.classList.add("trouvee");
            //     lastClicked.classList.add("trouvee");
            //     lastClicked.classList.remove("cachee");
            //     lastClickedColor = "";
            // }
        //ajouter un compteur : 8 paires = jeu terminé


