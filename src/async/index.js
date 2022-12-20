/**
 * If true, resolve the promise with the string 'Async!!' after 2 seconds, otherwise reject the promise
 * with the error 'Error!'
 * @returns A promise.
 */
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) // if terneario. ? = if and : = else
            ? setTimeout (() => resolve('Async!!'),2000)
            : reject(new Error('Error!'));
    });
}

/**
 * The async keyword before a function has two effects: 
 * 
 * 1. Makes it always return a promise. 
 * 2. Allows the use of await within it. 
 * 
 * The await keyword before a promise makes JavaScript wait until that promise settles, and then: 
 * 
 * 1. If it's an error, the exception is generated, same as if throw error were called at that very
 * place. 
 * 2. If it's a value, it becomes the result of the operation. 
 * 
 * The await keyword only works inside async functions.
 */
// Async y await no bloquean la aplicación. Por lo que si esto demora, puede continuar ejecutandose nuestro programa. 
const anotherFn = async () => {
    const something = await fnAsync();
    // La función fnAsync nos devuelve una promesa. Pero no sabemos cuando. Con await esperamos esa respuesta. 
    console.log(something); // Vemos la respuesta
    console.log("Hello"); // Miremos cuando imprime Hello. En que orden. 
    // Si se da que dentro de anotherFn primero hay que esperar que something se ejecute y tengo un return para luego pasar a imprimir el Hello. 
}

console.log('Before');
anotherFn();
console.log('After');

/*
Apuesta: 
Before
Hello
After
something (Async!!)

Resultado: 
Before
After
Async!!
Hello
*/
