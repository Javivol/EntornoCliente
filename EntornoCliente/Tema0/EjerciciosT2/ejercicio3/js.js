let topping;
do{
    topping = parseInt(prompt("Dime un topping//1-oreo,2-kitkat,3-brownie,4-lacasitos,5-nada"));
    if(topping<1||topping>5){
        alert("Opción no valida");
    } else if(isNaN(topping)){
        alert("Debe introducir un número");
    }
} while(topping<1 || topping>5 ||isNaN(topping))
if(topping == 1){
    document.write("El helado con oreo vale 2,90€");
} else if(topping == 2){
    document.write("El helado con kitkat vale 3,40€");
} else if(topping == 3){
    document.write("El helado con brownie vale 2,65€");
} else if(topping == 4){
    document.write("El helado con lacasitos vale 2,85€");
} else{
    document.write("El helado sin topping vale 1,90€");
}