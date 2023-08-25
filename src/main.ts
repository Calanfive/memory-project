const btnStart = document.querySelector("#start_button") as HTMLButtonElement;
let compteur_partie = 0
let compteur_coup = 0
let totalSeconds = 0
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"];
const anim_win = document.querySelector('.anim_class') as HTMLHtmlElement;
    anim_win.remove();

btnStart.addEventListener("click", () => {
    init();
});

let timer_horlorge = document.createElement("p");
timer_horlorge.classList.add("horlorge");

function countUpTimer() {
    ++totalSeconds;
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds - hour * 3600) / 60);
    let seconds = totalSeconds - (hour * 3600 + minute * 60);
    timer_horlorge.innerText = hour + ":" + minute + ":" + seconds;
}  

function init(){
    let timerVariable = setInterval(countUpTimer, 1000);
    countUpTimer();
    btnStart.remove();
    
    let tiles: HTMLDivElement[] = []
    for (let i = 0; i < 16; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute("color",colors[Math.floor(i/2)] );
        tile.classList.add("cachee");
        tile.classList.add(colors[Math.floor(i/2)]);
        tiles.push(tile);      
    }

    const parent = document.createElement('div');
    parent.classList.add('section_tiles');
    

    const body = document.querySelector("body") as HTMLBodyElement;
    body.appendChild(timer_horlorge);
    body.appendChild(parent);
    tiles.sort( () => Math.random() - 0.5);
    tiles.forEach( tile => parent.appendChild(tile));

    let nodeList = document.querySelectorAll(".tile");
    let elements = Array.from(nodeList) as HTMLDivElement[];
    
    elements.forEach( (carte) => {
        
        carte.addEventListener("click", () => {
            carte.classList.toggle("cachee");
            carte.classList.add("tourner");

            let selection = document.querySelectorAll(".tourner");
            let e = Array.from(selection) as HTMLDivElement[]; 

            if(e.length === 2) {
                if (e[0].getAttribute("color") === e[1].getAttribute("color")) { 
                    e[1].classList.replace("tourner","paire"); 
                    e[0].classList.replace("tourner","paire"); 
                    compteur_coup++
                }
                else{
                    setTimeout(() => {
                        e[1].classList.replace("tourner","cachee");
                        e[0].classList.replace("tourner","cachee");
                        compteur_coup++
                    }, 1000);
                }
            }

            let selection_win = document.querySelectorAll(".paire");
            let i = Array.from(selection_win) as HTMLDivElement[]; 

            if (i.length === 16) {
                parent.remove();
                clearInterval(timerVariable);
                compteur_partie++
                
                const btn_reco = document.createElement("button");
                btn_reco.innerText = "PLAY AGAIN"
                btn_reco.classList.add('btn_reco_class');
                btn_reco.addEventListener("click", () => {
                    btn_reco.remove();
                    totalSeconds = -1
                    timer_horlorge.remove();
                    countUpTimer();
                    compteur_nbr_coup.remove();
                    compteur_coup = 0
                    compteur_partie_nbr.remove();
                    div_lastpage.remove();
                    init();
                });


                let compteur_nbr_coup = document.createElement("counter");
                compteur_nbr_coup.innerText = "Nombre de coups: " + compteur_coup.toString();
                compteur_nbr_coup.classList.add('cpt_class');

                let compteur_partie_nbr = document.createElement("counter");
                compteur_partie_nbr.innerText = "Nombre de parties: " + compteur_partie.toString();               
                compteur_partie_nbr.classList.add('cptpartie_class');

                let div_lastpage = document.createElement("div");
                body.appendChild(div_lastpage);
                div_lastpage.appendChild(anim_win);
                div_lastpage.appendChild(timer_horlorge);
                div_lastpage.appendChild(compteur_nbr_coup);
                div_lastpage.appendChild(compteur_partie_nbr);
                div_lastpage.appendChild(btn_reco);
                div_lastpage.classList.add('orga_lastpage');
            }
        });
    })
}