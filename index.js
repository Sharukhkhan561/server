

const express = require("express")
const dotenv = require("dotenv")
const {readdirSync} = require("fs");
// import routes
const authRoute = require("./routes/authRoutes");
const { connectDb } = require("./connection");

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;
connectDb();
// making ROutes
app.get("/", (req,res)=>{
res.send("server received response........!!")
})
// import and use routes dynamically 

readdirSync("./routes").map((route)=>{
app.use("/api", require(`./routes/${route}`))
})
console.log(readdirSync("./routes"))
app.use("/api", authRoute)
app.listen(port,()=>{
    console.log(`server is running ${port}`)
})