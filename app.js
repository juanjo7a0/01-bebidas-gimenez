//VARIABLES

/*
let curso = "coderhouse";
console.log (curso)
let numero_de_alumnos = 181;
console.log(numero_de_alumnos)
let en_curso = true;
console.log(en_curso)
*/

/*
//tipos de datos
//numeros
//cadena de caracteres o STRINGS "coderhouse"
//buleanos o booleans TRUE - FALSE
//diferencias ente LET y CONST
*/

/*
let curso;

curso = "Js";

console.log(curso);
*/

/*
const puntaje = "1000"; //puede ir comillas o no en el mil
if (puntaje == 1000) {
    console.log ("Igualito igualito");
} else {
    console.log ("Na que ver");
}*/

/*const dinero = 600;
const totalAPagar = 500;

if (dinero >= totalAPagar) {
    console.log ("Podemos Pagar")
} else {
    console.log ("Fondos insuficientes")
}*/

/*const dinero = 300;
const totalAPagar = 800;
const tarjeta = false;
if (dinero > totalAPagar) {
    console.log ("Podemos pagar")    
} else if (tarjeta) {
    console.log ("Puedo abonar porque tengo tarjeta")    
} else {
    console.log ("Fondos insuficientes")
}


let precio = prompt ("Ingrese el precio del producto: ");
if (precio >= 100) {
    alert ("El producto es costoso")
} else {
    alert("El precio del producto es a ccesible")
}
*/

/*let precio = prompt ("Ingrese el precio del producto: ");

if (precio >= 100) {
    alert ("El mineral tiene un precio costoso");
} else if (precio >= 50)  alert ("El mineral tiene un precio costoso");
  else {
    alert("El mineral tiene un precio accesible");
}*/

/*
X / Y / X&&Y   t(true) f(false)
t / t / t
t / f / f
f / t / f
f / f / f

Tabla de verdad del operador // OR
X / Y / X//Y
t / t /  t
t / f /  t
f / t /  t
f / f /  f
*/

let nombreBebida = prompt ("Ingrese el nombre de la bebida");
let marcaBebida = prompt ("Ingrese marca de la bebida");
let tamañoBotella = prompt ("Ingrese el tamaño de la botella");

if (nombreBebida !== " " & marcaBebida !== " " & tamañoBotella !== " ") {
    alert ("Nombre de la bebida: " + nombreBebida +  "Marca de la bebida: " + marcaBebida +  "Tamaño de la botella: " + tamañoBotella)
} else {
    alert("No ingreso bebida")
}

let bebida = prompt ("Es para regalo?");

switch (bebida) {
    case "Si": 
      console.log(`Pedido: ${bebida}, valor 1000`);
      break;
    case "No":
        console.log(`Pedido: ${bebida}, valor 900`)
        break;
default:
        console.log("Hoy no compro bebida")
        break;
}

let numero = Number(prompt("Ingrese cantidad"));

for (let i =1; i <=1; i++){
    let resultado = numero * i
    alert (`${numero} x ${i} =${resultado}`)
}

let option = prompt(`Elija una opcion para que tenga su bebida: 
                     1. Retiro por el local
                     2. Quiero que me lo envien (costo extra dependiendo la zona)
                     3. Retira un conocido`);

switch (option) {
    case "1":
        console.log("Retiro por el local");
        break;
    case "2":
        console.log("Quiero que me lo envien (costo extra dependiendo de la zona)");
        break;
    case "3":
        console.log("Retira un conocido");
        break;
default:
        console.log("No ingresaste una opción");
        break;         
}

function solicitarNombre (){
    let nombre = prompt("Genial, ingresa tu nombre");
    console.log(`El nombre del usuario es: ${nombre}`);
}
solicitarNombre();

function solicitarMail () {
    let mail = prompt("Ahora tu mail, así te enviamos el detalle de tu pedido");
    console.log(`El mail es: ${mail}`);
}
solicitarMail();

let text = prompt (`Muchas gracias por tu compra, nos comunicamos por WhatsApp. Deja tu numero de celular:`)



