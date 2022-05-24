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
            alert(res)
            sessionStorage.clear();
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