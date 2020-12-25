const http = require('http');   // Requerimos de node el paquete http

http.createServer((req, res) => {   // Creamos el webserver

    res.writeHead(200, {'Content-Type': 'application/json'}); //Status 200 es que se hace algo correctamente, en este caso devolvemos un json
    
    let salida = {              //Json
        nombre: 'fernando',
        edad: 32,
        url: req.url
    }

    res.write(JSON.stringify(salida));  // Respuesta de nuestro servidor
    //res.write('Hola mundo');
    
    res.end();

})
.listen(8080);

console.log('Escuchando el puerto 8080');