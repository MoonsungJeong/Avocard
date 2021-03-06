import Router from "../app.js";
import Screen from "./funcScreen.js";
import StorageCheck from "./funcStorageCheck.js";

export default class reqUserLogin {
    constructor(){
        document.querySelector("#login_btn").addEventListener("click", this.userLogin, false);
    }
    userLogin(e){
        e.preventDefault();

        const screen = new Screen;
        const storage = new StorageCheck;

        let logInForm = document.getElementById("login-user-form");
        
        if(!logInForm){return};

        if(!logInForm.email.checkValidity()){
            logInForm.email.focus();
            alert("Email is not validated");
            return;
        }else if(!logInForm.password.checkValidity()){
            logInForm.password.focus();
            alert("Password is not validated");
            return;
        }

        let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(logInForm)));
        screen.screenOn();

        fetch("/api/user/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: formDataJSON
        })
        .then(res => res.json())
        .then(res => {
            alert(res)
            screen.screenOff();
            if(res === "login OK!"){
                // storage check when "login ok!"
                if(!storage.storageCheck()){
                    // If no storage, Create Storage
                    storage.storageInit();
                }
                // Change current User (loginUser)
                storage.storageUserToLoginUser();
                if (e.target.matches("[data-link]")) {
                    history.pushState(null, null, e.target.href);
                    new Router();
                }
                return;
            }
            if(res === "login failed!"){
                logInForm.email.focus();
                return;
            }
        })
        .catch(error => {
            // no Network
            if(JSON.parse(localStorage.Avocard).currentUser == "loginUser"){ return;}
            screen.screenOff();
            alert("Need Internet to LogIn!");
        })
    }
}
