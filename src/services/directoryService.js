const fs = require("fs");
const path = require("path");
const { DirectoryDB } = require("../models/model");

function getDirectoriesInfo(directoryPath) {
  return fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .map((dirent) => {
      const fullPath = path.join(directoryPath, dirent.name);
      //   console.log(fullPath);
      const stats = fs.statSync(fullPath);
      //   console.log(stats);

      return {
        name: dirent.name,
        isDirectory: dirent.isDirectory(),
        created: stats.birthtime,
        modified: stats.mtime,
        size: stats.size,
      };
    });
}

function saveDirectoriesInfoToDB(directoriesInfo) {
  directoriesInfo.forEach((directoryInfo) => {
    // console.log(directoryInfo, "info");
    const directoryDB = new DirectoryDB(directoryInfo);
    directoryDB
      .save()
      .then(() => {
        console.log("Directory info saved to MongoDB:", directoryInfo);
      })
      .catch((error) => {
        console.error("Error saving directory info to MongoDB:", error);
      });
  });
}

function scheduleDirectoryListing(directoryPath, interval) {
  function listDirectoriesInfo() {
    const directoriesInfo = getDirectoriesInfo(directoryPath);
    // console.log("Directories Info:", directoriesInfo);
    saveDirectoriesInfoToDB(directoriesInfo);
  }

  listDirectoriesInfo();
  setInterval(listDirectoriesInfo, interval);
}

module.exports = {
  getDirectoriesInfo,
  saveDirectoriesInfoToDB,
  scheduleDirectoryListing,
};
