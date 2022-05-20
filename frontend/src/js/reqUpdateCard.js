import StorageCheck from "./funcStorageCheck.js";
import Router from "../app.js";

export default class UpdateCard {
    constructor(){
        document.querySelector("#updatecard_btn").addEventListener("click", this.reqUpdateCard,false);
    }
    reqUpdateCard(e){
        e.preventDefault();
        const storage = new StorageCheck;
        if(confirm("Update card?") == false){return;};
        let data={
            "cardCode":"",
            "cardDetail":{}
        };
        data.cardCode = document.querySelector(".card-code").value;
        data.cardDetail.name = document.querySelector(".card-name").innerText;
        data.cardDetail.title = document.querySelector(".card-title").innerText;
        data.cardDetail.company = document.querySelector(".card-company").innerText;
        data.cardDetail.brief = document.querySelector(".card-brief").innerText;
        data.cardDetail.phone = document.querySelector(".card-phone").innerText;
        data.cardDetail.email = document.querySelector(".card-email").innerText;
        data.cardDetail.skype = document.querySelector(".card-skype").innerText;
        console.log(data);

        let formDataJSON = JSON.stringify(data);
        // /api/card/update [post]
        fetch("/api/card/update", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: formDataJSON
        })
        .then(res => res.json())
        .then(res => {
            if(res === "Avocard updated!"){
                alert(res);
                storage.sessionSetMyCard(data);
            }
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
            console.log("Update card request failed! " + err);
        })
        /*
        let formDataJSON = JSON.stringify(data);
        // /api/card/update [post]

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
        }) */
    }
}
