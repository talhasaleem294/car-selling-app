const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

// username: saleemtalha294
// pasword: 4lVMW0DlWq2wHndz
module.exports = {
  server: {
    PORT: process.env.PORT || 3000
  },
  mongoDB: {
    // mongoURI: "mongodb://localhost:27017/test"
    mongoURI: "mongodb+srv://saleemtalha294:4lVMW0DlWq2wHndz@cluster0.l7nqaam.mongodb.net/"
  }
};

