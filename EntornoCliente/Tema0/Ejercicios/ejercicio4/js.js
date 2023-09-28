var txt = "Hola Mundo";
let pos = txt.indexOf("M");
let length = txt.length;
var mundo = txt.substring(pos,length);
console.log(mundo);
if(txt.includes("Mundo")){
    txt = "Hola Universo";
    console.log(txt);
}   else{
    console.log("La palabra no contiene 'Mundo'");
}
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());
var nombre = "Javi";
var apellido = "Lopez";
console.log(nombre+" "+apellido);
var cliente = "Cliente";
console.log(cliente.substring(0,cliente.indexOf("i")+1));
console.log(cliente.substring(cliente.indexOf("e"),cliente.length+1));