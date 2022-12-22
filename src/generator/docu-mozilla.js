/*
Generador
El objeto Generator es retornado por una función generator y es conformado tanto el protocolo iterable como el protocolo iterador.

Constructor
Este objeto no puede ser instanciado directamente. En su lugar, una instancia del objeto Generator puede ser devuelta por una función generator:
*/

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen(); // "Generator { }"

/*

Métodos de instanciación
Tambien hereda propiedades de Iterator

Generator.prototype.next()
Retorna el valor ofecido por la expresión yield

Generator.prototype.return()
Retorna el valor dado y finaliza el generador.

Generator.prototype.throw()
Lanza un error al generador (también finaliza el generador, a menos que sea atrapado desde ese generador)

Propiedades
Tambien hereda propiedades de Iterator

Generator.prototype.constructor
Especifica la funciòn que construye el prototipo del objeto.

Generator.prototype[@@toStringTag]
La cuerda "Generator".

Ejemplo
Un iterador infinito
*/

function* idMaker() {
    var index = 0;
    while(true)
      yield index++;
  }
  
  var gen = idMaker(); // "Generator { }"
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  // ...