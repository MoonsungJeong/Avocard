const time = require("./time");

function msRateLimit(params){
    return function(req,res,next){
        if(req.session.box == null){
             req.session.box = {
                 "ip":req.ip,
                 "count":0,
                 "lastReqTime":null,
                 "curReqTime":time.currentTime(),
                 "lastResetTime":time.currentTime()
             }
         }
         req.session.box.lastReqTime = req.session.box.curReqTime;
         req.session.box.curReqTime = time.currentTime();
         let ct = new Date(req.session.box.curReqTime);
         let lt = new Date(req.session.box.lastReqTime);
         const timeDiff = ct - lt;
         const miniTime = 500;
         if(timeDiff > miniTime){
             req.session.box.count++;
         }
         if(new Date() - new Date(req.session.box.lastResetTime) >= new Date(params.resetTime)){
             req.session.box.count = 0;
             req.session.box.lastResetTime = time.currentTime();
             //next();
         }
         if(req.session.box.count >= params.maxCount){
             if(new Date() - new Date(req.session.box.lastResetTime) < new Date(params.resetTime)){
                 console.log(params.resetMessage);
                 res.status(429).json("429");
                 return;
             }
             req.session.box.lastResetTime = time.currentTime();
             console.log(params.resetMessage);
             res.status(429).json("429");
             return;
         } 
         //console.log(miniTime +"<"+timeDiff +"<"+ params.timePerOneClick);
         if(timeDiff > miniTime && timeDiff < params.timePerOneClick){
             console.log(params.timeMessage);
             res.status(429).json("425");
             return;
         }
         
        next();
    }
} 
module.exports = {
    msRateLimit
};