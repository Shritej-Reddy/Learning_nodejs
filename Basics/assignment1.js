const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url == '/') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write(`<body>
            <form action="/create-user" method="POST"><input type="text" name="user-name"><button type="submit">User Name</button>
        </body>`)
    }
    if(url == '/users') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><ul><li>User1</li></ul></body>')
    }
    if(url === '/create-user' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
        })
    }
})
server.listen(3000);