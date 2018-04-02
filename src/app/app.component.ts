import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>DVD SHOP</h1>
  <p> Here are some movies:</p>

  <ul>
      <li ngFor="#movieList" (click)="selectedMovie(movie)">{{movie}}</li>
  </ul>


  Recently Added Movie: {{recentMovie}}<br>

  Cart:
  <ul>
      <li ngFor="#item">{{item}}</li>
  </ul>


  `


})
export class AppComponent {
  recentMovie = "None";
  public cart = [];
  public movieList = ['Harry Potter', 'Harry PotterOMG', 'Harry PotterRETURN']
  selectedMovie(movie) {
      alert(movie)
  }
}
