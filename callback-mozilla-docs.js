/*
Función Callback

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Ejemplo (Callback sincrónico):
Se ejecuta inmediatamente...
*/

function saludar(nombre) {
    alert('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);

/*
Output: 

1° Pregunta mediante un prompt 'Por favor ingresa tu nombre. '
// Guarda el input en la variable nombre y envía al callback que es la función "saludar" porque así la invoque yo el nombre para que esta ultima...
2° Imprima por alert un 'Hola Mariano' en mi caso.
*/

/*

El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.

Sin embargo, tenga en cuenta que las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación a sincrónica — estas se denominan devoluciones de llamada asincrónicas. Por ejemplo, nuestro sencillo ejemplo de maps-example.html (ver en vivo) utiliza la API de Google Maps y la API de geolocalización para mostrar un mapa de la ubicación actual de su dispositivo.

Como obtener las coordenadas del dispositivo de su GPS es asíncrono (no sabemos exactamente cuándo se devolverán los datos), el método Geolocation.getCurrentPosition() toma una función de devolución de llamada anónima como parámetro, que a su vez toma los datos de coordenadas devueltos como un parámetro. Esta función solo se ejecuta cuando se devuelven los datos de coordenadas.

*/