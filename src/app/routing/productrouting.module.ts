import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailsGuard } from '../products/product-details.guard';
import { ProductDetailsComponent } from '../products/product-details.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([            
      {path:'products',component:ProductListComponent},
      {
        path:'product/:id',
        canActivate: [ProductDetailsGuard], 
        component:ProductDetailsComponent
       }]),
  ],
  exports:[RouterModule]
})
export class ProductroutingModule { }
