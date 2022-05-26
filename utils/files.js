const fs = require("fs");

const getFiles = (path, ending) => {
  return fs.readdirSync(path).filter((file) => file.endsWith(ending));
};

module.exports = {
  getFiles,
};
