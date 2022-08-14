var http = require("http");

const httpServer = http.createServer(handleServer);
const port = 8081;


function handleServer(req, res) {
  if(req.url==='/welcome'){
    res.statusCode=200;
    res.end("Welcome to Dominos!");
  }

  if(req.url==='/contact') {
    res.statusCode=200;
    res.end(JSON.stringify(
        {phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'}
    ))
    
  }
  else{
    res.statusCode=404;
    res.end("404");
  }
}

httpServer.listen(port);

module.exports = httpServer;
