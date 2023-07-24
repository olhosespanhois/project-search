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
		result === null ? this.movie = null : this.movie = result;
	}
}
