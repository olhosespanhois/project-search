import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListMovieComponent } from './listMovie/list-movie.component';
import { SearchMovieComponent } from './searchMovie/search-movie.component';

@NgModule({
    declarations:[],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SearchMovieComponent,
        ListMovieComponent
    ],
    exports: [
        SearchMovieComponent,
        ListMovieComponent 
    ],
})
export class SharedModule { }