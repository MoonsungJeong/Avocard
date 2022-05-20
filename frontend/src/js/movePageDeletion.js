import StorageCheck from "./funcStorageCheck.js";
import Router from "../app.js";

export default class movePageTheme {
    constructor(){
        document.querySelector("#deletion_btn").addEventListener("click", this.changePage,false);
    }
    changePage(e){
        e.preventDefault();
        const storage = new StorageCheck;
        //guest user
        if(storage.storageUserCheck() == "guest"){ alert("Guest can't go to Deletion");return; }

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
