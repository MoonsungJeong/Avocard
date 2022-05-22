import PageInfo from "../js/movePageInfo.js";
import PageNotice from "../js/movePageNotice.js";
import PageTheme from "../js/movePageTheme.js";
import PageDeletion from "../js/movePageDeletion.js";
import PageAdmin from "../js/movePageAdmin.js";

import UserLogout from "../js/reqUserLogout.js";

import StorageCheck from "./funcStorageCheck.js";

// @@ Important: need to integrate with "More.js" later
export default class AddAdminBtn {
    constructor(){
        this.AddAdminBtn();
    }
    AddAdminBtn(){
        const storage = new StorageCheck();
        if(storage.sessionUserTypeCheck() !== "admin"){return;}
        
        const container = document.querySelector(".more-container");
        let result =`
                <div class="more-item">
                    <a href="/info" id="info_btn" class="more-icon-box" data-link><i class="nav-icon fa-solid fa-user" data-link></i></a>
                    <div><span class="more-icon-word">Info</span></div>
                </div>
                <div class="more-item">
                    <a href="/notice" id="notice_btn" class="more-icon-box" data-link><i class="nav-icon fas fa-rss"></i></a>
                    <div><span class="more-icon-word">Notice</span></div>
                </div>
                <div class="more-item">
                    <a href="/theme" id="theme_btn"class="more-icon-box" data-link><i class="nav-icon fas fa-brush"></i></a>
                    <div><span class="more-icon-word">Theme</span></div>
                </div>
                <div class="more-item">
                    <a href="/" id="logout_btn" class="more-icon-box" data-link><i class="nav-icon fa-solid fa-arrow-right-from-bracket"></i></a>
                    <div><span class="more-icon-word">Log out</span></div>
                </div>
                <div class="more-item">
                    <a href="/deletion" id="deletion_btn" class="more-icon-box" data-link><i class="nav-icon fa-solid fa-user-slash"></i></a>
                    <div><span class="more-icon-word">Deletion</span></div>
                </div>
                <div class="more-item">
                    <a href="/admin" id="admin_btn" class="more-icon-box" data-link><i class="nav-icon fa-solid fa-screwdriver-wrench data-link"></i></a>
                    <div><span class="more-icon-word">Admin</span></div>
                </div>
            `; 
        container.innerHTML=result;
        this.getScript();
    }
    getScript(){
        new PageInfo();
        new PageNotice();
        new PageTheme();
        new PageDeletion();
        new PageAdmin();

        new UserLogout();
    }
}

