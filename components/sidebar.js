import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Sidebar extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <a class="btn btn-primary text-base-100 text-xl font-semibold w-fit mb-1" href="/">AnyDocument</a>
        <!-- Sidebar content here -->
        <li><a href="/documents/introduction/index.html">Introduction</a></li>
        <li>
          <details open>
            <summary>Application</summary>
            <ul>
              <li><a href="/documents/application/sub-item-1/index.html">Sub item 1</a></li>
              <li><a href="/documents/application/example/index.html">Example: MEO</a></li>
            </ul>
          </details>
        </li>
        <li><a href="/documents/changelog/index.html">Change log</a></li>
      </ul>
    `
  }
}

customElements.define('sidebar-component', Sidebar);