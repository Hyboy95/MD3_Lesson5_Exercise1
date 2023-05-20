const http = require('http');
const fs = require('fs');
const qs = require('qs');
const {convertNumber} = require('./convert');

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        fs.readFile('./views/input.html', 'utf-8', (err, data) => {
            if (err) console.log(err.message);
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end',() => {
            data = qs.parse(data).number;
            let num = convertNumber(data);
            fs.readFile('./views/result.html', 'utf-8', (err, dataHtml) => {
                if (err) console.log(err.message);
                dataHtml = dataHtml.replace('{result}', num);
                res.writeHead(200,{'Content-type':'text/html'});
                res.write(dataHtml);
                return res.end();
            })
        })
    }
})

server.listen(3000, 'localhost', () => console.log('Server is running at http://localhost:3000'));
