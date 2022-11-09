const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://admin:anhtu2001@cluster0.yagjybb.mongodb.net/test');
        console.log("Connect DB succeed");
      } catch (error) {
        console.log(error);
      }
}

module.exports = { connect };
