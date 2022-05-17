import StorageCheck from "./funcStorageCheck.js";

export default class funcShowPocket {
    constructor(){
        this.openPocket();
        //document.querySelector("#guest_btn").addEventListener("click", this.openPocket,false);
    }
    openPocket(){
        const storage = new StorageCheck;
        //guest user
        if(storage.storageCheck() && storage.storageUserCheck() == "guest"){
            let pocket = storage.storagePocketCheck();
            this.seePocket(pocket);
        }    
        //login user + session not exist
        if(!storage.sessionCheck() && storage.storageUserCheck() == "loginUser"){
            fetch(`/api/pocket`)
                .then(res => res.json())
                .then(pocket => {
                    if(pocket == "429"){
                        alert("Code 429\nToo many request!");
                        return;
                    }
                    if(pocket == "425"){
                        alert("Code 425\nToo early request!");
                        return;
                    }
                    // Please activate this part after limit rate check! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    sessionStorage.setItem("Avocard",JSON.stringify(pocket));
                    this.seePocket(storage.sessionPocketCheck());
                })
                .catch(error => {
                    console.log("see pocket failed - " + error);
                })
        }
        //login user + session exist
        if(storage.sessionCheck() && storage.storageUserCheck() == "loginUser"){
            let pocket = storage.sessionPocketCheck();
            this.seePocket(pocket);
        }
        /*     
        let pocketData = JSON.parse(localStorage.Avocard).pocket;
        let pocketList = JSON.stringify(pocketData);
        const sessionPocket = JSON.parse(sessionStorage.getItem("pocketList"));
    
        if(!sessionPocket){
            fetch(`/api/pocket/${pocketList}`)
                .then(res => res.json())
                .then(list => {
                    if(list == "429"){
                        alert("Code 429\nToo many request!");
                        return;
                    }
                    if(list == "425"){
                        alert("Code 425\nToo early request!");
                        return;
                    }
                    // Please activate this part after limit rate check! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    sessionStorage.setItem("pocketList",JSON.stringify(list));
                    this.seePocket(list);
                })
                .catch(error => {
                    console.log("see pocket failed - " + error);
                })
                return;
        }
        this.seePocket(sessionPocket); */
    }
    seePocket(arr){
        const container = document.querySelector(".project-container");
        let result="";
        for(let i=0; i<arr.length; i++){
            result+=`
            <a href="#">
                <div class="project-item">
                    <div class="project-explanation">
                        <span class="project-category">${arr[i].cardDetail.note}</span>
                        <div class="project-info">
                            <input type="hidden" value="${arr[i].cardCode}">
                            <div class="project-name">${arr[i].cardDetail.name}</div>
                            <div class="project-title">${arr[i].cardDetail.title}</div>
                            <div class="project-company">${arr[i].cardDetail.company}</div>
                        </div>
                    </div>
                </div>
            </a>
            `;
        }
        container.innerHTML=result;
    }
}

/* 
(function openPocket(){
    const localStorageCheck = localStorage.length;
    const guestCheck = JSON.parse(localStorage.getItem("Avocard"));
    //guest user
    if(localStorageCheck && guestCheck != null){
        let pocketData = JSON.parse(localStorage.Avocard).pocket;
        let pocketList = JSON.stringify(pocketData);
        const sessionPocket = JSON.parse(sessionStorage.getItem("pocketList"));
        
        if(!sessionPocket){
            fetch(`/api/pocket/${pocketList}`)
                .then(res => res.json())
                .then(list => {
                    if(list == "429"){
                        alert("Code 429\nToo many request!");
                        return;
                    }
                    if(list == "425"){
                        alert("Code 425\nToo early request!");
                        return;
                    }
                    // Please activate this part after limit rate check! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    //sessionStorage.setItem("pocketList",JSON.stringify(list));
                    seePocket(list);
                })
                .catch(error => {
                    console.log("see pocket failed - " + error);
                })
                return;
        }
        seePocket(sessionPocket);
    }
    // login user

})();

function seePocket(arr){
    const container = document.querySelector(".project-container");
    let result="";
    for(i=0; i<arr.length; i++){
        result+=`
        <a href="#">
            <div class="project-item">
                <div class="project-explanation">
                    <span class="project-category">${arr[i].note}</span>
                    <div class="project-info">
                        <input type="hidden" value="${arr[i].cardCode}">
                        <div class="project-name">${arr[i].cardDetail.name}</div>
                        <div class="project-title">${arr[i].cardDetail.title}</div>
                        <div class="project-company">${arr[i].cardDetail.company}</div>
                    </div>
                </div>
            </div>
        </a>
        `;
    }
    container.innerHTML=result;
}

 */

//////////////////// search Function //////////////////////////////////////
/* 
let pocket = {
    "members":[
        {
            "name": "Moonsung",
            "title": "CEO",
            "company": "Avocado"
        },
        {
            "name": "Person1",
            "title": "Senior Developer",
            "company": "Apple"
        },
        {
            "name": "Person2",
            "title": "Junior Developer",
            "company": "Orange"
        },
        {
            "name": "Person3",
            "title": "Designer",
            "company": "Mango"
        },
        {
            "name": "Person4",
            "title": "Customer",
            "company": "Mellon"
        },
    ]
};
localStorage.setItem("pocket", JSON.stringify(pocket));
 */
/* 
const searchBtn = document.querySelector(".search_btn");
const searchBar = document.querySelector(".search_bar");

searchBtn.addEventListener("click",searchDisplayChange,false);
function searchDisplayChange(){
    const searchWrapper = document.querySelector(".search_bar_wrapper");
    const searchBar = document.querySelector(".search_bar");
    if(searchWrapper.style.display=="" || searchWrapper.style.display=="none"){
        searchWrapper.style.display = "block";
        searchBar.focus();
        return;
    }
    if(searchWrapper.style.display=="block"){
        searchWrapper.style.display="none";
        searchBar.blur();
        return;
    }
}
searchBar.addEventListener("input",searchCard,false);
function searchCard(e){
    const container = document.querySelector(".project-container");
    const data = JSON.parse(localStorage.getItem("pocket")).members;
    const text = e.target.value;
    let list =[];
    let result="";
    let i=0;

    for(i=0; i<data.length; i++){
        if(data[i].name.match(text) || data[i].title.match(text) || data[i].company.match(text)){
            list.push(data[i]);
        }
    }

    for(i=0; i<list.length; i++){
        result+=`
        <a href="#">
            <div class="project-item">
                <div class="project-explanation">
                    <span class="project-category">Note</span>
                    <div class="project-info">
                        <input type="hidden" value="${cardCode}">
                        <div class="project-name">${list[i].name}</div>
                        <div class="project-title">${list[i].title}</div>
                        <div class="project-company">${list[i].company}</div>
                    </div>
                </div>
            </div>
        </a>
        `;
    }
    container.innerHTML=result;
}
 */