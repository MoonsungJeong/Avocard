import StorageCheck from "./funcStorageCheck.js";
import Router from "../app.js";

export default class movePageTheme {
    constructor(){
        document.querySelector("#admin_btn").addEventListener("click", this.changePage,false);
    }
    changePage(e){
        e.preventDefault();
        const storage = new StorageCheck;
        //only admin
        if(storage.sessionUserTypeCheck() !== "admin"){alert("Only Admin can access!");return;}
        
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
