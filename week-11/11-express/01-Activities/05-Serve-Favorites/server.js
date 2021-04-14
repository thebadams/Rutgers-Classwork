const http = require('http');
const fs = require('fs');

const PORT = 8080;

const handleRequest = (req, res) => {
	// Here we use the fs package to read our index.html file
	const path = req.url;

	switch (path) {
		case '/':
			return fs.readFile(`${__dirname}/index.html`, (err, data) => {
				if (err) throw err;
				// We then respond to the client with the HTML page by specifically telling the browser that we are delivering
				// an html file.
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(data);
			});
		case '/food':
			return fs.readFile(`${__dirname}/food.html`, (err, data) => {
				if (err) console.log(err);
				// We then respond to the client with the HTML page by specifically telling the browser that we are delivering
				// an html file.
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(data);
			});
		case '/movies':
			return fs.readFile(`${__dirname}/movies.html`, (err, data) => {
				if (err) throw err;
				// We then respond to the client with the HTML page by specifically telling the browser that we are delivering
				// an html file.
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(data);
			});
		case '/css':
			return fs.readFile(`${__dirname}/css-frameworks.html`, (err, data) => {
				if (err) throw err;
				// We then respond to the client with the HTML page by specifically telling the browser that we are delivering
				// an html file.
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(data);
			});
		default:
			return fs.readFile(`${__dirname}/404.html`, (err, data) => {
				if (err) throw err;
				// We then respond to the client with the HTML page by specifically telling the browser that we are delivering
				// an html file.
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(data);
			});
	}
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
	console.log(`Server Opened At ${PORT}`);
});
