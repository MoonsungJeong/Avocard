import PagePocket from "../js/movePagePocket.js";
import PageMyCard from "../js/movePageMyCard.js";
import PageMore from "../js/movePageMore.js";

import FuncShowPocket from "../js/funcShowPocket.js";

import UpdatePocket from "../js/reqUpdatePocket.js";
import ChangeTheme from "../js/funcChangeTheme.js";

export default class PocketPage {
    constructor() {
        document.title = "Abocard - Pocket";
    }
    getHtml() {
        return `
        <div>
            <header class="header_application">
                <h1>Pocket</h1>
                <div class="header-menu">
                    <a href="#" class="nav-icon-wrap" data-link>
                        <i class="nav-icon fas fa-search fa-1x search_btn"></i>
                    </a>
                    <a href="/pocket" id="updatepocket_btn" class="nav-icon-wrap" data-link>
                        <i class="nav-icon fa-solid fa-user-plus"></i>
                    </a>
                </div>
                <div class="search_bar_wrapper">
                    <div class="search_bar_box">
                        <input class="search_bar" name="keyword" type="text"/>
                    </div>
                </div>
            </header>
            <main>
                <div class="project-container">
                </div>
            </main>
            <nav class="nav-container">
                <a href="/pocket" id="pocket" class="nav-icon-wrap nav-selected-fixed" data-link>
                    <i class="nav-icon fa-solid fa-address-card"></i>
                </a>
                <a href="/mycard" id="mycard" class="nav-icon-wrap" data-link>
                    <i class="nav-icon fa-solid fa-user"></i>
                </a>
                <a href="/more" id="more" class="nav-icon-wrap" data-link>
                    <i class="nav-icon fa-solid fa-gear"></i>
                </a>
            </nav>
        </div>
        `;
    }
    getScript(){
        new PagePocket();
        new PageMyCard();
        new PageMore();

        new FuncShowPocket();
        new UpdatePocket();
        (new ChangeTheme()).setTheme(); //activate later Please@@@@@@@@@@@@
    }
}