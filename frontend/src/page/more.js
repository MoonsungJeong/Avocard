import PagePocket from "../js/movePagePocket.js";
import PageMycard from "../js/movePageMycard.js";
import PageMore from "../js/movePageMore.js";

import PageInfo from "../js/movePageInfo.js";
import PageNotice from "../js/movePageNotice.js";
import PageTheme from "../js/movePageTheme.js";


export default class MorePage {
    constructor() {
        document.title = "Abocard - More";
    }
    getHtml() {
        return `
        <div class="wrap">
            <header class="header_application">
                <h1>More</h1>
                <div class="header-menu">
                    <i class="nav-icon fas fa-search fa-1x"></i>
                    <i class="nav-icon fa-solid fa-user-plus"></i>
                </div>
            </header>
            <main>
                <div class="more-container">
                    <div class="more-item">
                        <a id="info_btn" class="more-icon-box"><i class="nav-icon fa-solid fa-user" data-link></i></a>
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
                </div>
            </main>
            <nav class="nav-container">
                <a href="/pocket" id="pocket" class="nav-icon-wrap" data-link><i class="nav-icon fa-solid fa-address-card"></i></a>
                <a href="/mycard" id="mycard" class="nav-icon-wrap" data-link><i class="nav-icon fa-solid fa-user"></i></a>
                <a href="/more" id="more" class="nav-icon-wrap nav-selected-fixed" data-link><i class="nav-icon fa-solid fa-gear"></i></a>
            </nav>
        </div>
        `;
    }
    getScript(){
        new PagePocket();
        new PageMycard();
        new PageMore();

        new PageInfo();
        new PageNotice();
        new PageTheme();
    }
}