//funcion constructora de objetos
function objeto(atributo1, atributo2, atributo3){
    this.atributo1=atributo1;
    this.atributo2=atributo2;
    this.atributo3=atributo3;
}

//para inicializar objetos con esa variable
var objeto1 = new objeto("valor1", "valor2", "valor3");