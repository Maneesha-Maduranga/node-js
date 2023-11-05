const Projects = require('../projects.json');

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(Projects);
  });
}

module.exports = {
  findAll,
};
