import Nav from "./component/nav.js";

export default class Hello {
    constructor() {
        document.title = "404 Not found";
    }
    getHtml() {
        const nav = (new Nav()).getHtml();
        return `
            ${nav}
            <h1>404 Not found</h1>
            <div>Please check path again</div>
        `;
    }
  }