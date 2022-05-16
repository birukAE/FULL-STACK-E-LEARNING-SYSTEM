const express=require("express");
const app = express();

const cors= require('cors');
app.use(cors());
app.use(express.json());

const postsRoute = require("./routes/posts")
app.use('/posts',postsRoute);


const teachRoute = require("./routes/teach")
app.use('/teach',teachRoute);


const studentRoute = require("./routes/student")
app.use('/student',studentRoute);


app.listen(3001,(req,res)=>{
    console.log("the server is running");
}); 