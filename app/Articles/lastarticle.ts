import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {Article} from "./article";

@Component({
  template: `
    <article class="teaser"
             *ngFor="#article of articles"
             (click)="onClickArticle(article)">
      <header>
      <div class="visual">
        <iframe scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                  src="{{ buildDeezerLink(article.deezerWidgetId) }}"
                  width="200"
                  height="200"></iframe>
      </div>
      <div class="header">
        <span>08/01/2016</span>

        <h1>{{ article.title }}</h1>

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
    </article>
    `
})
export class LastArticles {
  public articles:Article[] = [
    {
      id: 1,
      title: 'Half Moon Run - Sun Leads On Me',
      teaser: '11471808',
      deezerWidgetId: 11471808,
      body: 'AZEAEAEAE',
      pubDate: new Date('2016-02-09')
    }
  ];

  constructor (private _router:Router) {


    this.articles.push({
      id: 2,
      title: 'test',
      teaser: '1234',
      deezerWidgetId: 1234,
      body: 'AZEAEAEAE',
      pubDate: new Date('2016-02-09')
    });

  }

  onClickArticle (article:Article) {
    this._router.navigate(['Article', {id: article.id}]);
  }

  buildDeezerLink (id:Number) {

    const url = 'https://www.deezer.com/plugins/player';
    const attrs = {
      format: 'square',
      autoplay: false,
      playlist: false,
      width: 200,
      height: 200,
      color: 'af3e44',
      layout: 'dark',
      size: 'medium',
      type: 'album',
      app_id: 1
    };

    attrs.id = id;

    return url + '?' + Object
        .keys(attrs)
        .map(function (key) {
          return `${key}=${attrs[key]}`
        }).join('&');
  }
}