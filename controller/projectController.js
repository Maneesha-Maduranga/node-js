const Project = require('../model/projectModel');

async function getAllProjects(req, res) {
  try {
    const projects = await Project.findAll();
    if (projects) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(projects));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Server Error.Please try again' }));
  }
}
async function getProject(req, res, id) {
  try {
    const project = await Project.findById(id);
    if (project) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(project));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'No Product found with given ID' }));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Server Error.Please try again' }));
  }
}

module.exports = {
  getAllProjects,
  getProject,
};
