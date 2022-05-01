import PagePocket from "../js/movePagePocket.js"
import PageMycard from "../js/movePageMycard.js"
import PageMore from "../js/movePageMore.js"

export default class MyCardPage {
    constructor() {
        document.title = "Abocard - MyCard";
    }
    getHtml() {
        return `
        <div class="wrap">
            <header class="header_application">
                <h1>My Card</h1>
                <div class="header-menu">
                    <i class="nav-icon fas fa-search fa-1x"></i>
                    <i class="nav-icon fa-solid fa-user-plus"></i>
                </div>
            </header>
            <main>
                <div class="project-container">
                    <a href="#">
                        <div class="project-item">
                            <div class="project-mycard-box">
                                <span class="project-category">
                                    <i class="nav-icon fa-solid fa-square-plus"></i>
                                </span>
                                <div class="project-info">
                                    <div class="cv-side">
                                        <img src="image/man.png" class="profile-picture">
                                        <div class="bio-panel">
                                            <div>
                                                <h3><span>Name</span></h3>
                                                <h4><span>Title</span></h4>
                                                <h5><span>Company</span></h5>
                                            </div>
                                            <div class="bio-logo">
                                                <img src="image/logo.png" class="company-logo">
                                            </div>
                                        </div>
                                        <div class="bio-brief">
                                            <span>This is short explaination</span>
                                        </div>
                                        <div class="side-panel">
                                            <span class="side-panel-icon">
                                                <i class="fas fa-phone"></i>
                                            </span>
                                            <span class="side-panel-content">Phone Number</span>                                   </div>
                                        <div class="side-panel">
                                            <span class="side-panel-icon">
                                                <i class="far fa-envelope"></i>
                                            </span>
                                            <span class="side-panel-content">Email</span>
                                        </div>
                                        <div class="side-panel">
                                            <span class="side-panel-icon">
                                                <i class="fa-brands fa-skype"></i>
                                            </span>
                                            <span class="side-panel-content">Skype</span>
                                        </div>
                                        <div class="side-panel">
                                            <span class="side-panel-icon">
                                                <i class="fab fa-twitter"></i>
                                            </span>
                                            <span class="side-panel-content">@twitt_ms</span>
                                        </div>
                                        <div class="side-panel">
                                            <span class="side-panel-icon">
                                                <i class="far fa-hand-point-up"></i>
                                            </span>
                                            <span class="side-panel-content">moonsungjeong.com</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </main>
            <nav class="nav-container">
                <a href="/pocket" id="pocket" class="nav-icon-wrap" data-link><i class="nav-icon fa-solid fa-address-card"></i></a>
                <a href="/mycard" id="mycard" class="nav-icon-wrap nav-selected-fixed" data-link><i class="nav-icon fa-solid fa-user"></i></a>
                <a href="/more" id="more" class="nav-icon-wrap" data-link><i class="nav-icon fa-solid fa-gear"></i></a>
            </nav>
        </div>
        `;
    }
    getScript(){
        new PagePocket();
        new PageMycard();
        new PageMore();
    }
}