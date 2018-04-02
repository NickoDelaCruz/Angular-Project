import { Component } from '@angular/core';

@Component({
  selector: 'myStore',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recentMovie = "None";
  public cart = [];
  public movieList = ['Harry Potter', "Frank's Jokes"];
  selectedMovie(movie) {
    this.recentMovie = movie;
    this.cart.push(movie);
    alert(movie + "was added into the cart!");
  }
}
