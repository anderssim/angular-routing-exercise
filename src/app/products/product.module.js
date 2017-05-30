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
var product_list_component_1 = require('./product-list/product-list.component');
var product_detail_component_1 = require('./product-details/product-detail.component');
var product_edit_component_1 = require('./product-edit/product-edit.component');
var product_edit_info_component_1 = require('./product-edit/product-edit-info/product-edit-info.component');
var product_edit_tags_component_1 = require('./product-edit/product-edit-tags/product-edit-tags.component');
var product_filter_pipe_1 = require('./product-filter.pipe');
var product_service_1 = require('./shared/product.service');
var product_resolver_service_1 = require('./product-resolver.service');
// import { AuthGuard } from '../user/auth-guard.service';
var product_guard_service_1 = require('./product-guard.service'); // Lazy loading
var shared_module_1 = require('../shared/shared.module');
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild([
                    // { 
                    // path: 'products', // Lazy loading products
                    // canActivate: [ AuthGuard ],
                    // children: [
                    {
                        path: '',
                        component: product_list_component_1.ProductListComponent,
                    },
                    {
                        path: ':id',
                        component: product_detail_component_1.ProductDetailComponent,
                        resolve: { product: product_resolver_service_1.ProductResolver }
                    },
                    {
                        path: ':id/edit',
                        component: product_edit_component_1.ProductEditComponent,
                        canDeactivate: [product_guard_service_1.ProductEditGuard],
                        resolve: { product: product_resolver_service_1.ProductResolver },
                        children: [
                            {
                                path: '',
                                redirectTo: 'info',
                                pathMatch: 'full'
                            },
                            {
                                path: 'info',
                                component: product_edit_info_component_1.ProductEditInfoComponent
                            },
                            {
                                path: 'tags',
                                component: product_edit_tags_component_1.ProductEditTagsComponent
                            }
                        ]
                    }
                ])
            ],
            declarations: [
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                product_edit_component_1.ProductEditComponent,
                product_edit_info_component_1.ProductEditInfoComponent,
                product_edit_tags_component_1.ProductEditTagsComponent,
                product_filter_pipe_1.ProductFilterPipe
            ],
            providers: [
                product_service_1.ProductService,
                product_resolver_service_1.ProductResolver,
                product_guard_service_1.ProductEditGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map