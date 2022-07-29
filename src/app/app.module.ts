import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowComponent } from './form-view/window/window.component';
import { LoaderComponent } from './form-view/loader/loader.component';
import { HeaderComponent } from './form-collection/header/header.component';
import { SubmitComponent } from './form-collection/submit/submit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule( {
    declarations: [
        AppComponent,
        WindowComponent,
        LoaderComponent,
        HeaderComponent,
        SubmitComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
} )
export class AppModule { }
