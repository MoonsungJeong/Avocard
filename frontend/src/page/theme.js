import PageMore from "../js/movePageMore.js";

import ChangeTheme from "../js/funcChangeTheme.js";

export default class ThemePage {
    constructor() {
        document.title = "Abocard - Theme";
    }
    getHtml() {
        return `
        <div>
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
                    <div class="theme-item">
                        <div class="theme-brief">
                            <div class="theme-image-box light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="background='#ffffff'; font_color='#000000'; ">
                                <img class="theme-image" src="image/light.jpg" alt="light theme">
                            </div>
                            <div><label for="light"><h3>Light mode</h3></label></div>                        
                        </div>
                        <div>
                            <div class="theme-radio-btn"><input type="radio" name="theme" id="light" checked="checked"></div>
                        </div>
                    </div>                    
                    <div class="theme-item">
                        <div class="theme-brief">
                            <div class="theme-image-box dark" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="background='#000000'; font_color='#ffffff';">
                                <img class="theme-image" src="image/dark.jpg" alt="dark theme">
                            </div>
                            <div><label for="dark"><h3>Dark mode</h3></label></div>
                        </div>
                        <div>
                            <div class="theme-radio-btn"><input type="radio" name="theme" id="dark"></div>
                        </div>
                    </div>
                </div>
                <div class="theme-title">
                    <h2>Offical Theme</h2>
                </div>
                <div class="theme-container">
                    <div class="theme-item">
                        <div class="theme-brief">
                            <div class="theme-image-box light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="background='#FFC0CB'; font_color='#C0FFF4';">
                                <img class="theme-image" src="image/cherry.jpg" alt="cherry theme">
                            </div>
                            <div><label for="cherry"><h3>Cherry mode</h3></label></div>                        
                        </div>
                        <div>
                            <div class="theme-radio-btn"><input type="radio" name="theme" id="cherry"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        `;
    }
    getScript(){
        new PageMore();
        new ChangeTheme();
        
        this.imgToggle();
    }
    imgToggle(){
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
    }
}