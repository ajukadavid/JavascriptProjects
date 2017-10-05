var http = require('http');

var handleRequests = function (req, res){
	if(req.url==="/"){
		res.write("Hello from nodejs")
	}
	else if(req.url==="/Products" || "/products"){
		res.write("List of Products");
	}
	else if(req.url==="/Cart" || "/cart"){
		res.write("Showing your cart");
	}
	res.end();
}

var http=require('http')

var server=http.createServer(handleRequests);

server.listen(3000,function(){
	console.log('server is running on port 3000');
});