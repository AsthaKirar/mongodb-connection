const mongoose = require("mongoose")
async function connectedDB(){
    await mongoose.connect("mongodb://127.0.0.1:27017/textmongodb")
    console.log("connected to db")
}
connectedDB();
module.exports = mongoose.connection;



