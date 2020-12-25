const hbs = require('hbs');

// Helpers

hbs.registerHelper('getAnio', ()=> {
  return new Date().getFullYear();                    // En el parcial donde pongamos la función getAnio apararecerá el año.
});

hbs.registerHelper('capitalizar', (texto) =>{

  let palabras = texto.split(' ');                                                    // Creamos un array de palabras en base al texto
  palabras.forEach((palabra, idx) => {                                                // Recorremos el array y obtenemos sus índices    
    palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()  // a cada palabra su 1ª letra en mayúsculas + resto en minúsculas
  });

  return palabras.join(' '); // Unimos las palabras del array separadas por un espacio
})