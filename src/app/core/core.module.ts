import { NgModule } from '@angular/core';

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";


@NgModule({
    declarations: [],
    providers: [],
    bootstrap: [],
    imports: [
        HeaderComponent,
        FooterComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
})
export class CoreModule { }