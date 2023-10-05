let dia = prompt("Dime el día de tu cumpleaños");
let mes;
do{
    mes = prompt("Dime el mes de tu cumpleaños en cifra, ten en cuenta que los meses empiezan por 0");
}while(isNaN(mes));
let cumpleaños = new Date(2023,mes,dia);
document.write(cumpleaños.toLocaleDateString()+"<br>");
let cumpleañosFuturo = new Date(2024,mes,dia);
for(i = cumpleaños.getFullYear();i<=2100;i++){
    var fecha = new Date(i, mes-1, dia);
    if(fecha.getDay()==0){
        document.write(dia +"/"+mes+"/"+i+"<br>");
    }
}
