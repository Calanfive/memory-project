const btnStart = document.querySelector("#init-button") as HTMLButtonElement;

let cpt = 0;

btnStart.addEventListener("click", () => {
    init();
});

function init(){
    console.log('start')
    btnStart.remove();
}

