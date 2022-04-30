import PageMore from "../js/movePageMore.js"

export default class ThemePage {
    constructor() {
        document.title = "Abocard - Theme";
    }
    getHtml() {
        return `
        <div class="wrap">
            <header class="header_application">
                <div class="header-container">
                    <a id="more" href="/more"><i class="fa-solid fa-arrow-left"></i></a>
                    <h1>Theme</h1>
                </div>
            </header>
            <main>
                <div class="theme-title">
                    <h2>Basic</h2>
                </div>
                <div class="theme-container">
                    <label for="light">
                        <div class="theme-item">
                            <div class="theme-brief">
                                <div class="theme-image-box light"><img class="theme-image" src="image/light.jpg" alt="light theme"></div>
                                <div><h3>Light mode</h3></div>                        
                            </div>
                            <div>
                                <div class="theme-radio-btn"><input type="radio" name="theme" id="light" checked="checked"></div>
                            </div>
                        </div>
                    </label>
                    <label for="dark">
                        <div class="theme-item">
                            <div class="theme-brief">
                                <div class="theme-image-box dark"><img class="theme-image" src="image/dark.jpg" alt="dark theme"></div>
                                <div><h3>Dark mode</h3></div>
                            </div>
                            <div>
                                <div class="theme-radio-btn"><input type="radio" name="theme" id="dark"></div>
                            </div>
                        </div>
                    </label>
                </div>
                <div class="theme-title">
                    <h2>Offical Theme</h2>
                </div>
                <div class="theme-container">
                    <label for="cherry">
                        <div class="theme-item">
                            <div class="theme-brief">
                                <div class="theme-image-box light"><img class="theme-image" src="image/cherry.jpg" alt="cherry theme"></div>
                                <div><h3>Cherry mode</h3></div>                        
                            </div>
                            <div>
                                <div class="theme-radio-btn"><input type="radio" name="theme" id="cherry"></div>
                            </div>
                        </div>
                    </label>
                </div>
            </main>
        </div>
        `;
    }
    getScript(){
        new PageMore();
    }
}