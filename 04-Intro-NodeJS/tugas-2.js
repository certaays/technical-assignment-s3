 const http = require('http')

 const requestListener = (request, response) => {
    if(request.url === "/about"){
        const msg = "Welcome to about us page"
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write(msg)
    }
    else if(request.url === "/contact"){
        const msg = "Welcome to contact page"
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write(msg)
    }
    else{
        const msg = "Hello World!"
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write(msg)
    }
    response.end()
 }

 const server = http.createServer(requestListener)

 server.listen(8000)