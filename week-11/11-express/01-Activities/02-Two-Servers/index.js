//require http module

const http = require('http');

const port1 = 7000
const port2 = 7500

const handleRequest1 = (request, response)=> {
    response.end(`Do Or Do Not, There Is No Try! Port ${request.url} Has Been Reached`)
}

const handleRequest2 = (request, response)=> {
    response.end(`It's never too late to be what you might've been. ${request.url} Has Been Reached`)
}

const server1 = http.createServer(handleRequest1);

const server2 = http.createServer(handleRequest2);

server1.listen(port1, ()=>{
    console.log(`First Server Has Started, listening on Port ${port1}`);
})

server2.listen(port2, ()=>{
    console.log(`Second Server Has Started, listening on Port ${port2}`)
})