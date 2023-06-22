const express = require ('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./Config/db')
const userRouter = require('./routes/userRouter')
const port = 8080;

db(()=>{
    try {
        console.log("database successfully connected");
    } catch (error) {
        console.error("database not connected",error)
    }
})


app.use(cors())
app.use(bodyParser.json())
app.use("/api",userRouter)


app.listen(port,()=>{
    console.log(`listening on port no: ${port}`);
})