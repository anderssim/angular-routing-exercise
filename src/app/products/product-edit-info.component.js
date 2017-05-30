"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var ProductEditInfoComponent = (function () {
    function ProductEditInfoComponent(route) {
        this.route = route;
        this.product = { id: 1, productName: 'test', productCode: 'test' };
    }
    ProductEditInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild(forms_1.NgForm), 
        __metadata('design:type', forms_1.NgForm)
    ], ProductEditInfoComponent.prototype, "productForm", void 0);
    ProductEditInfoComponent = __decorate([
        core_1.Component({
            templateUrl: './app/products/product-edit-info.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ProductEditInfoComponent);
    return ProductEditInfoComponent;
}());
exports.ProductEditInfoComponent = ProductEditInfoComponent;
//# sourceMappingURL=product-edit-info.component.js.map