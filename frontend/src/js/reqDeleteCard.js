import StorageCheck from "./funcStorageCheck.js";
import Router from "../app.js";

export default class DeleteCard {
    constructor(){
        document.querySelector("#delete_btn").addEventListener("click", this.reqCardDelete,false);
    }
    reqCardDelete(e){
        e.preventDefault();
        const storage = new StorageCheck;
        if(confirm("Delete card?") == false){return;};
        let data = {};
        data.cardCode = document.querySelector(".card-code").value;
        
        let formDataJSON = JSON.stringify(data);
        // /api/card/delete 
        fetch("/api/card/delete", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: formDataJSON
        })
        .then(res => res.json())
        .then(res => {
            if(res === "Avocard deleted!"){
                alert(res);
                storage.sessionClearMyCard();
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
            console.log("Delete card request failed! " + err);
        })
        
    }
}
