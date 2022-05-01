import PagePocket from "../js/movePagePocket.js";
import PageMycard from "../js/movePageMycard.js";
import PageMore from "../js/movePageMore.js";

import FuncShowPocket from "../js/funcShowPocket.js";

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
                    <i class="nav-icon fas fa-search fa-1x search_btn"></i>
                    <i class="nav-icon fa-solid fa-user-plus"></i>
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
        new PageMycard();
        new PageMore();

       new FuncShowPocket();
    }
}