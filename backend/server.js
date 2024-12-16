const dotenv = require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')

const app = express()



/* mongoDB call and connect 
    but it connect after server connect that why i call in async server start funcation 
*/
//connectDB();


app.get('/', (req, res)=>{
    res.send('Home Page is on')
})

/* express server create 
    same as here also
*/
const PORT = process.env.PORT || 5000
//app.listen(PORT,  ()=> {
  //  console.log(`Server is runing on port:${PORT}`)
//})


const serverStart = async () => {
    try {
        await connectDB();
        app.listen(PORT,  ()=> {
            console.log(`Server is runing on port:${PORT}`)
        })
    }
    catch (err) {
        console.log(err)
    }
}

serverStart();


// mongodb+srv://yasirzohqain123:<db_password>@merntaskcluster.boooa.mongodb.net/?retryWrites=true&w=majority&appName=MernTaskCluster