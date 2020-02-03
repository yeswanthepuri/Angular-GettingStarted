import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details.component';
import { convertToSpacePipe } from '../Pipes/convertToSpace';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductroutingModule } from '../routing/productrouting.module';



@NgModule({
  declarations: [
    ProductListComponent,
    convertToSpacePipe,
    ProductDetailsComponent,
  ],
  imports: [
    ProductroutingModule,
    SharedModule
  ]
})
export class ProductModule { }
