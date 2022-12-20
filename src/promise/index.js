// Estructura de las promesas. 
// ¿Como construirlas? 
// Promesa: Algo que puede llegar a pasar, ahora, mas adelante o nunca. 

// La promesa se genera mediante una palabra reservada Promise() que acepta como argumento UNA función con dos valores (resolve y reject)

/* Creating a promise that will resolve with the string 'hey!!!' */
const promise = new Promise(function (resolve, reject) {
    resolve('hey!!!')
});

// Hagamos un caso mas complejo: 
// Tenemos X vacas y necesitamos Y vacas para producir la leche que requiere nuestra población. 

// Supuesto: Con 15 vacas nos alcanza para nuestra población. 

// Cantidad de vacas
const cows = 9;

/* Creating a promise that will resolve if the cows are more than 10 and reject if they are less than
10. */
// Promesa para saber si tenemos las vacas suficientes o no
const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject("There is no cows on the farm");
    }
});
// Con esto solo dejamos armada la promesa. Pero no la ejecutamos nunca. Para eso debemos armar debajo el .then(result) y .catch(error)


/* Showing the result of the promise. */
// Mostramos que resultado tuvimos: 
countCows.then((result) => {
    console.log(result);
    // Hastá acá me va a mostrar el resultado cuando se resuelva la promesa. Si quiero que me muestre el error cuando la misma no se resuelva entonces debo agregar el catch
}).catch((error) => {
    console.log(error);
    // Debajo del catch, y sin importar si la promesa se cumplió o no va el bloque finally que se ejecuta al finalizar la promesa sea cual sea su resultado. 
}).finally(() => {
    console.log('It´s de "Finally Block" of Promise');
})