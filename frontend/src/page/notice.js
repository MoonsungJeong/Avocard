import PageMore from "../js/movePageMore.js"

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
                    <div class="notice-item">
                        <div class="notice-box">
                            <div class="notice-date"><div>02/03/22</div></div>
                            <div class="notice-title"><div>New feature update! please check!</div></div>
                        </div>
                        <div class="notice-description"><div>This is portfolio update!</div></div>
                    </div>
                    <div class="notice-item">
                        <div class="notice-box">
                            <div class="notice-date"><div>01/01/22</div></div>
                            <div class="notice-title"><div>Happy New Year!</div></div>
                        </div>
                        <div class="notice-description"><div>Happy new year message for all!!</div></div>
                    </div>
                    <div class="notice-item">
                        <div class="notice-box">
                            <div class="notice-date"><div>01/01/22</div></div>
                            <div class="notice-title"><div>Happy New Year!</div></div>
                        </div>
                        <div class="notice-description"><div>Happy new year message for all!!</div></div>
                    </div>
                    <div class="notice-item">
                        <div class="notice-box">
                            <div class="notice-date"><div>01/01/22</div></div>
                            <div class="notice-title"><div>Happy New Year!</div></div>
                        </div>
                        <div class="notice-description"><div>Happy new year message for all!!</div></div>
                    </div>
                    <div class="notice-item">
                        <div class="notice-box">
                            <div class="notice-date"><div>01/01/22</div></div>
                            <div class="notice-title"><div>Happy New Year!</div></div>
                        </div>
                        <div class="notice-description"><div>Happy new year message for all!!</div></div>
                    </div>
                </div>
            </main>
        </div>
        `;
    }
    getScript(){
        new PageMore();
    }
}