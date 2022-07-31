import { Component, Input, OnInit } from '@angular/core';
import { FormResponse } from 'src/app/types/form_response';

@Component( {
    selector: 'form-responses-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
} )
export class WindowComponent implements OnInit {
    @Input() form_id!: number;
    responses: Array<FormResponse> = [
        {
            created_at: new Date(),
            fields: [
                {
                    'name': 'qq',
                    'data': '1',
                },
                {
                    'name': '123312',
                    'data': '12123123123',
                },
                {
                    'name': '23112312321321',
                    'data': '12',
                },
            ],
        },
        {
            created_at: new Date(),
            fields: [
                {
                    'name': 'q123q',
                    'data': '112',
                },
                {
                    'name': '123312',
                    'data': '12123123123',
                },
                {
                    'name': '23112312321321',
                    'data': '12',
                },
            ],
        },
    ];

    constructor () { }

    ngOnInit (): void {
    }
}
