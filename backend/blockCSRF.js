function blockCSRF(param_hostURL){
    return function(req,res,next){
        // no referer: first access: clean request
        if(req.headers.referer == undefined){
            next();
            return;
        }
        const previousURL = new URL(req.headers.referer);
        // If referer and host(server) URL are same: clean request
        if(previousURL.host == param_hostURL){
            next();
        }else{
            // If these two are different, 
            //Probably it's CSRF request: so res with 401 status Code
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

