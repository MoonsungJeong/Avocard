import StorageCheck from "./funcStorageCheck.js";
import PageUpdate from "../js/movePageUpdate.js";
import CardDelete from "../js/reqCardDelete.js";

export default class funcShowMyCard {
    constructor(){
        this.openMyCard();
    }
    openMyCard(){
        const storage = new StorageCheck;
        //guest user
        if(storage.storageUserCheck() == "guest"){ return; }

        //login user, Card exist in session
        if(storage.sessionMyCardCheck()){
            this.seeMyCard();
            return;
        }
        //login user, Card not exist in session
        fetch(`/api/card`)
            .then(res => res.json())
            .then(result => {
                if(result == "425" || result == "429"){return;}
                if(!result.length){ return; }
                storage.sessionSetMyCard(result);
                this.seeMyCard();
            })
            .catch(error => {
                console.log("see pocket failed - " + error);
            })
    }
    seeMyCard(){
        const storage = new StorageCheck;
        const container = document.querySelector(".portfolio-container");
        const cardCode = storage.sessionGetMyCard()[0].cardCode;
        const card = storage.sessionGetMyCard()[0].cardDetail;
        let result=`
            <div class="project-item">
                <div class="project-mycard-box">
                    <span class="project-category">
                        <a href="/update" id="update_btn" data-link><i class="nav-icon fa-solid fa-square-plus"></i></a>
                        <a href="/mycard" id="delete_btn" data-link><i class="nav-icon fa-solid fa-square-xmark"></i></a>
                        <input type="hidden" class="card-code" value="${cardCode}">
                    </span>
                    <div class="project-info">
                        <div class="cv-side">
                            <img src="image/man.PNG" class="profile-picture">
                            <div class="bio-panel">
                                <div>
                                    <h3><span class="card-name">${card.name}</span></h3>
                                    <h4><span class="card-title">${card.title}</span></h4>
                                    <h5><span class="card-company">${card.company}</span></h5>
                                </div>
                            </div>
                            <div class="bio-brief">
                                <span class="card-brief">${card.brief}</span>
                            </div>
                            <div class="side-panel">
                                <span class="side-panel-icon">
                                    <i class="fas fa-phone"></i>
                                </span>
                                <span class="card-phone side-panel-content">${card.phone}</span>                                   </div>
                            <div class="side-panel">
                                <span class="side-panel-icon">
                                    <i class="far fa-envelope"></i>
                                </span>
                                <span class="card-email side-panel-content">${card.email}</span>
                            </div>
                            <div class="side-panel">
                                <span class="side-panel-icon">
                                    <i class="fa-brands fa-skype"></i>
                                </span>
                                <span class="card-skype side-panel-content">${card.skype}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML=result;
        this.getScript();
    }
    getScript(){
        new PageUpdate();
        new CardDelete();
    }
}

