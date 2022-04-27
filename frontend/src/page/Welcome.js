import Nav from "./component/nav.js";

export default class Hello {
  constructor() {
      document.title = "Welcome";
  }
  getHtml() {
      const nav = (new Nav()).getHtml();
      return `
        ${nav}
        <h1>Welcome to world!!</h1>
        <div>This is SPA test</div>
        <div>I live in Australia111</div>
      `;
  }
  }