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
                if(!storage.storageCheck()){
                    storage.storageInit();
                }
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
            screen.screenOff();
            alert("Need Internet to LogIn!");
        })
    }
}
/* 
function guestLogin(){
    fetch("/api/guest/login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        if (res === "Welcome Guest to Avocard!") {
            const localStorageCheck = localStorage.length;
            const guestCheck = JSON.parse(localStorage.getItem("Avocard"));
            
            if(!localStorageCheck || guestCheck == null){
                let storage = {
                    "pocket":[
                        {
                            "code":"111",
                            "note":"nice man"
                        },
                        {
                            "code":"112",
                            "note":"good man"
                        },
                        {
                            "code":"113",
                            "note":"work well"
                        }
                    ],
                    "setting":{
                        "theme":"#000000"
                    }
                };
                localStorage.setItem("Avocard",JSON.stringify(storage));
            } 
            window.location.href = "/pocket.html";
            return;
        }
    })
    .catch(error => {
        console.log("user login failed - " + error);
    })
}
 */