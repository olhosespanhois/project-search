import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/core/service/services.service';
@Component({
  selector: 'app-search-movie',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})

export class SearchMovieComponent implements OnInit{
  @Output() resultValue: EventEmitter<any> = new EventEmitter<any>();
  valueInput:any;
  searchForm: FormGroup<{ searchInput: FormControl<any>; }>;
  
  constructor(
    private servicesService: ServicesService, 
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      searchInput: ['']
    });
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchInput: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  getSubmit(){ 
    const searchInputControl = this.searchForm.get('searchInput');
    this.valueInput = searchInputControl?.value;
    this.getMovie(this.valueInput, 1);
  }
  
  getMovie(_name:string, _number:number):void{
    console.log('Get Movie');
    this.servicesService.getMovieDetails(_name, _number).subscribe({
      next: (result :any) => { 
        this.resultValue.emit(result);
      },
      error: (e: any) => {
        console.log(e);
      },
    });
  }

  clearSearchMovie(): void {
    this.searchForm.patchValue({
        searchInput: null
    });
    this.resultValue.emit(null);
  }
}
