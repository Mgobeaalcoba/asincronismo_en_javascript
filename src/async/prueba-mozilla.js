// Función asyncrona que devuelve un objeto.

/**
 * ResolveAfter2Seconds returns a promise that resolves after 2 seconds.
 * @returns A promise that will resolve after 2 seconds.
 */
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
/**
 * "asyncCall() is a function that calls resolveAfter2Seconds() and waits for it to resolve before
 * logging the result to the console."
 * 
 * The async keyword before a function has two effects:
 * 
 * It makes it always return a promise.
 * It makes await work inside the function
 */
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();