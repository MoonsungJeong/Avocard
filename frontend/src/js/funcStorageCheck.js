export default class storageCheck {
    constructor(){}
    storageCheck(){
        const data = JSON.parse(localStorage.getItem("Avocard"));
        if(!data){
            return 0;
        }else{ 
            return 1;
        }
    }
    sessionCheck(){
        const data = JSON.parse(sessionStorage.getItem("Avocard"));
        if(!data){
            return 0;
        }else{ 
            return 1;
        }
    }
    storageInit(){
        let data = {
            "currentUser":"guest",
            "currentCard":"",
            "guestPocket":[],
            "guestSetting":{
                "theme":"light"
            }
        };
        localStorage.setItem("Avocard",JSON.stringify(data));
    }
    storageUserCheck(){
        const user = JSON.parse(localStorage.getItem("Avocard")).currentUser;
        return user;
    }
    storagePocketCheck(){
        const pocket = JSON.parse(localStorage.getItem("Avocard")).guestPocket;
        return pocket;
    }
    sessionPocketCheck(){
        const pocket = JSON.parse(sessionStorage.getItem("Avocard")).userPocket;
        return pocket;
    }
    storageUserToGuest(){
        let data = JSON.parse(localStorage.getItem("Avocard"));
        data.currentUser = "guest";
        localStorage.setItem("Avocard",JSON.stringify(data));
        return 0;
    }
    storageUserToLoginUser(){
        let data = JSON.parse(localStorage.getItem("Avocard"));
        data.currentUser = "loginUser";
        localStorage.setItem("Avocard",JSON.stringify(data));
        return 0;
    }
    storageSetCardCode(code){
        let data = JSON.parse(localStorage.getItem("Avocard"));
        data.currentCard = code;
        localStorage.setItem("Avocard",JSON.stringify(data));
        return 0;
    }
    storageGetCardCode(){
        const cardCode = JSON.parse(localStorage.getItem("Avocard")).currentCard;
        return cardCode;
    }
    storageClearCardCode(){
        let data = JSON.parse(localStorage.getItem("Avocard"));
        data.currentCard = "";
        localStorage.setItem("Avocard",JSON.stringify(data));
        return 0;
    }
    sessionGetMyCard(){
        const mycard = JSON.parse(sessionStorage.getItem("Avocard")).mycard;
        return mycard;
    }
    sessionSetMyCard(card){
        let data = JSON.parse(sessionStorage.getItem("Avocard"));
        data.mycard = card;
        sessionStorage.setItem("Avocard",JSON.stringify(data));
        return 0;
    }
    sessionMyCardCheck(){
        const mycard = JSON.parse(sessionStorage.getItem("Avocard")).mycard;
        return mycard.length;
    }
}
