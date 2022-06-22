const express =  require("express");
const router = express.Router();

//middleware
router.use(function timeLog(req, res, next){
    console.log("Time: ", Date.now());
    next();
});

router.get("/", (req, res)=>{
    res.send("This is root page!");
});
router.get("/api",(req, res)=>{
    res.send("this is api page")
});

module.exports = router;
