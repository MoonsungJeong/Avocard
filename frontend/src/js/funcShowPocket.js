import StorageCheck from "./funcStorageCheck.js";
import ShowPocket from "./funcShowPocket.js";
import Router from "../app.js";

export default class funcShowPocket {
    constructor(){
        this.openPocket();
    }
    openPocket(){
        const storage = new StorageCheck;
        //guest user
        if(storage.storageCheck() && storage.storageUserCheck() == "guest"){
            let pocket = storage.storagePocketCheck();
            this.seePocket(pocket);
        }    
        //login user + session not exist
        if(!storage.sessionCheck() && storage.storageUserCheck() == "loginUser"){
            fetch(`/api/pocket`)
                .then(res => res.json())
                .then(pocket => {
                    if(pocket == "429"){
                        alert("Code 429\nToo many request!");
                        return;
                    }
                    if(pocket == "425"){
                        alert("Code 425\nToo early request!");
                        return;
                    }
                    // Please activate this part after limit rate check! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    sessionStorage.setItem("Avocard",JSON.stringify(pocket));
                    this.seePocket(storage.sessionPocketCheck());
                })
                .catch(error => {
                    console.log("see pocket failed - " + error);
                })
        }
        //login user + session exist
        if(storage.sessionCheck() && storage.storageUserCheck() == "loginUser"){
            let pocket = storage.sessionPocketCheck();
            this.seePocket(pocket);
        }
        
    }
    seePocket(arr){
        const container = document.querySelector(".project-container");
        let result="";
        for(let i=0; i<arr.length; i++){
            // For deploy @@@@@@@@@@@@@@@@@
            // let card -> X, card.name -> arr[i].cardList.name
            //let card = JSON.parse(arr[i].cardDetail);
            result+=`
            <a href="/card" class="card-btn" data-link>
                <div class="project-item">
                    <div class="project-explanation">
                        <span class="project-category"><i class="card-delete-btn nav-icon fa-solid fa-square-xmark"></i></span>
                        <div class="project-info">
                            <input type="hidden" class="cardcode" value="${arr[i].cardCode}">
                            <div class="project-name">${arr[i].cardDetail.name}</div>
                            <div class="project-title">${arr[i].cardDetail.title}</div>
                            <div class="project-company">${arr[i].cardDetail.company}</div>
                        </div>
                    </div>
                </div>
            </a>
            `;
        }
        container.innerHTML=result;
        this.eventPocketCard();
    }
    eventPocketCard(){
        const card_list = document.querySelectorAll(".card-btn");
        card_list.forEach((card)=>{
            card.addEventListener("click",this.movePocketCard,false);
            card.querySelector(".card-delete-btn").addEventListener("click",this.deletePocketCard, false);
        })
    }
    movePocketCard(e){
        e.preventDefault();
        let card = e.target;
        let cardCode = 0;
        const storage = new StorageCheck;

        for(let i=0; i<4; i++){
            if(card.classList.contains('card-btn')) break;
            card = card.parentNode;
        }
        cardCode = card.getElementsByClassName('cardcode')[0].value; // 112
        storage.storageSetCardCode(cardCode);
        if(card.matches("[data-link]")) {
            history.pushState(null, null, card.href);
            new Router();
        }
    }
    deletePocketCard(e){
        e.stopPropagation();
        e.preventDefault();
        if(!confirm("Are you sure?")){ return; }

        const storage = new StorageCheck;
        if(storage.storageUserCheck() === "guest"){
            let pocket = storage.storagePocketCheck();
            let code = e.target.parentNode.parentNode.querySelector(".cardcode").value;
            for(let i=0; i< pocket.length; i++){
                if(pocket[i].cardCode == code){
                    pocket.splice(i,1);
                }
            }
            storage.storageSetPocket(pocket);
            let newpocket = storage.storagePocketCheck();
            (new ShowPocket()).seePocket(newpocket);
        }
        if(storage.storageUserCheck() === "loginUser"){
            let pocket = storage.sessionPocketCheck();
            let code = e.target.parentNode.parentNode.querySelector(".cardcode").value;
            for(let i=0; i< pocket.length; i++){
                if(pocket[i].cardCode == code){
                    pocket.splice(i,1);
                }
            }
            let data = {"pocket":pocket};
            let formDataJSON = JSON.stringify(data);
            fetch("/api/pocket/delete", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: formDataJSON
            })
            .then(res => res.json())
            .then(res => {
               if(res !== "pocket delete"){
                   //alert("Delete failed!")
                   console.log("Delete pocket request failed! " + err);
               }
               alert("card deleted!");
               storage.sessionSetPocket(pocket);
               let newpocket = storage.sessionPocketCheck();
               (new ShowPocket()).seePocket(newpocket);
            })
            .catch(err =>{
                alert("Please check Internet connection");
                console.log("Delete pocket request failed! " + err);
            })
        }
    }
}

