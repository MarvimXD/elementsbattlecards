

function cartaum() {
    var escolha = document.getElementById("escolha");
    escolha.innerHTML = "A"
}
function cartadois() {
    var escolha = document.getElementById("escolha");
    escolha.innerHTML = "B"
}
function cartatre() {
    var escolha = document.getElementById("escolha");
    escolha.innerHTML = "A"
}
function cartaqua() {
    var escolha = document.getElementById("escolha");
    escolha.innerHTML = "C"
}

function jogar() {
    var escolha = document.getElementById("escolha").value;
    var escolhaComp = document.getElementById("escolhaComp");
    
    

    var lista = ["A", "B", "C"];
    var elemento = lista[Math.floor(Math.random()*lista.length)];

    escolhaComp.innerHTML = elemento;


  

}