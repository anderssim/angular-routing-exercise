import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-details/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags/product-edit-tags.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './shared/product.service';
import { ProductResolver } from './product-resolver.service';
// import { AuthGuard } from '../user/auth-guard.service';
import { ProductEditGuard } from './product-guard.service'; // Lazy loading

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      // { 
        // path: 'products', // Lazy loading products
        // canActivate: [ AuthGuard ],
        // children: [
          {
            path: '',
            component: ProductListComponent,
          },
          { 
            path: ':id',
            component: ProductDetailComponent,
            resolve: { product: ProductResolver }
          },
          { 
            path: ':id/edit', 
            component: ProductEditComponent,
            canDeactivate: [ ProductEditGuard ],
            resolve: { product: ProductResolver },
            children: [
              {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full'
              },
              {
                path: 'info',
                component: ProductEditInfoComponent
              },
              {
                path: 'tags',
                component: ProductEditTagsComponent
              }
            ]
          }
      //   ] // Lazy loading products
      // }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductResolver,
    ProductEditGuard
  ]
})
export class ProductModule {}
