import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ProductListComponent} from "./products/product-list.component";

@Component({
    selector: 'pm-app',
    template:`
    <div>
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management'
}