import UserLogin from "../js/reqUserLogin.js";
import GuestLogin from "../js/reqGuestLogin.js";

import PageSign from "../js/movePageSign.js";

import frontInit from "../js/funcFrontInit.js";

export default class FrontPage {
    constructor() {
        document.title = "Abocard";
    }
    getHtml() {
        return `
        <div class="front">
            <div class="front__header">
                <div class="front__wrapper">
                    <div class="front__img-box">
                        <img src="image/avocado_card1-3.png" class="front__avocado">
                    </div>
                </div>
            </div>
            <main class="front__main">
                <div class="front__wrapper">
                    <div class="front__box">
                        <form id="login-user-form" class="front__content" autocomplete="off">
                            <input id="email"
                            name="email"
                            type="text" 
                            class="front__id" 
                            placeholder=" ID"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = ' ID'"
                            title="Please type your email: example@example.com" 
                            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            required>
                            <br>
                            <input id="password"
                            name="password"
                            type="password"
                            class="front__pw" 
                            placeholder=" Password" 
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = ' Password'"
                            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" 
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            required>
                            <br>
                            <a href="/pocket" id="login_btn" class="front__button" data-link>Log-in</a>
                        </form>
                    </div>
                </div>
            </main>
            <nav class="front__nav">
                <ul class="front__list">
                    <li class="front__list-item"><a href="/sign-up" class="sign_up front_nav_item" data-link>Sign-Up</a></li>
                    <!--<div class="front__space"><i>|</i></div>-->
                    <!--<li class="front__list-item"><a class="SW_BTN front_nav_item">ID/PW lost</a></li>-->
                    <div class="front__space"><i>|</i></div>
                    <li class="front__list-item"><a href="/pocket" id="guest_btn" class="front_nav_item pointer" data-link>Guest</a></li>
                </ul>
            </nav>
        </div>
        `;
    }
    getScript(){
        new UserLogin();
        new GuestLogin();
        new PageSign();

        new frontInit();
    }
}