import PagePocket from "../js/movePagePocket.js"
import PageMycard from "../js/movePageMycard.js"
import PageMore from "../js/movePageMore.js"

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
                    <a href="#">
                        <div class="project-item">
                            <div class="project-explanation">
                                <span class="project-category">Note</span>
                                <div class="project-info">
                                    <div class="project-name">Moonsung</div>
                                    <div class="project-title">CEO</div>
                                    <div class="project-company">Avocado</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="project-item">
                            <div class="project-explanation">
                                <span class="project-category">Note</span>
                                <div class="project-info">
                                    <div class="project-name">Person1</div>
                                    <div class="project-title">Senior Developer</div>
                                    <div class="project-company">Apple</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="project-item">
                            <div class="project-explanation">
                                <span class="project-category">Note</span>
                                <div class="project-info">
                                    <div class="project-name">Person2</div>
                                    <div class="project-title">Junior Developer</div>
                                    <div class="project-company">Orange</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="project-item">
                            <div class="project-explanation">
                                <span class="project-category">Note</span>
                                <div class="project-info">
                                    <div class="project-name">Person3</div>
                                    <div class="project-title">Desiner</div>
                                    <div class="project-company">Mango</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="project-item">
                            <div class="project-explanation">
                                <span class="project-category">Note</span>
                                <div class="project-info">
                                    <div class="project-name">Person4</div>
                                    <div class="project-title">Customer</div>
                                    <div class="project-company">Mellon</div>
                                </div>
                            </div>
                        </div>
                    </a>
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
            <!--
                <a href="/pocket"><div id="pocket" class="nav-icon-wrap nav-selected-fixed" data-link><i class="nav-icon fa-solid fa-address-card"></i></div></a>
                <a href="/mycard"><div id="mycard" class="nav-icon-wrap" data-link><i class="nav-icon fa-solid fa-user"></i></div></a>
                <a href="/more"><div id="more" class="nav-icon-wrap" data-link><i class="nav-icon fa-solid fa-gear"></i></div></a>
                -->
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