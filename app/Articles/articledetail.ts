import {Component} from "angular2/core";
@Component({
  template: `<article class="full">
      <header>
        <div class="visual">
          <iframe scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                  src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=200&height=200&color=007FEB&layout=dark&size=medium&type=album&id=11471808&app_id=1"
                  width="200"
                  height="200"></iframe>
        </div>
        <div class="header">
          <span>08/01/2016</span>

          <h1>Half Moon Run - Sun Leads On Me</h1>

          <div class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>

          <ul class="tags">
            <li>Folk</li>
            <li>Rock</li>
            <li>Acoustic</li>
          </ul>
        </div>
      </header>

      <div class="content">

        <h2>Lorem ipsum dolor sit amet</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.

        <h2>Consectetur adipiscing elit</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        <h2>Lorem ipsum dolor sit amet</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      </div>
    </article>`
})
export class ArticleDetail {}