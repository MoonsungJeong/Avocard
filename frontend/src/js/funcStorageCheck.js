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
            "currentUser":{
                "name":"guest"    
            },
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
}
