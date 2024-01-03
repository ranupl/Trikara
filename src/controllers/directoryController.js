const services = require("../services/directoryService");

const Directories = (req, res) => {
  let interval = 5 * 60 * 1000;
  const directoryPath = req.query.path || "./";
  services.scheduleDirectoryListing(directoryPath, interval);
  res.json({ message: "Directories info saved to MongoDB" });
};

module.exports = { Directories };
