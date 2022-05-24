import StorageCheck from "./funcStorageCheck.js";
import ShowPocket from "./funcShowPocket.js";
import Router from "../app.js";

export default class UpdatePocket {
    constructor(){
        document.querySelector("#updatepocket_btn").addEventListener("click", this.reqUpdatePocket,false);
    }
    reqUpdatePocket(e){
        e.preventDefault();
        let userName = prompt("Enter user Name");
        if(!userName){return;}

        const storage = new StorageCheck();
        let data = {"userName":userName};
        let formDataJSON = JSON.stringify(data);

        fetch("/api/pocket/update", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: formDataJSON
        })
        .then(res => res.json())
        .then(res => {
            if(res === "card is not existed"){
                alert(res);
                return;
            }
            if(storage.storageUserCheck() === "loginUser"){
                storage.sessionAddPocket(res);
                let pocket = storage.sessionPocketCheck();
                (new ShowPocket()).seePocket(pocket);
            }
            if(storage.storageUserCheck() === "guest"){
                storage.storageAddPocket(res);
                let pocket = storage.storagePocketCheck();
                (new ShowPocket()).seePocket(pocket);
            }
        })
        .catch(err =>{
            alert("Please check Internet connection");
            console.log("Update pocket request failed! " + err);
        })
    }
}
