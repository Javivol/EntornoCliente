let cantidad = parseInt(prompt("¿Cuántos artículos va a comprar?"));
let precio = parseFloat(prompt("¿Dime el precio del artículo"));
document.write("El precio total a abonar es de " + (cantidad*precio).toFixed);