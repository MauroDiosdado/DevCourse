var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

var jugar = function(usuario1, usuario2){
    if ((usuario1 == papel && usuario2 == piedra) || (usuario1 == piedra && usuario2 == tijera) || (usuario1 == tijera && usuario2 == papel)){
        console.log("Gana jugador 1");
    }
    else if (usuario1==usuario2){
        console.log("Empate!")
    }
    else{
        console.log("Gana jugador 3");
    }
}