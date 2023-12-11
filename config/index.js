const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

module.exports = {
  server: {
    PORT: process.env.PORT || 3000
  },
  mongoDB: {
    mongoURI: "mongodb+srv://saleemtalha294:4lVMW0DlWq2wHndz@cluster0.l7nqaam.mongodb.net/"
  }
};

