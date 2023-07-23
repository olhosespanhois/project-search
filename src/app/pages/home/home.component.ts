import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  movie: any;

  receiveResultValue(result: any) {
    if (result === null) {
      // If result is null, clear the movie list
      this.movie = null;
    } else {
      // Otherwise, update the movie list with the new data
      this.movie = result;
    }
    console.log('Movie Details:', this.movie);
  }
}
