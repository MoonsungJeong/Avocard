import StorageCheck from "./funcStorageCheck.js";

export default class funcShowInfo {
    constructor(){
        this.showInfo();
    }
    showInfo(){
        const storage = new StorageCheck;
        //guest user
        if(storage.storageUserCheck() == "guest"){ console.log("Wrong Access!"); return; }

        fetch(`/api/user/info`)
            .then(res => res.json())
            .then((data) => {
                document.getElementById("email").value = data.email;
                document.getElementById("username").value = data.userName;
            })
            .catch((error) =>{
                console.log("see info failed - " + error);
            })
    }
}

