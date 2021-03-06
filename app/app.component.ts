import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';


@Component({
    selector: 'my-app',
    template: `
        <h1>Welcome to my First Angular2 Page!!</h1>
        <courses></courses>
        <authors></authors>
        <favorite
          [is-favorite]='post.isFavorite' (change)='onFavoriteChange($event)'>
        </favorite>`,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  }

  onFavoriteChange($event) {
    console.log($event);
  }
}
