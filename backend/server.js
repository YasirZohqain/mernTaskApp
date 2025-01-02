const dotenv = require('dotenv').config()
const express = require('express')
//const connectDB = require('./config/connectDB')
const mongoose = require("mongoose");
const taskRoutes = require('./routes/taskRoutes')


const app = express()




// mongoDB connect 
mongoose.connect(process.env.MONGO_URI)
        .then(()=> {
            app.listen(PORT,  ()=> {
                console.log(`Server is runing on port:${PORT}`)
            })
        }).catch((err)=> {
            console.log(err)
        })



/* mongoDB call and connect 
    but it connect after server connect that why i call in async server start funcation 
*/
//connectDB();





// Route or simple link
app.get('/', (req, res)=>{
    res.send('Home Page is OK2')
})


// MIDDLEWARE FUNC to access mongoDB database
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(taskRoutes)
   




app.get('/about', (req, res)=>{
    res.send('about Page OK')
})



/* express server create 
    same as here also
*/ 

// Port connect
const PORT = process.env.PORT || 5000
//app.listen(PORT,  ()=> {
  //  console.log(`Server is runing on port:${PORT}`)
//})


// const serverStart = async () => {
//     try {
//         await connectDB();
//         app.listen(PORT,  ()=> {
//             console.log(`Server is runing on port:${PORT}`)
//         })
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// serverStart();


// mongodb+srv://yasirzohqain123:<db_password>@merntaskcluster.boooa.mongodb.net/?retryWrites=true&w=majority&appName=MernTaskCluster




