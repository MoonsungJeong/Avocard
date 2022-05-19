import StorageCheck from "./funcStorageCheck.js";
import Router from "../app.js";

export default class funcShowPocketCard {
    constructor(){
        this.cardCheck();
    }
    cardCheck(){
        const storage = new StorageCheck;
        const cardCode = storage.storageGetCardCode();
        let result = null;
        let data;
        if(storage.storageUserCheck() == "guest"){
            data = storage.storagePocketCheck();
        }
        if(storage.storageUserCheck() == "loginUser"){
            data = storage.sessionPocketCheck();
        }
        
        for(let i=0; i < data.length; i++){
            if(data[i].cardCode == cardCode){
                result = data[i];
                break;
            }
        }
        
        if(!result){
            alert("Error!");
            history.pushState(null, null, "/pocket");
            new Router();
            return;
        }
        this.cardRender(result);
    }
    cardRender(data){
        const name = document.querySelector(".card-name");
        const title = document.querySelector(".card-title");
        const company = document.querySelector(".card-company");
        const brief = document.querySelector(".card-brief");
        const phone = document.querySelector(".card-phone");
        const email = document.querySelector(".card-email");
        const skype = document.querySelector(".card-skype");
        
        name.innerText = data.cardDetail.name;
        title.innerText = data.cardDetail.title;
        company.innerText = data.cardDetail.company;
        brief.innerText = data.cardDetail.brief;
        phone.innerText = data.cardDetail.phone;
        email.innerText = data.cardDetail.email;
        skype.innerText = data.cardDetail.skype;
    }
}

