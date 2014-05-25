/**
 * Created by liango on 2014/5/25.
 *
 * 使用nodejs
 */

// 使用nodejs
var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1>Hello, World!</h1>')
    res.end("<p>the end.</p>")
}).listen(3000)
console.log("http server is listening at port 3000...")