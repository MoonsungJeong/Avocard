import ValidCheck from "../js/funcValidCheck.js";
import SignUp from "../js/reqSignUp.js";

export default class SignPage {
    constructor() {
        document.title = "Abocard - Sign Up";
    }
    getHtml() {
        return `
        <div class="sign_wrap">
            <header>
                <h1>Sign Up</h1>
            </header>
            <main>
                <form id="sign-user-form" class="sign_form" autocomplete="off">
                    <section class="line">
                        <div class="label_wrap">
                            <h4><label class="sign_label" for="email">Email</label></h4>
                        </div>
                        <div class="input_box">
                            <div class="input_wrap">
                                <i class="far fa-envelope required"></i>
                                <input id="email" 
                                name="email"
                                type="email" 
                                class="sign_input"
                                placeholder="Email" 
                                maxlength="50" 
                                title="Please type your email: example@example.com" 
                                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                                required>
                            </div>
                            <div class="err"></div>
                        </div> 
                    </section>
                    <section class="line">
                        <div class="label_wrap">
                            <h4><label class="sign_label" for="username">User Name</label></h4>
                        </div>
                        <div class="input_box">
                            <div class="input_wrap">
                                <i class="far fa-user required"></i>
                                <input id="username" 
                                name="username"
                                type="text" 
                                class="sign_input"
                                placeholder="User Name" 
                                title="Must contain first uppercase letter and at least two letter"                     
                                pattern="[A-Z]{1}[a-zA-Z]{1,}" 
                                required>
                            </div>
                            <div class="err"></div>
                        </div>
                    </section>
                    <section class="line">
                        <div class="label_wrap">
                            <h4><label class="sign_label" for="password">Password</label></h4>
                        </div>
                        <div class="input_box">
                            <div class="input_wrap">
                                <i class="fas fa-key required"></i>
                                <input id="password"
                                name="password" 
                                type="password" 
                                class="sign_input"
                                placeholder="Password" 
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" 
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                required>
                            </div>
                            <div class="err"></div>
                        </div>
                    </section>
                    <section class="line">
                        <div class="label_wrap">
                            <h4><label class="sign_label" for="repassword">Retype Password</label></h4>
                        </div>
                        <div class="input_box">
                            <div class="input_wrap">
                                <i class="fas fa-unlock-alt required"></i>
                                <input id="repassword" 
                                name="repassword" 
                                type="password" 
                                class="sign_input"
                                placeholder="Retype Password" 
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" 
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                required>
                            </div>
                            <div class="err"></div>
                        </div>
                    </section>
                    <section class="line">
                        <div class="btn_wrap">
                            <img src="image/avocado_basic2.PNG" class="sign__avocado">
                            <a href="/" id="signup_btn" class="sign_up_btn" data-link>Sign Up</a>
                        </div>
                    </section>
                </form>
            </main>             
        </div>
        `;
    }
    getScript(){
        new ValidCheck();
        new SignUp();
    }
}