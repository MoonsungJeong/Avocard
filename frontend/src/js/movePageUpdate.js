import StorageCheck from "./funcStorageCheck.js";

import Router from "../app.js";

export default class movePageUpdate {
    constructor(){
        document.querySelector("#update_btn").addEventListener("click", this.changePage,false);
    }
    changePage(e){
        e.preventDefault();
        
        if (e.target.matches("[data-link]")) {
            history.pushState(null, null, e.target.href);
            new Router();
        }
        if(e.target.tagName == "I"){
            history.pushState(null, null, e.target.parentNode.href);
            new Router();
        }
    }
}
