import PageMore from "../js/movePageMore.js"

import UserDelete from "../js/reqUserDelete.js";

export default class NoticePage {
    constructor() {
        document.title = "Abocard - Deletion";
    }
    getHtml() {
        return `
        <div>
            <header class="header_application">
                <div class="header-container">
                    <a id="more" href="/more"><i class="fa-solid fa-arrow-left"></i></a>
                    <h1>Deletion</h1>
                </div>
            </header>
            <main>
                <div class="wrap">
                    <form id="delete-user-form" class="sign_form" autocomplete="off">
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
                                <h4><label class="sign_label" for="repassword">Retype New Password</label></h4>
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
                                <a href="/" id="delete_user_btn" class="sign_up_btn" data-link>Delete Account</a>
                            </div>
                        </section>
                    </form>
                </div>
            </main>
        </div>
        `;
    }
    getScript(){
        new PageMore();

        new UserDelete();
    }
}