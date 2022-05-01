import Router from "../app.js";

export default class reqGuest {
    constructor(){
        document.querySelector("#guest_btn").addEventListener("click", this.guestLogin,false);
    }
    guestLogin(e){
        e.preventDefault();
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
                            "theme":"light"
                        }
                    };
                    localStorage.setItem("Avocard",JSON.stringify(storage));
                } 
                
                if (e.target.matches("[data-link]")) {
                    history.pushState(null, null, e.target.href);
                    new Router();
                }
            }
        })
        .catch(error => {
            console.log("user login failed - " + error);
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