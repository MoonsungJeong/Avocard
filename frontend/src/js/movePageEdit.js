import StorageCheck from "./funcStorageCheck.js";

import Router from "../app.js";

export default class movePageMore {
    constructor(){
        document.querySelector("#edit").addEventListener("click", this.changePage,false);
    }
    changePage(e){
        e.preventDefault();
        const storage = new StorageCheck;
        // check user: guest user
        if(storage.storageUserCheck() == "guest"){ 
            alert("Guest can't make Avocard!");
            return; 
        }
        // login user, Card already exist
        if(storage.sessionMyCardCheck()){
            alert("Only one card!");
            return;
        }
        // login user, Card not exist
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
