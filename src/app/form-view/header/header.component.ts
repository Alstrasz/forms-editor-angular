import { Component, Input, OnInit } from '@angular/core';

@Component( {
    selector: 'form-view-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
} )
export class HeaderComponent implements OnInit {
    @Input() name: string = '';
    @Input() description: string = '';

    constructor () { }

    ngOnInit (): void {
    }
}
