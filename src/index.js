var http = require("http");

const httpServer = http.createServer(handleServer);
const port = 8081;


function handleServer(req, res) {
  if(req.url==='/welcome'){
    res.end("Welcome to Dominos!");
    res.sendStatus(200);
  }

  if(req.url==='/contact') {
    res.end(JSON.stringify(
        {phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'}
    ))
  }
  else{
    res.sendStatus(404);
  }
}

httpServer.listen(port);

module.exports = httpServer;
