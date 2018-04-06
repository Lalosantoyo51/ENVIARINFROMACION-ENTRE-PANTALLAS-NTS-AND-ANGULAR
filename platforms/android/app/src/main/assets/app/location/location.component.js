"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// >> import-geolocation-plugin
var nativescript_geolocation_1 = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var BasicLocationExampleComponent = /** @class */ (function () {
    function BasicLocationExampleComponent() {
        this.distanceResult = "0";
        this.distance = 0;
        this.index = 0;
        this.startpointLongitude = 42.696552;
        this.startpointLatitude = 23.32601;
        this.endpointLongitude = 40.71448;
        this.endpointLatitude = -74.00598;
        // >> enable-location-services
        nativescript_geolocation_1.enableLocationRequest(true);
        // << enable-location-services
    }
    BasicLocationExampleComponent.prototype.isLocationEnabled = function () {
        // >> check-is-service-enabled
        nativescript_geolocation_1.isEnabled().then(function (isLocationEnabled) {
            var message = "Location services are not available";
            if (isLocationEnabled) {
                message = "Location services are available";
            }
            alert(message);
        }, function (e) {
            console.log("Location error received: " + (e.message || e));
        });
        // << check-is-service-enabled
    };
    BasicLocationExampleComponent.prototype.getDistance = function () {
        // >> get-distance
        var startLocation = new nativescript_geolocation_1.Location();
        startLocation.longitude = this.startpointLongitude;
        startLocation.latitude = this.startpointLatitude;
        var endLocation = new nativescript_geolocation_1.Location();
        endLocation.longitude = this.endpointLongitude;
        endLocation.latitude = this.endpointLatitude;
        this.distance = nativescript_geolocation_1.distance(startLocation, endLocation);
        // << get-distance
        console.log("distance - " + this.distance);
        this.distanceResult = (this.distance * 0.001).toFixed(3);
    };
    BasicLocationExampleComponent.prototype.getLocationOnce = function () {
        var _this = this;
        // >> get-current-location
        nativescript_geolocation_1.getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high,
            timeout: 5000
        })
            .then(function (location) {
            console.log("Location received: " + location);
            _this.startpointLatitude = location.latitude;
            _this.startpointLongitude = location.longitude;
        }).catch(function (error) {
            console.log("Location error received: " + error);
            alert("Location error received: " + error);
        });
        // << get-current-location
    };
    BasicLocationExampleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./location.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], BasicLocationExampleComponent);
    return BasicLocationExampleComponent;
}());
exports.BasicLocationExampleComponent = BasicLocationExampleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtCQUErQjtBQUMvQixxRUFBb0g7QUFHcEgsa0NBQW9DO0FBTXBDO0lBVUk7UUFUTyxtQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUM3QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsd0JBQW1CLEdBQVcsU0FBUyxDQUFDO1FBQ3hDLHVCQUFrQixHQUFXLFFBQVEsQ0FBQztRQUN0QyxzQkFBaUIsR0FBVyxRQUFRLENBQUM7UUFDckMscUJBQWdCLEdBQVcsQ0FBQyxRQUFRLENBQUM7UUFHeEMsOEJBQThCO1FBQzlCLGdEQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLDhCQUE4QjtJQUNsQyxDQUFDO0lBRU0seURBQWlCLEdBQXhCO1FBQ0ksOEJBQThCO1FBQzlCLG9DQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxpQkFBaUI7WUFDeEMsSUFBSSxPQUFPLEdBQUcscUNBQXFDLENBQUM7WUFDcEQsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixPQUFPLEdBQUcsaUNBQWlDLENBQUM7WUFDaEQsQ0FBQztZQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztRQUNILDhCQUE4QjtJQUNsQyxDQUFDO0lBRU0sbURBQVcsR0FBbEI7UUFDSSxrQkFBa0I7UUFDbEIsSUFBSSxhQUFhLEdBQWEsSUFBSSxtQ0FBUSxFQUFFLENBQUM7UUFDN0MsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDbkQsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFFakQsSUFBSSxXQUFXLEdBQWEsSUFBSSxtQ0FBUSxFQUFFLENBQUM7UUFDM0MsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDL0MsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQ0FBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyRCxrQkFBa0I7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sdURBQWUsR0FBdEI7UUFBQSxpQkFlQztRQWRHLDBCQUEwQjtRQUMxQiw2Q0FBa0IsQ0FBQztZQUNmLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUk7WUFDOUIsT0FBTyxFQUFFLElBQUk7U0FDZixDQUFDO2FBQ0UsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDNUMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDakQsS0FBSyxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ1AsMEJBQTBCO0lBQzlCLENBQUM7SUE1RFEsNkJBQTZCO1FBSnpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDOztPQUNXLDZCQUE2QixDQThEekM7SUFBRCxvQ0FBQztDQUFBLEFBOURELElBOERDO0FBOURZLHNFQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyA+PiBpbXBvcnQtZ2VvbG9jYXRpb24tcGx1Z2luXG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG4vLyA8PCBpbXBvcnQtZ2VvbG9jYXRpb24tcGx1Z2luXG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2NhdGlvbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEJhc2ljTG9jYXRpb25FeGFtcGxlQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgZGlzdGFuY2VSZXN1bHQ6IHN0cmluZyA9IFwiMFwiO1xuICAgIHB1YmxpYyBkaXN0YW5jZTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgc3RhcnRwb2ludExvbmdpdHVkZTogbnVtYmVyID0gNDIuNjk2NTUyO1xuICAgIHB1YmxpYyBzdGFydHBvaW50TGF0aXR1ZGU6IG51bWJlciA9IDIzLjMyNjAxO1xuICAgIHB1YmxpYyBlbmRwb2ludExvbmdpdHVkZTogbnVtYmVyID0gNDAuNzE0NDg7XG4gICAgcHVibGljIGVuZHBvaW50TGF0aXR1ZGU6IG51bWJlciA9IC03NC4wMDU5ODtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyA+PiBlbmFibGUtbG9jYXRpb24tc2VydmljZXNcbiAgICAgICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0KHRydWUpO1xuICAgICAgICAvLyA8PCBlbmFibGUtbG9jYXRpb24tc2VydmljZXNcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNMb2NhdGlvbkVuYWJsZWQoKSB7XG4gICAgICAgIC8vID4+IGNoZWNrLWlzLXNlcnZpY2UtZW5hYmxlZFxuICAgICAgICBpc0VuYWJsZWQoKS50aGVuKGZ1bmN0aW9uIChpc0xvY2F0aW9uRW5hYmxlZCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIkxvY2F0aW9uIHNlcnZpY2VzIGFyZSBub3QgYXZhaWxhYmxlXCI7XG4gICAgICAgICAgICBpZiAoaXNMb2NhdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJMb2NhdGlvbiBzZXJ2aWNlcyBhcmUgYXZhaWxhYmxlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gZXJyb3IgcmVjZWl2ZWQ6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyA8PCBjaGVjay1pcy1zZXJ2aWNlLWVuYWJsZWRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGlzdGFuY2UoKSB7XG4gICAgICAgIC8vID4+IGdldC1kaXN0YW5jZVxuICAgICAgICBsZXQgc3RhcnRMb2NhdGlvbjogTG9jYXRpb24gPSBuZXcgTG9jYXRpb24oKTtcbiAgICAgICAgc3RhcnRMb2NhdGlvbi5sb25naXR1ZGUgPSB0aGlzLnN0YXJ0cG9pbnRMb25naXR1ZGU7XG4gICAgICAgIHN0YXJ0TG9jYXRpb24ubGF0aXR1ZGUgPSB0aGlzLnN0YXJ0cG9pbnRMYXRpdHVkZTtcblxuICAgICAgICBsZXQgZW5kTG9jYXRpb246IExvY2F0aW9uID0gbmV3IExvY2F0aW9uKCk7XG4gICAgICAgIGVuZExvY2F0aW9uLmxvbmdpdHVkZSA9IHRoaXMuZW5kcG9pbnRMb25naXR1ZGU7XG4gICAgICAgIGVuZExvY2F0aW9uLmxhdGl0dWRlID0gdGhpcy5lbmRwb2ludExhdGl0dWRlO1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2Uoc3RhcnRMb2NhdGlvbiwgZW5kTG9jYXRpb24pO1xuICAgICAgICAvLyA8PCBnZXQtZGlzdGFuY2VcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXN0YW5jZSAtIFwiICsgdGhpcy5kaXN0YW5jZSk7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VSZXN1bHQgPSAodGhpcy5kaXN0YW5jZSAqIDAuMDAxKS50b0ZpeGVkKDMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2NhdGlvbk9uY2UoKSB7XG4gICAgICAgIC8vID4+IGdldC1jdXJyZW50LWxvY2F0aW9uXG4gICAgICAgIGdldEN1cnJlbnRMb2NhdGlvbih7XG4gICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXG4gICAgICAgICAgICB0aW1lb3V0OiA1MDAwXG4gICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gcmVjZWl2ZWQ6IFwiICsgbG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRwb2ludExhdGl0dWRlID0gbG9jYXRpb24ubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydHBvaW50TG9uZ2l0dWRlID0gbG9jYXRpb24ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gZXJyb3IgcmVjZWl2ZWQ6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTG9jYXRpb24gZXJyb3IgcmVjZWl2ZWQ6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIC8vIDw8IGdldC1jdXJyZW50LWxvY2F0aW9uXG4gICAgfVxuXG59Il19