import PagePocket from "../js/movePagePocket.js"
import PageMyCard from "../js/movePageMyCard.js"
import PageMore from "../js/movePageMore.js"

import FuncShowMyCard from "../js/funcShowMyCard.js";

export default class MyCardPage {
    constructor() {
        document.title = "Abocard - MyCard";
    }
    getHtml() {
        return `
        <div class="wrap">
            <header class="header_application">
                <h1>My Card</h1>
                <div class="header-menu flex-right">
                    <i class="nav-icon fa-solid fa-address-book"></i>
                </div>
            </header>
            <main>
                <div class="portfolio-container">
                    <img src="image/no_avocard.png" class="no-card-img">
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
        new PageMyCard();
        new PageMore();

        new FuncShowMyCard();
    }
}