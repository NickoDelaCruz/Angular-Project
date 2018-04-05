import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  title = "Hollywood Video";
  recentMovie = " ";
  public cart = [];
  public featured = ['Harry-Potter', "The-King-of-Codes", 'Hannah-Montana', 'Deadpool', 'BrideToTerabithia', 'IndianaJones' ];
  public onsale = ['Jurrasic-Park', 'LearnHowToClap', 'Tron'];
  public under10 = ['Test'];
  selectedMovie(movie) {
    this.recentMovie = movie;
    this.cart.push(movie);
    alert(movie + " was added into the cart!");
  }
}
