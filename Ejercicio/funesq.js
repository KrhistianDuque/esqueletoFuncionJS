let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoQuieto");
let botonSonido = new Audio ("audio/bailar.mp3");
let botonAudio = new Audio ("audio/audio.mp3")

function bailar(){
    if (esqueleto == "off"){
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click',()=>{
            botonSonido.play();
            botonAudio.play();
        })
        console.log("on");
    }else{
        esqueleto = "off"
        console.log("off")
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.pause();
        })
    }

}
