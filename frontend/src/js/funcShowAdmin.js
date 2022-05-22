import StorageCheck from "./funcStorageCheck.js";
import Router from "../app.js";

export default class funcShowAdmin {
    constructor(){
        this.reqAdminUsers();
    }
    reqAdminUsers(){
        const storage = new StorageCheck();
        if(storage.sessionUserTypeCheck() !== "admin"){console.log("Wrong Access!"); return;}
        fetch(`/api/admin/users`)
            .then((res) => res.json())
            .then((res) => {
                this.showAdminUsers(res);
            })
            .catch((error) => {
                console.log("see admin user failed - " + error);
            })
    }
    showAdminUsers(data){
        const container = document.querySelector(".admin-info-container");
        let result = "";
        let list = "";
        let act_count = 1; // admin default;

        for(let i=0; i < data.length; i++){
            if(data[i].userType === 'admin'){
                list += `
                    <li class="post_item flex">
                        <a class="post_item_link">
                            <div>
                                <div class="post_name">${data[i].userName}</div>
                                <div class="post_email">
                                    <span>${data[i].email}</span>
                                    <span>/</span>
                                    <span>${data[i].userType}</span>
                                </div>
                            </div>
                        </a>
                    </li>
                `;
                continue;
            }
            if(data[i].deleteFlag == 0){
                act_count++;
                list += `
                    <li class="post_item flex">
                        <a class="post_item_link">
                            <div>
                                <div class="post_name">${data[i].userName}<span class="post_flag_0"> (Act)</span></div>
                                <div class="post_email">
                                    <span>${data[i].email}</span>
                                    <span>/</span>
                                    <span>${data[i].userType}</span>
                                </div>
                            </div>
                        </a>
                        <button class="admin_post_btn post_act btn_disabled">Act</button>
                        <button class="admin_post_btn post_deact" value="${data[i].userCode}">DeAct</button>
                    </li>
                `;
            }
            if(data[i].deleteFlag == 1){
                list += `
                    <li class="post_item flex">
                        <a class="post_item_link">
                            <div>
                                <div class="post_name">${data[i].userName}<span class="post_flag_1"> (Deact)</span></div>
                                <div class="post_email">
                                    <span>${data[i].email}</span>
                                    <span>/</span>
                                    <span>${data[i].userType}</span>
                                </div>
                            </div>
                        </a>
                        <button class="admin_post_btn post_act" value="${data[i].userCode}">Act</button>
                        <button class="admin_post_btn post_deact btn_disabled">DeAct</button>
                    </li>
                `;
            }
        }
        result +=`
            <section class="board">
                <h2 class="flex_between">
                    <a class="post_title">Member: ${data.length}</a>
                    <span class="post_title">Active: ${act_count} / Deact: ${data.length - act_count}</span>
                </h2>
            </section>
            <section>
                <ul class="post_top margin_side_1">
                    ${list}
                </ul>
            </section>
        `
        container.innerHTML=result;
        this.eventActDeactBtns();
    }
    reqUserActive(e){
        let data ={};
        data.userCode = e.target.value;
        let formDataJSON = JSON.stringify(data);
        fetch(`/api/admin/user/active`,{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: formDataJSON
        })
        .then((res) => res.json())
        .then((res) => {
            if(res == "activated"){
                e.target.classList.add("btn_disabled");
                e.target.nextElementSibling.classList.remove("btn_disabled"); 
                history.pushState(null, null, "/admin");
                new Router();
            }
        })
        .catch((error) => {
            console.log("req user active failed - " + error);
        })
    }
    reqUserDeActive(e){
        let data ={};
        data.userCode = e.target.value;
        let formDataJSON = JSON.stringify(data);
        
        fetch(`/api/admin/user/deactive`,{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: formDataJSON
        })
        .then((res) => res.json())
        .then((res) => {
            if(res == "deactivated"){
                e.target.classList.add("btn_disabled");
                e.target.previousElementSibling.classList.remove("btn_disabled");
                history.pushState(null, null, "/admin");
                new Router();
            }
        })
        .catch((error) => {
            console.log("req user deactive failed - " + error);
        })
    }
    eventActDeactBtns(){
        const btn_list = document.querySelectorAll(".admin_post_btn");
        btn_list.forEach((btn) => {
            if(!btn.classList.contains("btn_disabled") && btn.classList.contains("post_act")){
                btn.addEventListener("click",this.reqUserActive,false);
            }
            if(!btn.classList.contains("btn_disabled") && btn.classList.contains("post_deact")){
                btn.addEventListener("click",this.reqUserDeActive,false);
            }
        });
    }
}

