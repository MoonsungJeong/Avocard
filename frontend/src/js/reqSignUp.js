import Router from "../app.js";

export default class SignUp {
    constructor(){
        document.querySelector("#signup_btn").addEventListener("click", this.reqSignUser,false);
    }
    reqSignUser(e){
        e.preventDefault();
        let signUpForm = document.getElementById("sign-user-form");
        
        if(!signUpForm.email.checkValidity()){
            signUpForm.email.focus();
            alert("Email format is not correct!");
            return;
        }else if(!signUpForm.username.checkValidity()){
            signUpForm.username.focus();
            alert("Username format is not correct!");
            return;
        }else if(!signUpForm.password.checkValidity()){
            signUpForm.password.focus();
            alert("Password format is not correct!");
            return;
        }else if(!signUpForm.repassword.checkValidity()){
            signUpForm.repassword.focus();
            alert("Re Password format is not correct!");
            return;
        }else if(signUpForm.password.value != signUpForm.repassword.value){
            signUpForm.repassword.focus();
            alert("Passwords are not matched!");
            return;
        }
        // Convert the form fields into JSON
        let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(signUpForm)))
        
        fetch("/api/user/sign", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: formDataJSON
        })
        .then(res => res.json())
        .then(res => {
            // Handle the response from the server
            alert(res);
            console.log("Avocard User created!");

            if (e.target.matches("[data-link]")) {
                history.pushState(null, null, e.target.href);
                new Router();
            }
        })
        .catch(err => {
            // handle the error from the server
            console.log("Create user request failed! " + err);
        })
    }
}
