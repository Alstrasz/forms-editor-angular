import { Component, Input, OnInit } from '@angular/core';
import { FormFieldResponse } from 'src/app/types/form_field_response';
import { Form } from '../../types/form';

@Component( {
    selector: 'form-view-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
} )
export class WindowComponent implements OnInit {
    @Input() form_id!: number;
    form: Form = {
        id: 1,
        name: '12123123',
        description: '213123123123213',
        created_at: new Date(),
        fields: [
            {
                name: 'qq',
                description: '123123123123123123123',
                type: 'textarea',
            },
            {
                name: '123312',
                description: '123123123123123',
                type: 'select',
                options: [
                    '12123123123',
                    '123123132123',
                    '312123123213',
                    '213123123213',
                ],
            },
            {
                name: '23112312321321',
                description: '213123213231123123123123123',
                type: 'input',
            },
        ],
    };

    constructor () { }

    ngOnInit (): void {
        if ( this.form_id == undefined ) {
            throw new Error( 'WindowComponent: form id undefined' );
        }
    }

    form_response ( data: Array<FormFieldResponse> ) {
        console.log( data );
    }
}
