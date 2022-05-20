import Router from "../app.js";

export default class UserUpdate {
    constructor(){
        document.querySelector("#update_user_btn").addEventListener("click", this.reqUserUpdate,false);
    }
    reqUserUpdate(e){
        e.preventDefault();
        let updateForm = document.getElementById("update-user-form");
        let data = {};
        if(!updateForm.password.checkValidity()){
            updateForm.password.focus();
            alert("Password format is not correct!");
            return;
        }else if(!updateForm.newpassword.checkValidity()){
            updateForm.newpassword.focus();
            alert("New Password format is not correct!");
            return;
        }else if(!updateForm.renewpassword.checkValidity()){
            updateForm.renewpassword.focus();
            alert("New Re Password format is not correct!");
            return;
        }else if(updateForm.newpassword.value != updateForm.renewpassword.value){
            updateForm.renewpassword.focus();
            alert("New Passwords are not matched!");
            return;
        }
        data.password = updateForm.password.value;
        data.newpassword = updateForm.newpassword.value;
        
        let formDataJSON = JSON.stringify(data);

        fetch("/api/user/update", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: formDataJSON
        })
        .then(res => res.json())
        .then(res => {
            if(res === "Password updated!"){
                alert(res);
                if(e.target.matches("[data-link]")) {
                    history.pushState(null, null, e.target.href);
                    new Router();
                }
                if(e.target.tagName == "I"){
                    history.pushState(null, null, e.target.parentNode.href);
                    new Router();
                }
            }
            if(res === "Wrong Password!"){
                alert(res);
                updateForm.password.focus();
                return;
            }
        })
        .catch(err => {
            console.log("Update user request failed! " + err);
        })
    }
}
