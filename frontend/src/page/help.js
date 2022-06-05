import PageMore from "../js/movePageMore.js";

export default class ThemePage {
    constructor() {
        document.title = "Abocard - Help";
    }
    getHtml() {
        return `
        <div>
            <header class="header_application">
                <div class="header-container">
                    <a id="more" href="/more"><i class="fa-solid fa-arrow-left"></i></a>
                    <h1>Help</h1>
                </div>
            </header>
            <main>
                <div class="help-info-container">
                    <div class="notice-item">
                        <div class="notice-box">
                            <div class="notice-title"><div>Step 1. Create Account</div></div>
                        </div>
                        <div class="notice-description"><div>Create your account. You need your email, username and password</div></div>
                    </div>
                    <div class="notice-item">
                        <div class="notice-box">
                            <div class="notice-title"><div>Step 2. Create Avocard</div></div>
                        </div>
                        <div class="notice-description"><div>You can create your business card. Allow only one card per user.</div></div>
                    </div>
                    <div class="notice-item">
                        <div class="notice-box">
                            <div class="notice-title"><div>Step 3. Add other Avocard</div></div>
                        </div>
                        <div class="notice-description"><div>You can add other user's Avocard into your pocket. "username" is the keyword to add Avocard</div></div>
                    </div>
                    <div class="notice-item">
                        <div class="notice-box">
                            <div class="notice-title"><div>Step 4. Customize your theme color</div></div>
                        </div>
                        <div class="notice-description"><div>In More page, there is a theme button and you can change application theme.</div></div>
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