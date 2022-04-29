import GuestLogin from "../js/reqGuestLogin.js";
import PageSign from "../js/movePageSign.js"

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
                        <img src="image/avocado_card1-2.png" class="front__kakao">
                    </div>
                </div>
            </div>
            <main class="front__main">
                <div class="front__wrapper">
                    <div class="front__box">
                        <form class="front__content">
                            <input type="text" class="front__id" placeholder=" ID"
                                onfocus="this.placeholder = ''"
                                onblur="this.placeholder = ' ID'"><br>
                            <input type="password" class="front__pw" placeholder=" Password" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = ' Password'"><br>
                            <input type='button'value="Log-in" class="front__botton">
                        </form>
                    </div>
                </div>
            </main>
            <nav class="front__nav">
                <ul class="front__list">
                    <li class="front__list-item"><a href="/sign-up" class="sign_up front_nav_item" data-link>Sign-Up</a></li>
                    <div class="front__space"><i>|</i></div>
                    <li class="front__list-item"><a class="front_nav_item">ID/PW lost</a></li>
                    <div class="front__space"><i>|</i></div>
                    <li class="front__list-item"><a href="/welcome" class="guest front_nav_item pointer" data-link>Guest</a></li>
                </ul>
            </nav>
        </div>
        `;
    }
    getScript(){
        new GuestLogin();
        new PageSign();
    }
}