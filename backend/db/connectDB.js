const mongoose = require('mongoose');

const connectBD = async (url) => {
  return mongoose.connect(url);
};

module.exports = connectBD;
