import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { BasicLocationExampleComponent } from "./location/location.component";
import { IdComponent } from "./id/useid.component";
import { Pages1Component } from "./pages/pages1.component";
import { Pages2Component } from "./pages/pages2.component";

const routes: Routes = [
    { path: "", redirectTo: "/pages1", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path:"location", component: BasicLocationExampleComponent},
    { path: "id", component: IdComponent },
    { path: "pages1", component: Pages1Component },
    { path: "pages2", component: Pages2Component },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }