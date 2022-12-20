/*
En este desafío tienes la función delay la cual se espera que un tiempo específico retorne un mensaje

La función deberá recibir dos parámetros:

time: el tiempo de espera
message: el mensaje que debe imprimir después del tiempo de espera
La función delay debe retornar una promesa para poderlo usarlo de forma asíncrona.

Nota: Debes usar la función setTimeout con el namespace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:

window.setTimeout(() => {
  // code
})

Ejemplo 1:

Input:
delay(2000, "Hello after 2s")
.then((message) => console.log(message))

Output:
// after 2s
"Hello after 2s"

Ejemplo 2:

Input:
delay(3000, "Hello after 3s")
.then((message) => console.log(message))

Output:
// after 3s
"Hello after 3s"
*/

function delay(time, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() =>{
            resolve (message);
           }, time);
        });
    };

delay(2000, "Hello after 2s")
    .then((message) => console.log(message));

delay(3000, "Hello after 3s")
    .then((message) => console.log(message));

/*
Output: 
Hello after 2s
Hello after 3s
*/