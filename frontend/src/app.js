import FrontPage from './page/front.js';
import SignPage from './page/sign.js';

import PocketPage from './page/pocket.js';
import MyCardPage from './page/mycard.js';
import MorePage from './page/more.js';

import InfoPage from './page/info.js';
import ThemePage from './page/theme.js';
import NoticePage from './page/notice.js';
import DeletionPage from './page/deletion.js';
import AdminPage from './page/admin.js';

import PocketCardPage from './page/pocketcard.js';
import EditPage from './page/edit.js';
import UpdatePage from './page/update.js';

import HelpPage from './page/help.js';
import HelpPage2 from './page/help front.js';


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
            { path: "/info", view: InfoPage },
            { path: "/notice", view: NoticePage },
            { path: "/theme", view: ThemePage },
            { path: "/deletion", view: DeletionPage },
            { path: "/admin", view: AdminPage },
            { path: "/card", view: PocketCardPage },
            { path: "/edit", view: EditPage },
            { path: "/update", view: UpdatePage },
            { path: "/help", view: HelpPage },
            { path: "/help_front", view: HelpPage2 }
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