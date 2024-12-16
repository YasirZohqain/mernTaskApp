const mongoose = require("mongoose");

const connectDataBase = async () => {
    try{
        const coonect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongooDB connect`)

    }
    catch(err) {
        console,log(err)
        process.exit(1)
    }
}

module.exports = connectDataBase;