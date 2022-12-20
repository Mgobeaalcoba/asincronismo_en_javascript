// Trabajemos con una API: https://fakeapi.platzi.com/

// Como vamos a trabajar a nivel de consola o terminal tenemos que instalar un recurso en nuestra terminal

// npm install xmlhttprequest ---> En consola corro este codigo. 

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

/**
 * We create a new XMLHttpRequest object, open a connection to the API, and then send the request. 
 * 
 * Once the request is sent, we wait for the response. When the response is ready, we check the status
 * code. If the status code is 200, we parse the response and send it to the callback function. If the
 * status code is not 200, we send an error to the callback function
 * @param urlApi - The URL of the API you want to fetch data from.
 * @param callback - The function to call when the request is complete.
 */
function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest(); // Instanciamos la const de arriba. 
    xhttp.open('GET', urlApi, true); // Abro una conexión con nuestra API. En este caso de tipo GET, en la url de la API que le pasé a la función y true es para habilitar la ejecución. 
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            /*
            Estados de la request
            0 = No se inicializó
            1 = Loading
            2 = Se ejecutó el Send
            3 = Trabajando con la solicitud
            4 = Completada la consulta a la API
            */
           if (xhttp.status === 200) {
            /*
            Status: 
            200 = Solicitud correcta
            */
            callback(null, JSON.parse(xhttp.responseText));
            // Convierto la respuesa a JSON mediante y lo envío a mi función callback.
           }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null);
        }
    } 
    xhttp.send();
} 


/* 1. Fetching data from the API
2. Fetching data from the API with the id of the first product
3. Fetching data from the API with the id of the category of the second product
4. Logging the first product
5. Logging the title of the second product
6. Logging the name of the category of the third product */
// Tres peticiones con tres datos distintos
// el callback en lugar de definirlo en una función previamente lo voy a 
// definir cada vez que sea necesario con funciones anonimas. 
fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]); // Quiero ver un objeto en particular. El primero de mi data
            console.log(data2.title); // Quiero ver el titulo de mi segunda petición. 
            console.log(data3.name); // Quero ver el nombre de data3. 
        })
    })
} )