let projects = require('../projects.json');

class Project {
  constructor(name, description, revenue) {
    this.id = Math.floor(4 + Math.random() * 10);
    this.name = name;
    this.description = description;
    this.revenue = revenue;
  }
}

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(projects);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const project = projects.find((p) => p.id === id);
    resolve(project);
  });
}
function create(project) {
  return new Promise((resolve) => {
    const newProject = new Project(
      project.name,
      project.description,
      project.revenue
    );
    projects.push(newProject);

    resolve(newProject);
  });
}

module.exports = {
  findAll,
  findById,
  create,
};
