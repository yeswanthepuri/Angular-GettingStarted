import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Stars } from './star.component';



@NgModule({
  declarations: [
    Stars
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Stars,
    CommonModule,
    FormsModule 
  ]
})
export class SharedModule { }
