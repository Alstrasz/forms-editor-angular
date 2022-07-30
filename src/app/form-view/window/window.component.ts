import { Component, Input, OnInit } from '@angular/core';

@Component( {
    selector: 'form-view-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
} )
export class WindowComponent implements OnInit {
    @Input() form_id!: number;

    constructor () { }

    ngOnInit (): void {
        if ( this.form_id == undefined ) {
            throw new Error( 'WindowComponent: form id undefined' );
        }
    }
}
