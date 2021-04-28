var edad = 18;

if(edad===18){
    console.log("Puedes votar, ya tienes 18");
}
else if(edad>18){
    console.log("Puedes votar de nuevo");
}
else{
    console.log("Aun no puedes votar");
}   

//operador ternario de desicion en una sola linea
// condicion ? true : false

var numero = 1;

var resultado = numero === 1 ? "si soy un uno":"No soy un uno";