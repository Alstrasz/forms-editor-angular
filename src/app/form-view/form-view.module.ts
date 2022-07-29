import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WindowComponent } from './window/window.component';
import { FieldInputComponent } from './field-input/field-input.component';
import { FieldTextareaComponent } from './field-textarea/field-textarea.component';
import { FieldSelectComponent } from './field-select/field-select.component';
import { FieldsCollectionComponent } from './fields-collection/fields-collection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubmittedComponent } from './submitted/submitted.component';


@NgModule( {
    declarations: [
        LoaderComponent,
        WindowComponent,
        FieldInputComponent,
        FieldTextareaComponent,
        FieldSelectComponent,
        FieldsCollectionComponent,
        HeaderComponent,
        FooterComponent,
        SubmittedComponent,
    ],
    imports: [
        CommonModule,
    ],
} )
export class FormViewModule { }
