import StorageCheck from "./funcStorageCheck.js";
import Router from "../app.js";

export default class reqUserLogout {
    constructor(){
        document.querySelector("#logout_btn").addEventListener("click", this.userLogout, false);
    }
    userLogout(e){
        e.preventDefault();

        if(!confirm("Are you sure?")){ return; }
        fetch("/api/user/logout", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            alert(res);
            const storage = new StorageCheck;
            storage.storageUserToEmpty();
            sessionStorage.clear();

            // background init
            let background = document.getElementsByTagName("body")[0];
            background.style.background="#ffffff";
            background.style.color="#000000";

            if (e.target.matches("[data-link]")) {
                history.pushState(null, null, e.target.href);
                new Router();
            }
            if(e.target.tagName == "I"){
                history.pushState(null, null, e.target.parentNode.href);
                new Router();
            }
        })
        .catch(error => {
            alert("Thank you for using this app!");
            const storage = new StorageCheck;
            storage.storageUserToEmpty();
            sessionStorage.clear();
            
            // background init
            let background = document.getElementsByTagName("body")[0];
            background.style.background="#ffffff";
            background.style.color="#000000";
            
            if (e.target.matches("[data-link]")) {
                history.pushState(null, null, e.target.href);
                new Router();
            }
            if(e.target.tagName == "I"){
                history.pushState(null, null, e.target.parentNode.href);
                new Router();
            }
        })
    }
}
