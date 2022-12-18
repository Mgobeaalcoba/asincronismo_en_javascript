// Ejercicio de asincronismo de Diego De Granda en Curso de JavaScript
// Engine (V8) y el Navegador. 

// Tengo una taquería aliada con una casa de tortas. La misma recibe pedidos de tacos y los prepara y entrega, pero también recibe pedidos de tortas que los pasa al local de al lado que se ocupa de hacer tortas. 
// Cuando el local de al lado termina la torta que le pidio la taquería, deja la misma en espera hasta que la taquería entregue todos sus tacos para poder entregar la torta que le pidieron. Ej en JS: 

console.log("Taco 1");
console.log("Taco 2");
console.log("Taco 3");
setTimeout(() => { // setTimeout es una API del navegador. 
    console.log("Torta")
}, 500) // 500 es medio segundo. 
console.log("Taco 4");

// Entran estos pedidos en orden. ¿En que orden saldrán con asincronismo? 

/*
Output:
Taco 1
Taco 2
Taco 3
Taco 4
Torta
*/

// Sale ultima la torta porque es derivada a la Web API del navegador y vuelve a la pila de tareas de JS cuando esta haya terminado las suyas. Por eso es que si el tiempo de timeout baja a 0 igualmente va a salir ultima. Veamos: 

console.log("Taco 1");
console.log("Taco 2");
console.log("Taco 3");
setTimeout(() => { // setTimeout es una API del navegador. 
    console.log("Torta")
}, 0) // 500 es medio segundo. 
console.log("Taco 4");

/*
Output:
Taco 1
Taco 2
Taco 3
Taco 4
Torta
*/

// Memory Heap: Son las funciones en memoría de JS. Son las funciones que construimos y que JS interpreta. Tmb están ahí las variables. 

// Call Stack: Es la pila donde se van almacenando y ordenando los pedidos o procesos que JS debe ejecutar. Cuando se encuentra con procesos asincronicos los pasa, por ejemplo, al navegador...

// Web API´s: El navegador le da a sus Web API´s los procesos derivados del Call Stack que deben realizar. Una vez concluidos pasan al Callback Queue...

// Callback Queue: Es un espacio de ordenamiento y espera de los procesos que el navegador con sus Web API´s ya concluyo y que deben ser devueltos a JS. Para eso interviene el Event Loop...

// Event Loop: Mirá permanentemente que la Call Stack se vacie para devolverle procesos que ella misma envío a las Web API´s ya concluidos para que JS pueda ejecutarlos. 