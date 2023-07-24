import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListModalComponent } from './listModal/list-modal.component';

@Component({
  selector: 'app-list-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent  implements OnChanges {
  @Input() movie: any;
  film:any;
  

  constructor(private modalService: NgbModal) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movie'] && this.movie) {
      this.film = this.movie.Search;
    }
  }

  seeMore(id:any){
    const dialogRef = this.modalService.open(ListModalComponent);
    dialogRef.componentInstance.id = id;
  }
}
