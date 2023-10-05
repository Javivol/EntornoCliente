var pregunta = confirm("¿Quieres abrir una pestaña nueva?")
if(pregunta == 1){
    let nuevaVentana = window.open("","segundaPagina","toolbar=no,location=no,menubar=no,width=200,height=80,resizable=1,scrollbars=1,top=500,left=500");
    nuevaVentana.document.write("<h1>Holaaa</h1>");
} else{
    document.write("Ok");
}