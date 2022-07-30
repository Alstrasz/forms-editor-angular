import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { ResponsesCollectionComponent } from './responses-collection/responses-collection.component';
import { ResponseBoxComponent } from './response-box/response-box.component';


@NgModule( {
    declarations: [
        WindowComponent,
        ResponsesCollectionComponent,
        ResponseBoxComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        WindowComponent,
    ],
} )
export class FormResponsesModule { }
