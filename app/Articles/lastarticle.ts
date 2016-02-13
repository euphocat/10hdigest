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
          {{ article.teaser }}
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
      teaser: 'A cooler nice album by a cool band youhou!',
      deezerWidgetId: 11471808,
      body: 'AZEAEAEAE',
      pubDate: new Date('2016-02-09')
    },
    {
      id: 2,
      title: 'Opeth - Damnation',
      teaser: 'Acoustic for metalheads and normal people.',
      deezerWidgetId: 72266,
      body: 'AZEAEAEAE',
      pubDate: new Date('2016-02-09')
    }
  ];

  constructor (private _router:Router) {

    this.articles.push({
      id: 21,
      title: 'test - pouet',
      teaser: '1234',
      deezerWidgetId: 122,
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
      app_id: 1,
      id
    };

    return url + '?' + Object
        .keys(attrs)
        .map((key) => `${key}=${attrs[key]}`)
        .join('&');
  }
}