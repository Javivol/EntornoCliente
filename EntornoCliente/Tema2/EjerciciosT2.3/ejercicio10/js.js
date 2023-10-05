var suma = 0;
for(i=1;i<=10;i++){
    var num=Math.floor(Math.random()*21);
    suma = suma + num;
    document.write("Número aleatorio " + i +" igual a: " + num +"<br>");
}
document.write("La suma total es " + suma);