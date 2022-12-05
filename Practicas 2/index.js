const parrafoInicial = document.getElementById("parrafoinicial");

console.log(parrafoInicial);

parrafoInicial.onclick = function(){
    cambiaColorAleatorio();
}

function cambiaColorAleatorio(){

    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ];

    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)];
}
/*
TIPOS DE DATOS
var -> Modificarse, scope global - NO SE RECOMIENDA
let -> Modificable, scope limitado - RECOMENDADA USAR
const -> Constante, no modificable - Scopew global
*/

/*
CASES

PascalCase = clases. = Java

camelCase = Variables, Funciones, Atributos. = JavaScript
variable-> parrafoInicial =
funcion-> parrafoInicial()
Atributo-> parrafoInicial

snake_Case = Python, JavaScript
Variables y funciones

CASE = Constantes

*/
