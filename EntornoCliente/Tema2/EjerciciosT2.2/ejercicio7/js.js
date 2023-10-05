let numero = parseInt(prompt("Digame un número"));
if(numero%2==0){
    numero = numero+1;
} 
for(let i=numero;i<=numero+50;i=i+2){
    document.write(i+"<br>");
}