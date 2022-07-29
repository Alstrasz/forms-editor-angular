import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { FieldSelectComponent } from './field-select/field-select.component';
import { FieldTextareaComponent } from './field-textarea/field-textarea.component';
import { FieldInputComponent } from './field-input/field-input.component';
import { FieldsCollectionComponent } from './fields-collection/fields-collection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule( {
    declarations: [
        WindowComponent,
        FieldSelectComponent,
        FieldTextareaComponent,
        FieldInputComponent,
        FieldsCollectionComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
    ],
} )
export class FormEditorModule { }
