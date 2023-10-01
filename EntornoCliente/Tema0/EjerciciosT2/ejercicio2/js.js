let hora;
do{
    hora = parseInt(prompt("Dime un número entre 0 y 23"));
    if(isNaN(hora)){
        alert("Debe ser un número");
    }
} while(hora<0 || hora>23 || isNaN(hora))
if(hora>=6 && hora<=11){
    document.write("Buenos días");
} else if(hora >= 12 && hora<=20){
    document.write("Buenas tardes");
} else{
    document.write("Buenas noches");
}