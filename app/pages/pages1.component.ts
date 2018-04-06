import { Component, OnInit } from "@angular/core";
import { Router,NavigationExtras} from "@angular/router";

@Component({
    selector: "ns-pages1",
    moduleId: module.id,
    templateUrl: "./pages1.component.html",
})
export class Pages1Component implements OnInit {
    public firstname:string;
    public lastname:string;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private router:Router) { }

    ngOnInit(): void {
    }
    send(){
        console.log(JSON.stringify( this.firstname))
        this.firstname
        let navigationextras: NavigationExtras={
            queryParams: {

                "firstname": this.firstname,
                "lastname": this.lastname
            }
        }
        this.router.navigate (["pages2"],navigationextras);
    }
}