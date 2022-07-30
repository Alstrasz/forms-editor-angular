import { Component, Input, OnInit } from '@angular/core';

@Component( {
    selector: 'forms-scene-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
} )
export class TabsComponent implements OnInit {
    @Input() from_id!: number;

    constructor () { }

    ngOnInit (): void {
    }
}
