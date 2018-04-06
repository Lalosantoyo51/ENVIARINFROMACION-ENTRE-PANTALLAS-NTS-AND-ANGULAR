import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from "@angular/router"

@Component({
    selector: "ns-pages2",
    moduleId: module.id,
    templateUrl: "./pages2.component.html",
})
export class Pages2Component implements OnInit {
    public firstname:string;
    public lastname:string;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor( private route: ActivatedRoute) { 
        this.route.queryParams.subscribe(params =>{
            this.firstname= params["firstname"];
            this.lastname= params["lastname"];


        })
    }

    ngOnInit(): void {
    }
}