// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
    let input = document.getElementById("amigo");
    let amigo = input.value
    if(amigo.trim() !== ""){
        amigos.push(amigo);
        input.value=""
        return;
    }
    alert("cadena vacia, porfavor agrega un nombre")
    return;
}

