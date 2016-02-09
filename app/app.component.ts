import {Component} from 'angular2/core';
import {View} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {LastArticles} from "./Articles/lastarticle";
import {ArticleDetail} from "./Articles/articledetail";

@Component({
    selector: 'my-app',
    template: `
    <div class="main">
      <header>
        <div>
          <a [routerLink]="['Home']"><img src="app/images/logo.jpg" alt="logo"></a>

          <aside>
            <p>All test my favorite music. Not especially the last trendy things, but cool anyway.</p>
            <input type="text"
                   placeholder="Search...">
          </aside>
        </div>
      </header>
      <section>
        <router-outlet></router-outlet>
      </section>
     </div>`,
    directives: ROUTER_DIRECTIVES
})

@RouteConfig([
    { path: '/', name: 'Home', component: LastArticles }
    { path: '/article/:id', name: 'Article', component: ArticleDetail }
])

export class AppComponent {
}