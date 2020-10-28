const mongoose=require("mongoose");
const mongoDB=()=>{
    const MONGO_URL=require("./config/keys");
        mongoose.connect(MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true});
        mongoose.connection.on("connected",()=>{
            console.log("mongodb connected");
        })
        mongoose.connection.on("error",(err)=>{
            console.log("mongodb error "+err);
        });
}
module.exports={mongoDB};
