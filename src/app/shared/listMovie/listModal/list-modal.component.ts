import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/core/service/services.service';

@Component({
  selector: 'app-list-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent  implements OnChanges {

  @Input() id: any;
  filmDetails: any;

  constructor(
    public activeModal: NgbActiveModal,
    private servicesService: ServicesService
  ) {}
  
    ngOnInit() {
      this.getMovie(this.id);
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['id'] && this.id) {
        this.getMovie(this.id);
      }
    }

    getMovie(_id:any):void{
      this.servicesService.getMovieModal(_id).subscribe({
        next: (result :any) => { 
          this.filmDetails = result;
        },
        error: (e: any) => {
          console.log(e);
        },
      });
    }
}
