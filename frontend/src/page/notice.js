import PageMore from "../js/movePageMore.js"
import FuncShowNotice from "../js/funcShowNotice.js";

export default class NoticePage {
    constructor() {
        document.title = "Abocard - Notice";
    }
    getHtml() {
        return `
        <div>
            <header class="header_application">
                <div class="header-container">
                    <a id="more" href="/more"><i class="fa-solid fa-arrow-left"></i></a>
                    <h1>Notice</h1>
                </div>
            </header>
            <main>
                <div class="notice-container">
                </div>
            </main>
        </div>
        `;
    }
    getScript(){
        new PageMore();
        new FuncShowNotice();
    }
}