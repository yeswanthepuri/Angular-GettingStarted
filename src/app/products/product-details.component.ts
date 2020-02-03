import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle:string;
  product: IProduct;
  imageWidth:number;
  imageMargin:number;
  constructor(private route: ActivatedRoute, 
    private _ProductService: ProductService,
    private router:Router) {
  }

  ngOnInit() {
    this.pageTitle='Product Detail';
    this.imageWidth=300;
    this.imageMargin=10;
    let id = +this.route.snapshot.paramMap.get('id');
    //   this._ProductService.getProducts().subscribe({
    //     next: products => this.products = products,
    //     error:err => this.errorMessage = err
    // });
    this._ProductService.getProduct(id).subscribe({
      next: product => this.product = product
    });
  }
  onback(): void
  {
    this.router.navigate(['/products']);
  }

}
