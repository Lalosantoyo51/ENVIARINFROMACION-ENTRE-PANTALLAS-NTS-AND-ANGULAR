"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var frame = require("ui/frame");
var router_1 = require("@angular/router");
var IdComponent = /** @class */ (function () {
    function IdComponent(_router) {
        this._router = _router;
        this.page = frame.topmost().currentPage;
        this.removeSearchFocus();
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
            selector: "id",
            templateUrl: "./id.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], IdComponent);
    return IdComponent;
}());
exports.IdComponent = IdComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLGdDQUFtQztBQUNuQywwQ0FBeUM7QUFRekM7SUFJSSxxQkFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBUyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCx1Q0FBaUIsR0FBakI7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVyRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO1FBRXBELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0lBRUwsQ0FBQztJQXRCUSxXQUFXO1FBTnZCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsSUFBSTtZQUNkLFdBQVcsRUFBRSxxQkFBcUI7U0FFckMsQ0FBQzt5Q0FNK0IsZUFBTTtPQUoxQixXQUFXLENBdUJ2QjtJQUFELGtCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCBmcmFtZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiaWRcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2lkLmNvbXBvbmVudC5odG1sXCJcbiAgIFxufSlcblxuZXhwb3J0IGNsYXNzIElkQ29tcG9uZW50IHtcblxuICAgIHBhZ2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLnBhZ2UgPSA8UGFnZT5mcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2U7XG4gICAgICAgIHRoaXMucmVtb3ZlU2VhcmNoRm9jdXMoKTtcbiAgICB9XG5cbiAgICByZW1vdmVTZWFyY2hGb2N1cygpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZCgnYm94LWxpc3RhJyk7XG4gICAgICAgIHZhciBzZWFyY2hCYXIgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ2JhcnJhLWJ1c2NhJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGFyZW50KSk7IC8vIFVOREVGSU5FRFxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzZWFyY2hCYXIpKTsgLy8gVU5ERUZJTkVEXG5cbiAgICAgICAgaWYgKHBhcmVudC5hbmRyb2lkKSB7XG4gICAgICAgICAgICBwYXJlbnQuYW5kcm9pZC5zZXRGb2N1c2FibGVJblRvdWNoTW9kZSh0cnVlKTtcbiAgICAgICAgICAgIHBhcmVudC5hbmRyb2lkLnNldEZvY3VzYWJsZSh0cnVlKTtcbiAgICAgICAgICAgIHNlYXJjaEJhci5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ==