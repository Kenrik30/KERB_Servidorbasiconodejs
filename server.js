const http = require('http'); // modulo para crear el servidor
const fs = require('fs'); // Modulo para leer archivos
const path = require('path'); // Modulo para manejo de rutas

const server = http.createServer((req, res) => {
    //Definimos la ruta del archivo index.html
    const filePath = path.join(__dirname, 'index.html');

    //Leemos el archivo
    fs.readFile(filePath,(err, content) => {
        if (err) {
            //Si hay un error (ej. no existe archivo)
            res.writeHead(500);
            res.end('Error interno del servidor');
        } else {
            //Si todo esta bien, enviamos el HTML
                res.writeHead(200, {'content-type':'text/html'});
            res.end(content, 'utf-8'); 
           }
    });
});

//El servidor escuchara en el puerto 3000
server.listen(3000, ()=> {
    console.log('Servidor corriendo en http://localhost:3000');

});
