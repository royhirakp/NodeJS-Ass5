var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    if (req.url == "/welcome") {
        res.writeHead(200, {
            "content-type": "text/plain"
        })
        res.write('Welcome to Dominos!')
    }
    else if (req.url == "/contact") {
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }));
    } else {
        res.writeHead(404, {
            "content-type": "text/plain"
        })
        res.write("404 not found")
    }
    res.end()
}
console.log(5)
httpServer.listen(8081, () => console.log("server uppp"))
module.exports = httpServer;