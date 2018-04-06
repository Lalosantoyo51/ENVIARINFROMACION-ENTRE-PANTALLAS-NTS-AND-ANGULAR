import {Component} from "@angular/core";
import {Page} from "ui/page";
import frame = require("ui/frame");

@Component({
    moduleId: module.id,
    templateUrl: "./useid.component.html"
})
export class IdComponent {
    page;

    constructor() {

    }

    removeSearchFocus() {
        var parent = this.page.getViewById('box-lista');
        var searchBar = this.page.getViewById('barra-busca');

        console.log(JSON.stringify(parent)); // UNDEFINED
        console.log(JSON.stringify(searchBar)); // UNDEFINED

        if (parent.android) {
            parent.android.setFocusableInTouchMode(true);
            parent.android.setFocusable(true);
            searchBar.android.clearFocus();
        }

    }
   
}