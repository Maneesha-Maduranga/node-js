const http = require('http');
const port = 5000;

const {
  getAllProjects,
  getProject,
} = require('./controller/projectController');

const server = http.createServer(async (req, res) => {
  if (req.url == '/v1/api/products' && req.method == 'GET') {
    getAllProjects(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method == 'GET'
  ) {
    const id = req.url.split('/')[4];
    getProject(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'No routes found with url' }));
  }
});

server.listen(port, () => {
  console.log(`Server is Up And Running on ${port}`);
});
