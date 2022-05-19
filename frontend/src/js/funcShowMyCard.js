import StorageCheck from "./funcStorageCheck.js";

export default class funcShowMyCard {
    constructor(){
        this.openMyCard();
    }
    openMyCard(){
        const storage = new StorageCheck;
        //guest user
        if(storage.storageUserCheck() == "guest"){ return; }

        //login user, Card exist
        if(storage.sessionMyCardCheck()){
            this.seeMyCard();
            return;
        }
        //login user, Card not exist
        fetch(`/api/card`)
            .then(res => res.json())
            .then(result => {
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
        let card = storage.sessionGetMyCard()[0].cardDetail;
        let result=`
        <a>
            <div class="project-item">
                <div class="project-mycard-box">
                    <span class="project-category">
                        <i class="nav-icon fa-solid fa-square-plus"></i>
                    </span>
                    <div class="project-info">
                        <div class="cv-side">
                            <img src="image/profile_Moonsung.jpg" class="profile-picture">
                            <div class="bio-panel">
                                <div>
                                    <h3><span>${card.name}</span></h3>
                                    <h4><span>${card.title}</span></h4>
                                    <h5><span>${card.company}</span></h5>
                                </div>
                                <div class="bio-logo">
                                    <img src="image/logo.png" class="company-logo">
                                </div>
                            </div>
                            <div class="bio-brief">
                                <span>${card.brief}</span>
                            </div>
                            <div class="side-panel">
                                <span class="side-panel-icon">
                                    <i class="fas fa-phone"></i>
                                </span>
                                <span class="side-panel-content">${card.phone}</span>                                   </div>
                            <div class="side-panel">
                                <span class="side-panel-icon">
                                    <i class="far fa-envelope"></i>
                                </span>
                                <span class="side-panel-content">${card.email}</span>
                            </div>
                            <div class="side-panel">
                                <span class="side-panel-icon">
                                    <i class="fa-brands fa-skype"></i>
                                </span>
                                <span class="side-panel-content">${card.skype}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        `;
        container.innerHTML=result;
    }
}

