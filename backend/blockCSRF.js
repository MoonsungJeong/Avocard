function blockCSRF(param_hostURL){
    return function(req,res,next){
        if(req.headers.referer == undefined){
            next();
            return;
        }
        const previousURL = new URL(req.headers.referer);
        if(previousURL.host == param_hostURL){
            next();
        }else{
            console.log("Access from other web - CSRF detected!");
            res.status(401).json("401 - CSRF");
            //res.redirect(req.headers.referer);
            return;
        }
    }
} 
module.exports = {
    blockCSRF
};