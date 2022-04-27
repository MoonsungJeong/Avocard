import Nav from "./component/nav.js";
import ee from "../js/test.js";

export default class Hello {
    constructor() {
        document.title = "Home";
    }
    getHtml() {
        const nav = (new Nav()).getHtml();
        //scriptModule.logTest();
        return `
            ${nav}
            <h1>Hello world!</h1>
            <div>This is SPA test</div>
            <div class="btn">I'm in korea </div>
        `;
    }
    getScript(){
        new ee();
    }
   /*  ms(){
        alert("MS");
    } */
}