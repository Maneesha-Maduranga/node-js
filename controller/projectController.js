const Project = require('../model/projectModel');

async function getAllProject(req, res) {
  try {
    const Projects = await Project.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(Projects));
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllProject,
};
