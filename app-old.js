const http = require('http');

http.createServer( (req, res) => {

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'})



    // res.write('id, nombre\n');
    // res.write('1, Fernando\n');
    // res.write('2, Sebastian\n');
    // res.write('3, Maria\n');
    // res.write('4, Pedro\n');
    res.write('Hola Mundo');
    res.end()
})
.listen( 8080 )

console.log('Escuchando el puerto', 8080);