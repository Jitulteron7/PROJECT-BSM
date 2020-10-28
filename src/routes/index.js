const router=require("express").Router();
const userRouter=require("./user");

router.use("/user",userRouter);
router.get("/",(req,res,next)=>{
    
    res.render("index");
});

router.get("*",(req,res,next)=>{
    const error=new Error("This Router does not exits");
    error.status=404;
    next(error);
});

router.use((error,req,res,next)=>{
    console.error(error);
    res.status(error.status||500).json({
        error:true,
        message:error||"error somthing went wrong",
        router:req.url
    });
});

module.exports=router;