import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormField } from 'src/app/types/form_field';

@Component( {
    selector: 'form-editor-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
} )
export class WindowComponent implements OnInit {
    @Input() closable: boolean = false;

    @Output() close_request: EventEmitter<void> = new EventEmitter();

    form: {
        name: string,
        description: string,
        fields: Array<FormField>,
    } = {
            name: '',
            description: '',
            fields: [],
        };

    constructor () { }

    ngOnInit (): void {
    }

    close_editor () {
        this.close_request.emit();
    }

    create_form () {
        console.log( this.form );
    }
}
