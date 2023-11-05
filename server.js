const http = require('http');
const port = 5000;

//Controllers
const { getAllProject } = require('./controller/projectController');

const server = http.createServer((req, res) => {
  if (req.url == '/v1/api/products' && req.method == 'GET') {
    getAllProject(req, res);
  } else {
    res.writeHead(400, { 'Content-Type': 'application/json' });
  }
});

server.listen(port, () => {
  console.log(`Server is Up And Running on ${port}`);
});
