/**
 * This function takes two numbers as arguments and returns the sum of those numbers.
 * @param num1 - The first number to add.
 * @param num2 - The second number to add.
 * @returns The sum of the two numbers.
 */
function sum (num1, num2) {
    return num1 + num2;
}

// La segunda función va a recibir la suma como un callback: 

/**
 * Calc takes two numbers and a callback function, and returns the result of the callback function when
 * called with the two numbers.
 * @param num1 - The first number to be used in the calculation.
 * @param num2 - The second number to be used in the calculation.
 * @param callback - A function that is called after calc is done.
 * @returns The result of the callback function.
 */
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 3, sum)); // El nombre de la función que va como callback no va con parentesis ya que sino la estariamos invocando en lugar de pasandola como argumento de la función call.

// Output: 5

//---------------------------------------------------------------------

// Ahora vamos a trabajar con setTimeout que nos va a permitir ejecutar codigo de forma asincronica. En este caso en un tiempo predeterminado que yo voy a definir. En el asincronismo real no sabemos cuando se va a ejecutar el codigo. Pero debemos dejarlo listo para que suceda cuando sea necesario. 

// setTimeout recibe como parametros una function. En mi caso una anonima. Y luego el tiempo que debe esperar para ejecutarse. Tmb puede recibir otros argumentos que abajo no voy a usar. 

setTimeout(function () {
    console.log('Hola JavaScript');
}, 2000); // 2000 son 2 segundos. Luego de ese tiempo va a mostrar "Hola JavaScript" por consola. Así se lee el setTimeout de arriba. 

/*
Output: 
(Luego de 2 segundos)
Hola JavaScript
*/

// setTimeout es un callback ya que recibe una function como parametro. Hagamos ahora lo mismo con una function que no sea anonima: 

function gretting(name) {
    console.log(`Hola ${name}`) // Puedo retornar o no el console.log acá. 
}

setTimeout(gretting, 2000, 'Mariano'); // El argumento del callback va como tercer argumento de setTimeout. 