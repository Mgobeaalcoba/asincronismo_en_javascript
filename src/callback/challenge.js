// Trabajemos con una API: https://fakeapi.platzi.com/

// Como vamos a trabajar a nivel de consola o terminal tenemos que instalar un recurso en nuestra terminal

// npm install xmlhttprequest ---> En consola corro este codigo. 

const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest(); // Instanciamos la const de arriba. 
    xhttp.open('GET', urlApi, true) // Abro una conexión con nuestra API. En este caso de tipo GET, en la url de la API que le pasé a la función y true es para habilitar la ejecución. 
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
            callback(null, JSON.parse(xhttp.responseText))
            // Convierto la respuesa a JSON mediante y lo envío a mi función callback.
           }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null)
        }
    } 
    xhttp.send()
} 