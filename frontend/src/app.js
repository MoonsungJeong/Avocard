import Hello from './page/Hello.js';
import Welcome from './page/Welcome.js';
import NotFound from './page/NotFound.js';

import FrontPage from './page/front.js';
import SignPage from './page/sign.js';
import PocketPage from './page/pocket.js';
import MyCardPage from './page/mycard.js';
import MorePage from './page/more.js';
import ThemePage from './page/theme.js';
import NoticePage from './page/notice.js';
import PocketCardPage from './page/pocketcard.js';

export default class App {
    constructor() {
        this.init();
        window.addEventListener("popstate", () => {
            this.init();
        });
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
            { path: "/pocket", view: PocketPage },
            { path: "/mycard", view: MyCardPage },
            { path: "/more", view: MorePage },
            { path: "/notice", view: NoticePage },
            { path: "/theme", view: ThemePage },
            { path: "/welcome", view: Welcome },
            { path: "/hello", view: Hello },
            { path: "/card", view: PocketCardPage }
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
            match = {
                route: location.pathname,
                isMatch: true,
            };
            const page = new NotFound();
            appDiv.innerHTML = page.getHtml();
        }else{
            // @@@@@@@ show requested page for user @@@@@@@
            const page = new match.route.view();
            appDiv.innerHTML = page.getHtml();
            page.getScript();
        }
    }
    
}