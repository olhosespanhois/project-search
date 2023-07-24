import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListMovieComponent } from './listMovie/list-movie.component';
import { ListModalComponent } from './listMovie/listModal/list-modal.component';
import { SearchMovieComponent } from './searchMovie/search-movie.component';

@NgModule({
    declarations:[],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SearchMovieComponent,
        ListMovieComponent,
        ListModalComponent
    ],
    exports: [
        SearchMovieComponent,
        ListMovieComponent,
        ListModalComponent
    ],
})
export class SharedModule { }