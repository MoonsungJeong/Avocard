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
    sessionUserTypeCheck(){
        const type = JSON.parse(sessionStorage.getItem("Avocard")).userType;
        return type;
    }
    storagePocketCheck(){
        const pocket = JSON.parse(localStorage.getItem("Avocard")).guestPocket;
        return pocket;
    }
    storageAddPocket(card){
        let data = JSON.parse(localStorage.getItem("Avocard"));
        data.guestPocket.push(card);
        localStorage.setItem("Avocard",JSON.stringify(data));
        return;
    }
    storageSetPocket(pocket){
        let data = JSON.parse(localStorage.getItem("Avocard"));
        data.guestPocket = pocket;
        localStorage.setItem("Avocard", JSON.stringify(data));
        return;
    }
    sessionPocketCheck(){
        const pocket = JSON.parse(sessionStorage.getItem("Avocard")).userPocket;
        return pocket;
    }
    sessionAddPocket(card){
        let data = JSON.parse(sessionStorage.getItem("Avocard"));
        data.userPocket.push(card);
        sessionStorage.setItem("Avocard",JSON.stringify(data));
        return;
    }
    sessionSetPocket(pocket){
        let data = JSON.parse(sessionStorage.getItem("Avocard"));
        data.userPocket = pocket;
        sessionStorage.setItem("Avocard", JSON.stringify(data));
        return;
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
    storageUserToEmpty(){
        let data = JSON.parse(localStorage.getItem("Avocard"));
        data.currentUser = "";
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
        const myCard = JSON.parse(sessionStorage.getItem("Avocard")).myCard;
        return myCard;
    }
    sessionSetMyCard(card){
        let data = JSON.parse(sessionStorage.getItem("Avocard"));
        data.myCard = card;
        sessionStorage.setItem("Avocard",JSON.stringify(data));
        return 0;
    }
    sessionMyCardCheck(){
        const myCard = JSON.parse(sessionStorage.getItem("Avocard")).myCard;
        return myCard.length;
    }
    sessionClearMyCard(){
        let data = JSON.parse(sessionStorage.getItem("Avocard"));
        data.myCard = [];
        sessionStorage.setItem("Avocard",JSON.stringify(data));
        return 0;
    }
    sessionDestroy(){
        sessionStorage.removeItem("Avocard");
        return 0;
    }
}
