//const http = require('http')
import http from 'http'

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)

    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h3 style="color:purple;">Hola soy un servidor Http</h3>')
    res.end(`<b><i style="color:crimson;">Fecha y hora actual ${new Date().toLocaleString()}</i></b>`)
})

const PORT = 8080
server.listen(PORT, () => console.log(`Servidor http escuchando en http://localhost:${PORT}`))

