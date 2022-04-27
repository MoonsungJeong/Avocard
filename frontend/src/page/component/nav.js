export default class Hello {
    constructor() {}
    getHtml() {
        return `
            <nav class="nav">
                <a href="/" class="nav_item" data-link>Home</a>
                <a href="/welcome" class="nav_item" data-link>Welcome</a>
                <a href="/ttfound" class="nav_item" data-link>notfound</a>
            </nav>
        `;
    }
  }