import Router from "../app.js";

export default class movePageSign {
    constructor(){
        document.querySelector(".sign_up").addEventListener("click", this.changePage,false);
    }
    changePage(e){
        e.preventDefault();
        if (e.target.matches("[data-link]")) {
            history.pushState(null, null, e.target.href);
            new Router();
        }
    }
}
