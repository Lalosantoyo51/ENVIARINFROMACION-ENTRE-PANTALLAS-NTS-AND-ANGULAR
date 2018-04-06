"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Pages1Component = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function Pages1Component(router) {
        this.router = router;
    }
    Pages1Component.prototype.ngOnInit = function () {
    };
    Pages1Component.prototype.send = function () {
        console.log(JSON.stringify(this.firstname));
        this.firstname;
        var navigationextras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        this.router.navigate(["pages2"], navigationextras);
    };
    Pages1Component = __decorate([
        core_1.Component({
            selector: "ns-pages1",
            moduleId: module.id,
            templateUrl: "./pages1.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], Pages1Component);
    return Pages1Component;
}());
exports.Pages1Component = Pages1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMxLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2VzMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBT3pEO0lBR0ksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCx5QkFBb0IsTUFBYTtRQUFiLFdBQU0sR0FBTixNQUFNLENBQU87SUFBSSxDQUFDO0lBRXRDLGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0QsOEJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ2QsSUFBSSxnQkFBZ0IsR0FBbUI7WUFDbkMsV0FBVyxFQUFFO2dCQUVULFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQzVCO1NBQ0osQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBcEJRLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7eUNBTTZCLGVBQU07T0FMeEIsZUFBZSxDQXFCM0I7SUFBRCxzQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcGFnZXMxXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzMS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlczFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBmaXJzdG5hbWU6c3RyaW5nO1xuICAgIHB1YmxpYyBsYXN0bmFtZTpzdHJpbmc7XG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cbiAgICBzZW5kKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KCB0aGlzLmZpcnN0bmFtZSkpXG4gICAgICAgIHRoaXMuZmlyc3RuYW1lXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uZXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzPXtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG5cbiAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiB0aGlzLmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICBcImxhc3RuYW1lXCI6IHRoaXMubGFzdG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSAoW1wicGFnZXMyXCJdLG5hdmlnYXRpb25leHRyYXMpO1xuICAgIH1cbn0iXX0=