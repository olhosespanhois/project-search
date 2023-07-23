import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent {
  @Input() movie: any;
  film:any;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movie'] && this.movie) {
      console.log('Movie Details:', this.movie);
      this.film = this.movie.Search;
    }
  }
}
