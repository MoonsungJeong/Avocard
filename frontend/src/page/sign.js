//import logIn from "../js/reqGuestLogin.js";

export default class SignPage {
    constructor() {
        document.title = "Abocard - Sign Up";
    }
    getHtml() {
        return `
        <div class="wrap">
            <header>
                <h1>Sign Up</h1>
            </header>
            <main>
                <form class="sign_form" autocomplete="off">
                    <section class="line">
                        <div class="label_wrap">
                            <h4><label for="email">Email</label></h4>
                        </div>
                        <div class="input_box">
                            <div class="input_wrap">
                                <i class="far fa-envelope required"></i>
                                <input id="email" 
                                type="email" 
                                class="sign_input"
                                placeholder="Email" 
                                maxlength="50" 
                                title="Please type your email: example@example.com" 
                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                                onkeyup="check(this)"
                                required>
                            </div>
                            <div class="err"></div>
                        </div> 
                    </section>
                    <section class="line">
                        <div class="label_wrap">
                            <h4><label for="username">User Name</label></h4>
                        </div>
                        <div class="input_box">
                            <div class="input_wrap">
                                <i class="far fa-user required"></i>
                                <input id="username" 
                                type="text" 
                                class="sign_input"
                                placeholder="User Name" 
                                title="Must contain first uppercase letter and at least two letter" 
                                pattern="[A-Z]{1}[a-zA-Z]{1,}" 
                                onkeyup="check(this)"
                                required>
                            </div>
                            <div class="err"></div>
                        </div>
                    </section>
                    <section class="line">
                        <div class="label_wrap">
                            <h4><label for="password">Password</label></h4>
                        </div>
                        <div class="input_box">
                            <div class="input_wrap">
                                <i class="fas fa-key required"></i>
                                <input id="password" 
                                type="password" 
                                class="sign_input"
                                placeholder="Password" 
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" 
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                onkeyup="check(this)"
                                required>
                            </div>
                            <div class="err"></div>
                        </div>
                    </section>
                    <section class="line">
                        <div class="label_wrap">
                            <h4><label for="repassword">Retype Password</label></h4>
                        </div>
                        <div class="input_box">
                            <div class="input_wrap">
                                <i class="fas fa-unlock-alt required"></i>
                                <input id="repassword" 
                                type="password" 
                                class="sign_input"
                                placeholder="Retype Password" 
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" 
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                onkeyup="check(this)"
                                onblur="password_check(this)"
                                required>
                            </div>
                            <div class="err"></div>
                        </div>
                    </section>
                    <section class="line">
                        <div class="btn_wrap">
                            <img src="image/avocado_basic2.PNG" class="sign__avocado">
                            <input id="submit" class="btn_btn sign_input" type="submit" value="Sign Up">
                        </div>
                    </section>
                </form>
            </main>             
        </div>
        `;
    }
    getScript(){
        //new logIn();
    }
}