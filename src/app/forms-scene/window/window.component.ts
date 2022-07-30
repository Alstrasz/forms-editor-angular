import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDescriptionShort } from 'src/app/types/from_description_short';
import { FormEditorWrapperComponent } from '../form-editor-wrapper/form-editor-wrapper.component';

@Component( {
    selector: 'forms-scene-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
} )
export class WindowComponent implements OnInit {
    forms_list_short: Array<FormDescriptionShort> = [
        { id: 1, name: 'a', description: 'b' },
        { id: 2, name: 'c', description: 'd' },
    ];

    constructor ( public dialog: MatDialog ) { }

    ngOnInit (): void {
    }

    create_new_form () {
        this.dialog.open( FormEditorWrapperComponent, {
            width: '90%',
            position: { top: '5vh' },
            maxHeight: '90vh',
        } );
    }
}
