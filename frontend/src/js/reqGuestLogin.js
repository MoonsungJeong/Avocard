import Router from "../app.js";
import Screen from "./funcScreen.js";
import StorageCheck from "./funcStorageCheck.js";

export default class reqGuest {
    constructor(){
        document.querySelector("#guest_btn").addEventListener("click", this.guestLogin,false);
    }
    guestLogin(e){
        e.preventDefault();
        
        const screen = new Screen;
        const storage = new StorageCheck;
        screen.screenOn();

        fetch("/api/guest/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            alert(res)
            screen.screenOff();
            if (res === "Welcome Guest to Avocard!") {
                if(!storage.storageCheck()){
                    /* 
                    let data = {
                        "currentUser":{
                            "name":"guest"    
                        },
                        "guestPocket":[],
                        "guestSetting":{
                            "theme":"light"
                        }
                    };
                    localStorage.setItem("Avocard",JSON.stringify(data)); 
                    */
                    storage.storageInit();
                }
                storage.storageUserToGuest();
                if (e.target.matches("[data-link]")) {
                    history.pushState(null, null, e.target.href);
                    new Router();
                }
            }
        })
        .catch(error => {
            //const screen = new Screen;
            screen.screenOff();
            
            if(!storage.storageCheck()){
            // no Network, no localStorage
                alert("Need Internet to initialize!");
                return;
            }
            // no Network, yes localStorage
            storage.storageUserToGuest();
            alert("Welcome Guest to Avocard!");
            
            if (e.target.matches("[data-link]")) {
                history.pushState(null, null, e.target.href);
                new Router();
            }
        })
    }
}
