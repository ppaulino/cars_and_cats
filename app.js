// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
	// see what URL the clients are requesting:
	console.log('client request URL: ', request.url);
	// routing:
	switch (request.url) {
		case '/':
			filename = 'views/index.html';
		break;
		case '/cars':
			filename = 'views/cars.html';
		break;
		case '/cats':
			filename = 'views/cats.html';
		break;
		case 'style.css':
			filename = './stylesheets/style.css';
		break;
		case '/images/car01.jpg':
			filename = './images/car01.jpg';
		break;
		case '/images/car02.jpg':
			filename = './images/car02.jpg';
		break;
		case '/images/car03.jpg':
			filename = './images/car03.jpg';
		break;
		case '/images/car04.jpg':
			filename = './images/car04.jpg';
		break;
		case '/images/cat01.jpg':
			filename = './images/cat01.jpg';
		break;
		case '/images/cat02.jpg':
			filename = './images/cat02.jpg';
		break;
		case '/images/cat03.jpg':
			filename = './images/cat03.jpg';
		break;
		case '/images/cat04.jpg':
			filename = './images/cat04.jpg';
		break;
		default:
			filename = null;
		break;
	}
	if(filename != null) {
		fs.readFile(filename, function (errors, contents) {
			response.write(contents);
			response.end();
		});
	}
	// request didn't match anything:
	else {
		response.writeHead(404);
		response.end('File not found!!!');
	}
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");