import logIn from "../js/login.js";

export default class Hello {
    constructor() {
        document.title = "Abocard";
    }
    getHtml() {
        return `
        <div class="front">
            <header class="front__header">
            <div class="front__wrapper">
                <div class="front__img-box">
                    <img src="image/avocado_card1-2.png" class="front__kakao">
                </div>
            </div>
            </header>
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
                    <li class="front__list-item"><a><span class="class__menu">Sign-Up</span></a></li>
                    <div class="front__space"><i>|</i></div>
                    <li class="front__list-item"><a><span class="class__menu">ID/PW lost</span></a></li>
                    <div class="front__space"><i>|</i></div>
                    <li class="front__list-item"><a><span class="guest class__menu pointer">Guest</span></a></li>
                </ul>
            </nav>
        </div>
        `;
    }
    getScript(){
        new logIn();
    }
}