"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IdComponent = /** @class */ (function () {
    function IdComponent() {
    }
    IdComponent.prototype.removeSearchFocus = function () {
        var parent = this.page.getViewById('box-lista');
        var searchBar = this.page.getViewById('barra-busca');
        console.log(JSON.stringify(parent)); // UNDEFINED
        console.log(JSON.stringify(searchBar)); // UNDEFINED
        if (parent.android) {
            parent.android.setFocusableInTouchMode(true);
            parent.android.setFocusable(true);
            searchBar.android.clearFocus();
        }
    };
    IdComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./useid.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], IdComponent);
    return IdComponent;
}());
exports.IdComponent = IdComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBUXhDO0lBR0k7SUFFQSxDQUFDO0lBRUQsdUNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtRQUVwRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkMsQ0FBQztJQUVMLENBQUM7SUFwQlEsV0FBVztRQUp2QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzs7T0FDVyxXQUFXLENBc0J2QjtJQUFELGtCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCBmcmFtZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3VzZWlkLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSWRDb21wb25lbnQge1xuICAgIHBhZ2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHJlbW92ZVNlYXJjaEZvY3VzKCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKCdib3gtbGlzdGEnKTtcbiAgICAgICAgdmFyIHNlYXJjaEJhciA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZCgnYmFycmEtYnVzY2EnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwYXJlbnQpKTsgLy8gVU5ERUZJTkVEXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHNlYXJjaEJhcikpOyAvLyBVTkRFRklORURcblxuICAgICAgICBpZiAocGFyZW50LmFuZHJvaWQpIHtcbiAgICAgICAgICAgIHBhcmVudC5hbmRyb2lkLnNldEZvY3VzYWJsZUluVG91Y2hNb2RlKHRydWUpO1xuICAgICAgICAgICAgcGFyZW50LmFuZHJvaWQuc2V0Rm9jdXNhYmxlKHRydWUpO1xuICAgICAgICAgICAgc2VhcmNoQmFyLmFuZHJvaWQuY2xlYXJGb2N1cygpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICBcbn0iXX0=