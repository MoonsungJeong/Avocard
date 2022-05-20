import PageMore from "../js/movePageMore.js"

import UserUpdate from "../js/reqUserUpdate.js";
import FuncShowInfo from "../js/funcShowInfo.js";

export default class NoticePage {
    constructor() {
        document.title = "Abocard - Info";
    }
    getHtml() {
        return `
        <div>
            <header class="header_application">
                <div class="header-container">
                    <a id="more" href="/more"><i class="fa-solid fa-arrow-left"></i></a>
                    <h1>Info</h1>
                </div>
            </header>
            <main>
                <div class="wrap">
                    <form id="update-user-form" class="sign_form" autocomplete="off">
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
                                    class="info_input gray"
                                    value="example@mail.com" 
                                    readonly >
                                </div>
                                <div class="err"></div>
                            </div> 
                        </section>
                        <section class="line">
                            <div class="info_extra">Card ID for Pocket</div>
                            <div class="label_wrap">
                                <h4><label class="sign_label" for="username">User Name</label></h4>
                            </div>
                            <div class="input_box">
                                <div class="input_wrap">
                                    <i class="far fa-user required"></i>
                                    <input id="username" 
                                    name="username"
                                    type="text" 
                                    class="info_input gray"
                                    value="User Name" 
                                    readonly>
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
                                    value=""
                                    required>
                                </div>
                                <div class="err"></div>
                            </div>
                        </section>
                        <section class="line">
                            <div class="label_wrap">
                                <h4><label class="sign_label" for="newpassword">New Password</label></h4>
                            </div>
                            <div class="input_box">
                                <div class="input_wrap">
                                    <i class="fas fa-key required"></i>
                                    <input id="newpassword" 
                                    name="newpassword" 
                                    type="password" 
                                    class="sign_input"
                                    placeholder="New Password" 
                                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" 
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                    value=""
                                    required>
                                </div>
                                <div class="err"></div>
                            </div>
                        </section>
                        <section class="line">
                            <div class="label_wrap">
                                <h4><label class="sign_label" for="renewpassword">Retype New Password</label></h4>
                            </div>
                            <div class="input_box">
                                <div class="input_wrap">
                                    <i class="fas fa-unlock-alt required"></i>
                                    <input id="renewpassword" 
                                    name="renewpassword" 
                                    type="password" 
                                    class="sign_input"
                                    placeholder="Retype New Password" 
                                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" 
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                    value=""
                                    required>
                                </div>
                                <div class="err"></div>
                            </div>
                        </section>
                        <section class="line">
                            <div class="btn_wrap">
                                <a href="/info" id="update_user_btn" class="sign_up_btn" data-link>Update Password</a>
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

        new FuncShowInfo();
        new UserUpdate();
    }
}