const express=require("express");
const app=express();
const {mongoDB}=require("./mongo-connect");
const compression=require("compression");
const cors=require("cors");
const path=require("path");
const PORT=process.env.PORT||4000;
const Routes=require("./routes/index");
// middleware 
app.use(express.json());
app.use(compression({threshold:6,}));
app.use(cors());
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"../public")));
// routes
app.use(Routes);
// mongoDB connection
mongoDB();
app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`);
})