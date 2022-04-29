import Hello from './page/Hello.js';
import Welcome from './page/Welcome.js';
import NotFound from './page/NotFound.js';

import FrontPage from './page/front.js';
import SignPage from './page/sign.js';

export default class App {
    constructor() {
        this.init();
        window.addEventListener("popstate", () => {
            this.init();
        });
        /* 
        document.addEventListener("DOMContentLoaded", () => {
            document.body.addEventListener("click", (e) => {
                if (e.target.matches("[data-link]")) {
                    e.preventDefault();
                    history.pushState(null, null, e.target.href);
                    this.init();
                }
            });
            //this.init($target);
        }); 
        */
    }
    rootPath(){
        return document.querySelector('.app');
    }
    init(){
        const appDiv = this.rootPath();
        // @@@@@@@ path list @@@@@@@
        const routes = [
            { path: "/", view: FrontPage },
            { path: "/sign-up", view: SignPage },
            { path: "/welcome", view: Welcome },
            { path: "/hello", view: Hello },
        ];
        const pageMatches = routes.map((route) => {
            return {
                route, // route: route
                isMatch: route.path === location.pathname,
            };
        });
        let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
        
        if(!match){
            // @@@@@@@ show 404 Not Found if there is no path @@@@@@@
            console.log("Wrong path");
            match = {
                route: location.pathname,
                isMatch: true,
            };
            const page = new NotFound();
            appDiv.innerHTML = page.getHtml();
        }else{
            // @@@@@@@ show requested page for user @@@@@@@
            console.log("OK");
            const page = new match.route.view();
            appDiv.innerHTML = page.getHtml();
            page.getScript();
        }
    }
    
}