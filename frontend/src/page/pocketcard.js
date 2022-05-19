import PagePocket from "../js/movePagePocket.js";

import FuncShowPocketCard from "../js/funcShowPocketCard.js";

export default class PocketCardPage {
    constructor() {
        document.title = "Abocard - Card";
    }
    getHtml() {
        return `
        <header class="header">
            <div class="header__header-column">
                <a href="/pocket" id="pocket" class="header__x-btn" data-link>
                    <i class="far fa-times-circle"></i>
                </a>
            </div>
            <div class="header__header-column">
                <span class="header__icon">
                    <i class="far fa-star"></i>
                </span>
            </div>
        </header>
        <div class="cv">
            <div class="cv-side">
                <img src="image/man.PNG" class="profile-picture">   
                <div class="bio-panel">
                    <div>
                        <h3><span class="card-name"></span></h3>
                        <h4><span class="card-title"></span></h4>
                        <h5><span class="card-company"></span></h5>
                    </div>
                </div>
                <div class="bio-brief">
                    <span class="card-brief"></span>
                </div>
                <div class="side-panel">
                    <span class="side-panel-icon">
                        <i class="fas fa-phone"></i>
                    </span>
                    <span class="card-phone side-panel-content"></span>
                </div>
                <div class="side-panel">
                    <span class="side-panel-icon">
                        <i class="far fa-envelope"></i>
                    </span>
                    <span class="card-email side-panel-content"></span>
                </div>
                <div class="side-panel">
                    <span class="side-panel-icon">
                        <i class="fa-brands fa-skype"></i>
                    </span>
                    <span class="card-skype side-panel-content"></span>
                </div>
            </div>
        </div>
        `;
    }
    getScript(){
        new PagePocket();
        
        new FuncShowPocketCard();
    }
}