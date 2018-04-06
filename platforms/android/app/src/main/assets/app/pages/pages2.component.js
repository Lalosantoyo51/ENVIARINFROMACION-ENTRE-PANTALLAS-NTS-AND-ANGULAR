"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Pages2Component = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function Pages2Component(route) {
        var _this = this;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    Pages2Component.prototype.ngOnInit = function () {
    };
    Pages2Component = __decorate([
        core_1.Component({
            selector: "ns-pages2",
            moduleId: module.id,
            templateUrl: "./pages2.component.html",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], Pages2Component);
    return Pages2Component;
}());
exports.Pages2Component = Pages2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2VzMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQThDO0FBTzlDO0lBR0ksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCx5QkFBcUIsS0FBcUI7UUFBMUMsaUJBT0M7UUFQb0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxLQUFJLENBQUMsU0FBUyxHQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwQyxLQUFJLENBQUMsUUFBUSxHQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUd0QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQWZRLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7eUNBTThCLHVCQUFjO09BTGpDLGVBQWUsQ0FnQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1wYWdlczJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMyLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VzMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGZpcnN0bmFtZTpzdHJpbmc7XG4gICAgcHVibGljIGxhc3RuYW1lOnN0cmluZztcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PntcbiAgICAgICAgICAgIHRoaXMuZmlyc3RuYW1lPSBwYXJhbXNbXCJmaXJzdG5hbWVcIl07XG4gICAgICAgICAgICB0aGlzLmxhc3RuYW1lPSBwYXJhbXNbXCJsYXN0bmFtZVwiXTtcblxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxufSJdfQ==