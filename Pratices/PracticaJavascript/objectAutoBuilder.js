function auto(marca, modelo, anio){
    this.marca=marca;
    this.modelo=modelo;
    this.anio=anio;
}

var marcas =["Opel","Opel","Opel","Opel","Opel","Opel","Opel","Volkswagen","Volkswagen","Volkswagen","Volkswagen","Volkswagen","Seat","Seat","Seat","Seat"];
var modelos =["Blitz", "Pato", "ganso", "Hamburguesa", "modelo T", "Mustang", "kampfer", "Tsusamegeit","Corolla", "Beat", "Sonic", "Blue", "Camaro", "Camaro", "Blitz"]
var anios =[2001,2001,2008,2015,2001,2005,2001,2010,2019,2006,1995,1995,1996,2020,2005]

var automovil = {};
for (let  counter= 0;  counter < 15; counter++) {
    automovil[counter] = new auto(marcas[counter], modelos[counter], anios[counter]);    
}