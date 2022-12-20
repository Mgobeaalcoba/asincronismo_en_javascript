// Fetch Post hacía la API de Platzi. 
// Vamos a guardar nuevos datos en la API de products de Platzi. 

// Los métodos con API´s son GET (traer info), POST (envíar info), PUT-PATCH (actualizar info), y DELETE (eliminar info)

import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

/**
 * It sends a POST request to the urlApi with the data as the body of the request
 * @param urlApi - The URL of the API endpoint.
 * @param data - The data to be sent to the server.
 * @returns The response from the server.
 */
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin', // viene por defecto así
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) // El contenido de mi POST. Lo transforme en objeto JSON para enviarlo mediante JSON.stringify
    });
    return response;
}

/* The data that we are going to send to the API. */
const data = {
    "title": "Juego de Camping",
    "price": 50,
    "description": "El mejor juego de camping del mercado. ",
    "categoryId": 1,
    "images": ["https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  }

/* Sending a POST request to the API endpoint with the data as the body of the request. */
postData(`${API}/products`, data) // Con esto ya envío la data pero no tengo respuesta del servidor
  .then(response => response.json()) // Transformo la respuesta en un JSON antes de mostrarla. 
  .then(data => console.log(data)) // Le pido que me imprima la respuesta de mi post en la API

/*
1° Output: (bad request) Dentro del fetch tenía "header" en lugar de "headers"
{
  statusCode: 400,
  message: [
    'title should not be empty',
    'title must be a string',
    'price should not be empty',
    'price must be a positive number',
    'description should not be empty',
    'description must be a string',
    'categoryId should not be empty',
    'categoryId must be a number conforming to the specified constraints',
    'images should not be empty',
    'images must be an array'
  ],
  error: 'Bad Request'
}

2° Output: (Tenía un category id que no existía.)
{ statusCode: 404, message: 'Category not found', error: 'Not Found' }

3° Output: (Ok)
{
  title: 'Juego de Camping',
  price: 50,
  description: 'El mejor juego de camping del mercado. ',
  images: [
    'https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ],
  category: {
    id: 1,
    name: 'Clothes',
    keyLoremSpace: 'fashion',
    image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=8448'
  },
  id: 244
}

*/