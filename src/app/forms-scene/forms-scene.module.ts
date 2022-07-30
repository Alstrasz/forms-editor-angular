import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { TabsComponent } from './tabs/tabs.component';
import { SelectorComponent } from './selector/selector.component';
import { FormEditorModule } from '../form-editor/form-editor.module';
import { FormResponsesModule } from '../form-responses/form-responses.module';
import { FormViewModule } from '../form-view/form-view.module';


@NgModule( {
    declarations: [
        WindowComponent,
        TabsComponent,
        SelectorComponent,
    ],
    imports: [
        CommonModule,
        FormEditorModule,
        FormResponsesModule,
        FormViewModule,
    ],
    exports: [
        WindowComponent,
    ],
} )
export class FormsSceneModule { }
