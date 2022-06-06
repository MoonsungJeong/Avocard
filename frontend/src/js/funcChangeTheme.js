import StorageCheck from "./funcStorageCheck.js";

export default class funcChangeTheme {
    constructor(){
        const theme = document.getElementsByName("theme");
        theme.forEach(element => { element.addEventListener("change",(e)=>{this.changeTheme(e)},false);});
    }
    changeTheme(e){ 
        const storage = new StorageCheck();
        //guest user
        if(storage.storageUserCheck() == "guest"){
            let data = JSON.parse(localStorage.Avocard);
            data.guestSetting.theme = e.target.id;
            localStorage.setItem("Avocard",JSON.stringify(data));
            this.setTheme();
        }
        //login user
        if(storage.storageUserCheck() == "loginUser"){
            let data = JSON.parse(sessionStorage.Avocard);
            data.userSetting.theme = e.target.id;
            sessionStorage.setItem("Avocard", JSON.stringify(data));
            this.setTheme();
        }
    }
    setTheme(){
        const storage = new StorageCheck();
        //guest user
        if(storage.storageUserCheck() == "guest"){
            const data = JSON.parse(localStorage.Avocard);
            const theme = data.guestSetting.theme;
            let background = document.getElementsByTagName("body")[0];
            
            switch(theme){
                case 'light':
                    background.style.background="#ffffff";
                    background.style.color="#000000";
                    break;
                case 'dark':
                    background.style.background="#000000";
                    background.style.color="#ffffff";
                    break;
                case 'cherry':
                    background.style.background="#FFC0CB";
                    background.style.color="#007504";
                    break;
            }
        }
        //login user
        if(storage.storageUserCheck() == "loginUser"){
            const data = JSON.parse(sessionStorage.Avocard);
            const theme = data.userSetting.theme;

            let background = document.getElementsByTagName("body")[0];
            switch(theme){
                case 'light':
                    background.style.background="#ffffff";
                    background.style.color="#000000";
                    break;
                case 'dark':
                    background.style.background="#000000";
                    background.style.color="#ffffff";
                    break;
                case 'cherry':
                    background.style.background="#FFC0CB";
                    background.style.color="#007504";
                    break;
            }
        }
    }
}

