var numero_recibido = prompt("inserta un numero");
var numero = parseInt(numero_recibido)
if(isNaN(numero)){alert("esto no es un numero")}
else if(numero<0){alert("no aceptamos numeros negativos");
if(numero%2 ===0) {alert("el numero"+numero+"es par") }
else if(numero%2 !==0) {alert("el numero"+numero+"es impar")}
/*
    Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas,
    para ello el cliente puede pedir vino, cerveza, refresco, agua. 
    Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.



//CASE SENSITIVE

var producto_recibido = prompt("Que necesitas? \n -Refresco \n -Vino \n -Cerveza \n -Agua")
var producto = producto_recibido.toLowerCase();

if(producto === "vino" || producto === "cerveza"){
    document.write("Dirigete a la barra por favor 🍺")
}else if(producto === "agua" || producto === "refresco"){
    document.write("Dirigete a la tienda por favor 🥛")
}else{
    document.write("No manejamos este producto ⛔")
}

*/
/* 
    Se trata de escribir un script que diga si un número es par 
/*
    Una tienda aplica un descuento del 15% para las compras 
    que incluyan más de 10 artículos iguales cuyo precio sea 
    superior a 40 euros. Tu programa debe comprobar y calcular 
    la cantidad a pagar sabiendo el número de artículos 
    y el precio de cada uno.


var articulos = parseInt(prompt("Cuantos articulos?"));
var precio = parseInt(prompt("Cual es el precio?"));
var total = articulos*precio;

if(precio>40 && articulos>10) {
    total = total - total*0.15;
    //total = total * (1-0.15)
}

document.write("Total a pagar "+total)

*/
/*
    Crea un programa que pida la nota de un estudiante en los tres 
    trimestres del curso y calcule la nota promedio. 
    El resultado que dará será suspenso si la media es menor de 5, 
    aprobado si está entre 5 y 7 y  Notable por encima de 7.

*/
/*
    Crea un programa que pida la nota de un estudiante en los tres 
    trimestres del curso y calcule la nota promedio. 
    El resultado que dará será suspenso si la media es menor de 5, 
    aprobado si está entre 5 y 7 y  Notable por encima de 7.

*/

var notaTrimestre1 = parseFloat(prompt("ingrese nota trimestre 1"));
var notaTrimestre2 = parseFloat(prompt("ingrese nota trimestre 2"));
var notaTrimestre3 = parseFloat(prompt("ingrese nota trimestre 3"));

var promedio = (notaTrimestre1 + notaTrimestre2 + notaTrimestre3)/3;

if(promedio < 5){
    document.write("Reprobaste la introduccion a JS 🤬");
    console.log(promedio);
} else if(promedio>=5 && promedio<=7){
    document.write("Apenas y aprobaste la introduccion a JS🥵"); 
    console.log(promedio);
}else{
    document.write("Prodigio de la programacion 😏🥵🌹💋");
    console.log(promedio); 
}
