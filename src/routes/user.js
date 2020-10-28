const router=require("express").Router();
// auth section
router.post("/login",(req,res,next)=>{
    try{
            //  auth sections
    }
    catch(err){
        next(err);
    }
});
router.post("/sign-up",(req,res)=>{
    try{

    }
    catch(err){
        next(err);
    }

});
router.get("/login",(req,res)=>{

});
router.get("/sign-up",(req,res)=>{

});

module.exports=router;