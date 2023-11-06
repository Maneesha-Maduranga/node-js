let projects = require('../projects.json');

class Project {
  constructor(name, description, revenue) {
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

module.exports = {
  findAll,
  findById,
};
