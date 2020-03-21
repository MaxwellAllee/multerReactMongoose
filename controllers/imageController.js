const path = require('path');
const crypto = require('crypto');
const GridFsStorage = require('multer-gridfs-storage');
const connectionInfo = require('../server.js')
console.log(connectionInfo)
const mongoURI = connectionInfo.MONGO
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  module.exports = storage