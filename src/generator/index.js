/*
Otra forma de asincronismo en JS: Generators: 
*/

/* A generator function. It is a function that returns a generator object. */
function* gen() {
    yield 1;
    yield 2;
    yield 3;
} // Tenemos 3 valores dentro de la función generator

// ¿Como podemos acceder a ellos? 

const g = gen(); // Es un objeto el generador. Por lo que primero hay que instanciarlo para poder usarlo a diferencia de las funciones. 

console.log(g.next());
// Output: { value: 1, done: false }
console.log(g.next().value);
// Output: 2
console.log(g.next().value);
// Output: 3
console.log(g.next().value);
// Output: undefined. 
// El generador no tiene mas valores para retornar. 

//-------------------------------------------------

function* iterate(array) {
    for (const value of array) {
        yield value;
    };
};
// Este generador irá devolviendo uno a uno los distintos valores de un array. 

const it = iterate(["Mariano","Oscar","Ana","Omar","Lucia","Fredy"])

console.log(it.next().value); // Imprime un nombre del array a la vez
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

/*
Output: 
Mariano
Oscar
Ana
Omar
Lucia
Fredy
undefined
*/