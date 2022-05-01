export default class funcShowMyCard {
    constructor(){
        this.openMyCard();
    }
    openMyCard(){
        fetch(`/api/card`)
            .then(res => res.json())
            .then(result => {  
                this.seeMyCard(result);
            })
            .catch(error => {
                console.log("see pocket failed - " + error);
            })
    }
    seeMyCard(param){
        const container = document.querySelector(".project-container");
        let card = param[0].cardDetail;
        let result=`
        <a href="#">
            <div class="project-item">
                <div class="project-mycard-box">
                    <span class="project-category">
                        <i class="nav-icon fa-solid fa-square-plus"></i>
                    </span>
                    <div class="project-info">
                        <div class="cv-side">
                            <img src="image/profile_Moonsung.jpg" class="profile-picture">
                            <div class="bio-panel">
                                <div>
                                    <h3><span>${card.name}</span></h3>
                                    <h4><span>${card.title}</span></h4>
                                    <h5><span>${card.company}</span></h5>
                                </div>
                                <div class="bio-logo">
                                    <img src="image/logo.png" class="company-logo">
                                </div>
                            </div>
                            <div class="bio-brief">
                                <span>${card.brief}</span>
                            </div>
                            <div class="side-panel">
                                <span class="side-panel-icon">
                                    <i class="fas fa-phone"></i>
                                </span>
                                <span class="side-panel-content">${card.phone}</span>                                   </div>
                            <div class="side-panel">
                                <span class="side-panel-icon">
                                    <i class="far fa-envelope"></i>
                                </span>
                                <span class="side-panel-content">${card.email}</span>
                            </div>
                            <div class="side-panel">
                                <span class="side-panel-icon">
                                    <i class="fa-brands fa-skype"></i>
                                </span>
                                <span class="side-panel-content">${card.skype}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        `;
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