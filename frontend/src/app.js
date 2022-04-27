import Hello from './page/Hello.js';
import Welcome from './page/Welcome.js';
import NotFound from "./page/NotFound.js";

import Front from "./page/front.js";

export default class App {
    constructor($target) {
        this.init($target);
        window.addEventListener("popstate", () => {
            this.init($target);
        });
 
        document.addEventListener("DOMContentLoaded", () => {
            document.body.addEventListener("click", (e) => {
                if (e.target.matches("[data-link]")) {
                    e.preventDefault();
                    history.pushState(null, null, e.target.href);
                    this.init($target);
                }
            });
            this.init($target);
        });
    }
    init($target){
        const appDiv = $target;
        // @@@@@@@ path list @@@@@@@
        const routes = [
            { path: "/", view: Front },
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