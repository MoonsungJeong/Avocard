import StorageCheck from "./funcStorageCheck.js";

import Router from "../app.js";

export default class UserUpdate {
    constructor(){
        document.querySelector("#delete_user_btn").addEventListener("click", this.reqUserUpdate,false);
    }
    reqUserUpdate(e){
        e.preventDefault();
        const storage = new StorageCheck;
        let deleteForm = document.getElementById("delete-user-form");
        let data = {};
        if(!deleteForm.password.checkValidity()){
            deleteForm.password.focus();
            alert("Password format is not correct!");
            return;
        }else if(!deleteForm.repassword.checkValidity()){
            deleteForm.repassword.focus();
            alert("New Password format is not correct!");
            return;
        }else if(deleteForm.password.value != deleteForm.repassword.value){
            deleteForm.repassword.focus();
            alert("New Passwords are not matched!");
            return;
        }
        data.password = deleteForm.password.value;
        
        let formDataJSON = JSON.stringify(data);

        fetch("/api/user/delete", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: formDataJSON
        })
        .then(res => res.json())
        .then(res => {
            if(res === "User deleted!"){
                alert(res);
                // sessionStorage Destroy!!!!!!!!!!!!!!!.
                storage.sessionDestroy();
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
                deleteForm.password.focus();
                return;
            }
        })
        .catch(err => {
            console.log("Delete user request failed! " + err);
        }) 
    }
}
