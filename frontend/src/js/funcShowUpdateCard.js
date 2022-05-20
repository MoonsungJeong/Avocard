import StorageCheck from "./funcStorageCheck.js";

import Router from "../app.js";

export default class funcShowUpdateCard {
    constructor(){
        this.showUpdateCard();
    }
    showUpdateCard(){
        //alert("update function!");
        const storage = new StorageCheck;
        const cardCode = storage.sessionGetMyCard()[0].cardCode;
        const card = storage.sessionGetMyCard()[0].cardDetail;
        if(!storage.sessionMyCardCheck){
            history.pushState(null, null, "/mycard");
            new Router();
        }
        document.querySelector(".card-code").value = cardCode;
        document.querySelector(".card-name").innerText = card.name;
        document.querySelector(".card-title").innerText= card.title;
        document.querySelector(".card-company").innerText= card.company;
        document.querySelector(".card-brief").innerText= card.brief;
        document.querySelector(".card-phone").innerText= card.phone;
        document.querySelector(".card-email").innerText= card.email;
        document.querySelector(".card-skype").innerText= card.skype;
    }
}

