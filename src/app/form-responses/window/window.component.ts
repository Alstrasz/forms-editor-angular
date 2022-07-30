import { Component, Input, OnInit } from '@angular/core';

@Component( {
    selector: 'form-responses-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
} )
export class WindowComponent implements OnInit {
    @Input() from_id!: number;

    constructor () { }

    ngOnInit (): void {
    }
}
