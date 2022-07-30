import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormEditorModule } from '../form-editor/form-editor.module';
import { FormResponsesModule } from '../form-responses/form-responses.module';
import { FormViewModule } from '../form-view/form-view.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { FormEditorWrapperComponent } from './form-editor-wrapper/form-editor-wrapper.component';


@NgModule( {
    declarations: [
        WindowComponent,
        TabsComponent,
        FormEditorWrapperComponent,
    ],
    imports: [
        CommonModule,
        FormEditorModule,
        FormResponsesModule,
        FormViewModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatTabsModule,
        MatDialogModule,
    ],
    exports: [
        WindowComponent,
    ],
} )
export class FormsSceneModule { }
