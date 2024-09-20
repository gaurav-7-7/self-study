const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Home');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify(["Courses 1", "Courses 2", "Courses 3"]));
        res.end();
    }

}); // creating server usign the inbuilt method from the HTTP modules

// this created server is a event emitter and can easily access all the properties of events
// server.on('connection', (socket) => {
//     console.log("New connection...")
// })
server.listen(5000);

console.log('Listenning to port 5000...');
// every time there is a new server request it raises a new event and we can use the "on" method to handle the event so before listening to the HTTP we wanna register a handler