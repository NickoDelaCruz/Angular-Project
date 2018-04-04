import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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
