import { Component } from '@angular/core';

@Component({
  selector: 'myStore',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Hollywood Video";
  recentMovie = " ";
  public cart = [];
  public featured = ['Harry-Potter', "The-King-of-Codes"];
  public onsale = ['Test', 'clap'];
  selectedMovie(movie) {
    this.recentMovie = movie;
    this.cart.push(movie);
    alert(movie + " was added into the cart!");
  }
}
