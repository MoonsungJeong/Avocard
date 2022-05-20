import Router from "../app.js";

export default class CreateNewCard {
    constructor(){
        document.querySelector("#newcard_btn").addEventListener("click", this.reqNewCard,false);
    }
    reqNewCard(e){
        e.preventDefault();
        if(confirm("Create new card?") == false){return;};
        let data={};
        data.name = document.querySelector(".card-name").innerText;
        data.title = document.querySelector(".card-title").innerText;
        data.company = document.querySelector(".card-company").innerText;
        data.brief = document.querySelector(".card-brief").innerText;
        data.phone = document.querySelector(".card-phone").innerText;
        data.email = document.querySelector(".card-email").innerText;
        data.skype = document.querySelector(".card-skype").innerText;
        console.log(data);

        let formDataJSON = JSON.stringify(data);
        
        fetch("/api/card/create", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: formDataJSON
        })
        .then(res => res.json())
        .then(res => {
            if(res === "card is already existed"){
                alert(res);
                // back to mycard Page
                if(e.target.matches("[data-link]")) {
                    history.pushState(null, null, e.target.href);
                    new Router();
                }
                if(e.target.tagName == "I"){
                    history.pushState(null, null, e.target.parentNode.href);
                    new Router();
                }
            }
            // card created!
            alert(res);
            console.log("Avocard created!");
            if(e.target.matches("[data-link]")) {
                history.pushState(null, null, e.target.href);
                new Router();
            }
            if(e.target.tagName == "I"){
                history.pushState(null, null, e.target.parentNode.href);
                new Router();
            }
        })
        .catch(err =>{
            console.log("Create user request failed! " + err);
        })
    }
}
