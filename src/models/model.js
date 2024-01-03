const mongoose = require("mongoose");

const directorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  isDirectory: {
    type: Boolean,
  },
  created: {
    type: Date,
  },
  modified: {
    type: Date,
  },
  size: {
    type: Number,
  },
});

const DirectoryDB = new mongoose.model("directory", directorySchema);
module.exports = { DirectoryDB };
