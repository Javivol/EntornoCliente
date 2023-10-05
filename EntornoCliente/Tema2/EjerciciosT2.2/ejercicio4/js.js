let tipo;
do{
    tipo = parseInt(prompt("Digame el tipo de bomba//1-agua,2-gasolina,3-hormigón,4-alimenticia"));
    if(isNaN(tipo)){
        alert("No existe un valor valido para tipo de bomba");
    } else if(tipo == 0){
        alert("No hay establecido un valor definido para el tipo de bomba")
    }
}while(tipo<=0 || tipo>4 || isNaN(tipo))
if(tipo ==1){
    document.write("La bomba es una bomba de agua");
} else if(tipo ==2){
    document.write("La bomba es una bomba de gasolina");
} else if(tipo==3){
    document.write("La bomba es una bomba de hormigón");
} else if(tipo==4){
    document.write("La bomba es una bomba de pasta alimenticia");
}
