import PageMore from "../js/movePageMore.js";

import FuncShowAdmin from "../js/funcShowAdmin.js";

export default class ThemePage {
    constructor() {
        document.title = "Abocard - Admin";
    }
    getHtml() {
        return `
        <div>
            <header class="header_application">
                <div class="header-container">
                    <a id="more" href="/more"><i class="fa-solid fa-arrow-left"></i></a>
                    <h1>Admin</h1>
                </div>
            </header>
            <main>
                <div class="admin-info-container">
                </div>
            </main>
        </div>
        `;
    }
    getScript(){
        new PageMore();

        new FuncShowAdmin();
    }
}