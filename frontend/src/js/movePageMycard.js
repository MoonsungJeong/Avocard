import Router from "../app.js";

export default class movePageMycard {
    constructor(){
        document.querySelector("#mycard").addEventListener("click", this.changePage,false);
    }
    changePage(e){
        e.preventDefault();
        if(e.target.matches("[data-link]")) {
            history.pushState(null, null, e.target.href);
            new Router();
        }
        if(e.target.tagName == "I"){
            history.pushState(null, null, e.target.parentNode.href);
            new Router();
        }
    }
}
