// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//agregar un amigo a la lista
function  agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();
//valida que el campo no este vacio
    if (nombreAmigo === "") {
        alert("Por favor, Inserte un nombre");
        return;
    }
//agregar nombre a la lista
    amigos.push(nombreAmigo);
//actualiza lista visual
    actualizarLista();
//limpia campos de entrada
    inputAmigo.value = "";
    inputAmigo.focus();

}
//Actualiza lista visual
function actualizarLista() {
    const listaAmigoUl =document.getElementById("listaAmigos")
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li =document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres primero."); //valida al menos un dato en la lista
        return        
    }
//genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
//obtiene el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
//muestra el resultado
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}
//Asigna evento a los botones
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});