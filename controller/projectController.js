const Project = require('../model/projectModel');
const { getPostData } = require('../utils');

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

async function createProject(req, res) {
  try {
    const body = await getPostData(req);

    const { name, description, revenue } = JSON.parse(body);

    const project = {
      name,
      description,
      revenue,
    };

    const newProject = await Project.create(project);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newProject));
  } catch (error) {}
}

module.exports = {
  getAllProjects,
  getProject,
  createProject,
};
