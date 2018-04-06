"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("ui/enums");
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var nativescript_geolocation_1 = require("nativescript-geolocation");
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esa0NBQW9DO0FBQ3BDLHNDQUF3RTtBQUN4RSwwRUFBc0U7QUFDdEUsNkVBQXlFO0FBQ3pFLHFFQUFvSDtBQUlwSCxrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsc0NBQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztBQU8xQztJQVdJO1FBVE8sbUJBQWMsR0FBVyxHQUFHLENBQUM7UUFDN0IsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLHdCQUFtQixHQUFXLFNBQVMsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBVyxRQUFRLENBQUM7UUFDdEMsc0JBQWlCLEdBQVcsUUFBUSxDQUFDO1FBQ3JDLHFCQUFnQixHQUFXLENBQUMsUUFBUSxDQUFDO1FBR3hDLDhCQUE4QjtRQUM5QixnREFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1Qiw4QkFBOEI7SUFDbEMsQ0FBQztJQUVNLHlEQUFpQixHQUF4QjtRQUNJLDhCQUE4QjtRQUM5QixvQ0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsaUJBQWlCO1lBQ3hDLElBQUksT0FBTyxHQUFHLHFDQUFxQyxDQUFDO1lBQ3BELEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDcEIsT0FBTyxHQUFHLGlDQUFpQyxDQUFDO1lBQ2hELENBQUM7WUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7UUFDSCw4QkFBOEI7SUFDbEMsQ0FBQztJQUVNLG1EQUFXLEdBQWxCO1FBQ0ksa0JBQWtCO1FBQ2xCLElBQUksYUFBYSxHQUFhLElBQUksbUNBQVEsRUFBRSxDQUFDO1FBQzdDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ25ELGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBRWpELElBQUksV0FBVyxHQUFhLElBQUksbUNBQVEsRUFBRSxDQUFDO1FBQzNDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQy9DLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsbUNBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDckQsa0JBQWtCO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLHVEQUFlLEdBQXRCO1FBQUEsaUJBZUM7UUFkRywwQkFBMEI7UUFDMUIsNkNBQWtCLENBQUM7WUFDZixlQUFlLEVBQUUsZ0JBQVEsQ0FBQyxJQUFJO1lBQzlCLE9BQU8sRUFBRSxJQUFJO1NBQ2YsQ0FBQzthQUNFLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQzVDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2pELEtBQUssQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNQLDBCQUEwQjtJQUM5QixDQUFDO0lBN0RRLDZCQUE2QjtRQUx6QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBRW5CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzs7T0FDVyw2QkFBNkIsQ0ErRHpDO0lBQUQsb0NBQUM7Q0FBQSxBQS9ERCxJQStEQztBQS9EWSxzRUFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG4vLyA8PCBpbXBvcnQtZ2VvbG9jYXRpb24tcGx1Z2luXG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5yZWdpc3RlckVsZW1lbnQoJ01hcFZpZXcnLCAoKSA9PiBNYXBWaWV3KTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiBcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQmFzaWNMb2NhdGlvbkV4YW1wbGVDb21wb25lbnQge1xuXG4gICAgcHVibGljIGRpc3RhbmNlUmVzdWx0OiBzdHJpbmcgPSBcIjBcIjtcbiAgICBwdWJsaWMgZGlzdGFuY2U6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIHN0YXJ0cG9pbnRMb25naXR1ZGU6IG51bWJlciA9IDQyLjY5NjU1MjtcbiAgICBwdWJsaWMgc3RhcnRwb2ludExhdGl0dWRlOiBudW1iZXIgPSAyMy4zMjYwMTtcbiAgICBwdWJsaWMgZW5kcG9pbnRMb25naXR1ZGU6IG51bWJlciA9IDQwLjcxNDQ4O1xuICAgIHB1YmxpYyBlbmRwb2ludExhdGl0dWRlOiBudW1iZXIgPSAtNzQuMDA1OTg7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gPj4gZW5hYmxlLWxvY2F0aW9uLXNlcnZpY2VzXG4gICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCh0cnVlKTtcbiAgICAgICAgLy8gPDwgZW5hYmxlLWxvY2F0aW9uLXNlcnZpY2VzXG4gICAgfVxuXG4gICAgcHVibGljIGlzTG9jYXRpb25FbmFibGVkKCkge1xuICAgICAgICAvLyA+PiBjaGVjay1pcy1zZXJ2aWNlLWVuYWJsZWRcbiAgICAgICAgaXNFbmFibGVkKCkudGhlbihmdW5jdGlvbiAoaXNMb2NhdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gXCJMb2NhdGlvbiBzZXJ2aWNlcyBhcmUgbm90IGF2YWlsYWJsZVwiO1xuICAgICAgICAgICAgaWYgKGlzTG9jYXRpb25FbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiTG9jYXRpb24gc2VydmljZXMgYXJlIGF2YWlsYWJsZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIGVycm9yIHJlY2VpdmVkOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gPDwgY2hlY2staXMtc2VydmljZS1lbmFibGVkXG4gICAgfVxuXG4gICAgcHVibGljIGdldERpc3RhbmNlKCkge1xuICAgICAgICAvLyA+PiBnZXQtZGlzdGFuY2VcbiAgICAgICAgbGV0IHN0YXJ0TG9jYXRpb246IExvY2F0aW9uID0gbmV3IExvY2F0aW9uKCk7XG4gICAgICAgIHN0YXJ0TG9jYXRpb24ubG9uZ2l0dWRlID0gdGhpcy5zdGFydHBvaW50TG9uZ2l0dWRlO1xuICAgICAgICBzdGFydExvY2F0aW9uLmxhdGl0dWRlID0gdGhpcy5zdGFydHBvaW50TGF0aXR1ZGU7XG5cbiAgICAgICAgbGV0IGVuZExvY2F0aW9uOiBMb2NhdGlvbiA9IG5ldyBMb2NhdGlvbigpO1xuICAgICAgICBlbmRMb2NhdGlvbi5sb25naXR1ZGUgPSB0aGlzLmVuZHBvaW50TG9uZ2l0dWRlO1xuICAgICAgICBlbmRMb2NhdGlvbi5sYXRpdHVkZSA9IHRoaXMuZW5kcG9pbnRMYXRpdHVkZTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlKHN0YXJ0TG9jYXRpb24sIGVuZExvY2F0aW9uKTtcbiAgICAgICAgLy8gPDwgZ2V0LWRpc3RhbmNlXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlzdGFuY2UgLSBcIiArIHRoaXMuZGlzdGFuY2UpO1xuICAgICAgICB0aGlzLmRpc3RhbmNlUmVzdWx0ID0gKHRoaXMuZGlzdGFuY2UgKiAwLjAwMSkudG9GaXhlZCgzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9jYXRpb25PbmNlKCkge1xuICAgICAgICAvLyA+PiBnZXQtY3VycmVudC1sb2NhdGlvblxuICAgICAgICBnZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxuICAgICAgICAgICAgdGltZW91dDogNTAwMFxuICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIHJlY2VpdmVkOiBcIiArIGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0cG9pbnRMYXRpdHVkZSA9IGxvY2F0aW9uLmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRwb2ludExvbmdpdHVkZSA9IGxvY2F0aW9uLmxvbmdpdHVkZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIGVycm9yIHJlY2VpdmVkOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkxvY2F0aW9uIGVycm9yIHJlY2VpdmVkOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAvLyA8PCBnZXQtY3VycmVudC1sb2NhdGlvblxuICAgIH1cblxufSJdfQ==