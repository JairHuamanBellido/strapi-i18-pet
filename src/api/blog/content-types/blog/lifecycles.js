const { v4: uuidv4 } = require("uuid");

module.exports = {
  beforeCreate(model) {
    console.log(model)
  },
};
