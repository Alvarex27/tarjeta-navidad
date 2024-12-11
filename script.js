var hojas = "";
[10,2].forEach(row => {
    new Array(row).fill('').forEach((v,i) => {
        hojas += ([
            ...Array(9-i).fill("<span> </span>"),
            ...Array(1+i*2).fill("<span id='red'>*</span>"),
            ...Array(9-i).fill("<span> </span>"),
        ].join(''))
        hojas += "<br>"
    })
})
document.getElementById("tree").innerHTML = hojas;

let animacion = document.querySelectorAll(".red");
animacion.innerHTML = hojas;
function animar(){
    for( var i =0 ; i<animacion.length; i++){
        let tiempo = i/20 +1
        animacion[i].style.animation = "colors"+tiempo+"s infinite"
    }
}
window.addEventListener('load',animar)