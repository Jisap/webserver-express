//npm install hbs

const express = require('express'); // Requerimos el paquete express
const app = express();              // Lo metemos en una constante app

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000; // Configuración puertos para Heroku

app.use(express.static(__dirname + '/public')); // Así siempre se cargaría primero esta página

//EXPRESS HBS engine
hbs.registerPartials(__dirname + '/views/parciales') // Le decimos a hbs donde están las distintas partes de nuestro html
app.set('view engine', 'hbs');                       // El uso de hbs como motor de visualización predeterminado requiere solo una línea de código 
                                                     // en la configuración de la aplicación. Esto generará archivos .hbs cuando se llame a res.render.



app.get('/', (req, res) => {        // Hacemos una solicitud get cuando el path sea un "/" 
//res.send('Hello World')           // Todas las peticiones que cumplan esa condición ejecutaran la función
                                    // que emitirá una respuesta "Hello world" o un Json o lo que sea.
// let salida = {              
//   nombre: 'fernando',
//   edad: 32,
//   url: req.url
// };

//  res.send(salida)                    // La función send() se encarga de hacer stringify etc.

    res.render('home',{                 // Renderizamos el archivo home.hbs

        nombre: 'jorge matos'           // Definimos las variables que queremos que se muestren
    });                 
});      

// app.get('/data', (req, res) => {    // En este caso el acceso al server será poniendo en el path "/data"
//                                     // Y la respuesta en este caso "Hola data".    
// res.send('Hola data')
// });

app.get('/about',(req,res) => {       // Renderizamos el archivo about.hbs
  
  res.render('about')
});


app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});