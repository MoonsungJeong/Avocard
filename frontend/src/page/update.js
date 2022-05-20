import PageMyCard from "../js/movePageMyCard.js";
import NewCard from "../js/reqNewCard.js";

export default class UpdatePage {
    constructor() {
        document.title = "Abocard - Update";
    }
    getHtml() {
        return `
        <header class="header">
            <div class="header__header-column">
                <a href="/mycard" id="mycard" class="header__x-btn" data-link>
                    <i class="far fa-times-circle"></i>
                </a>
            </div>
            <div class="header__header-column">
                <span class="header__icon">
                    <a href="/mycard" id="newcard_btn" data-link>
                        <i class="fa-regular fa-circle-check"></i>
                    </a>
                </span>
            </div>
        </header>
        <div class="cv">
            <div class="cv-side">
                <img src="image/man.PNG" class="profile-picture">   
                <div class="bio-panel">
                    <div>
                        <h3><span class="card-name">Name</span>&nbsp;<i class="fa-solid fa-pen card-edit"></i></h3>
                        <h4><span class="card-title">Title</span>&nbsp;<i class="fa-solid fa-pen card-edit"></i></h4>
                        <h5><span class="card-company">Company</span>&nbsp;<i class="fa-solid fa-pen card-edit"></i></h5>
                    </div>
                </div>
                <div class="bio-brief">
                    <span class="card-brief">This is short explaination</span>&nbsp;<i class="fa-solid fa-pen card-edit"></i>
                </div>
                <div class="side-panel">
                    <span class="side-panel-icon">
                        <i class="fas fa-phone"></i>
                    </span>
                    <span class="card-phone side-panel-content">Phone Number</span>&nbsp;<i class="fa-solid fa-pen card-edit"></i>
                </div>
                <div class="side-panel">
                    <span class="side-panel-icon">
                        <i class="far fa-envelope"></i>
                    </span>
                    <span class="card-email side-panel-content">Email</span>&nbsp;<i class="fa-solid fa-pen card-edit"></i>
                </div>
                <div class="side-panel">
                    <span class="side-panel-icon">
                        <i class="fa-brands fa-skype"></i>
                    </span>
                    <span class="card-skype side-panel-content">Skype</span>&nbsp;<i class="fa-solid fa-pen card-edit"></i>
                </div>
            </div>
        </div>
        `;
    };
    getScript(){
        new PageMyCard();
        new NewCard();

        this.eventEditListener();
    };
    eventEditListener(){
        const buttons = document.querySelectorAll(".card-edit");
        buttons.forEach((btn) => {
            btn.addEventListener("click",this.cardEdit,false);
        });
    };
    cardEdit(e){
        const oldValue = e.target.previousElementSibling.innerText;
        let newValue = prompt("Enter new value",oldValue);
        if(newValue != null){
            e.target.previousElementSibling.innerText = newValue;
        }
    }
}