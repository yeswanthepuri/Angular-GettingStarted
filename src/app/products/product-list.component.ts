import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';



@Component({
    selector :'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
    ngOnInit(): void {
        this._ProductService.getProducts().subscribe({
            next: products => this.filterProducts=this.products = products,
            error:err => this.errorMessage = err
        });
    }
    constructor(private _ProductService: ProductService)
    {
    }
    performFilter(filterBy: string): IProduct[] {
        //throw new Error("Method not implemented.");
        filterBy=filterBy.toLowerCase();
        return this.products.filter(
            (products:IProduct)=>
            products.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    showImage:boolean = false;
    errorMessage:string;
    private _listFilter: string;
    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        this.filterProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
    }

    pageTitle:String ='Product List';
    imageWidth:number = 60;
    imageMargin:number =10;
    filterProducts:IProduct[];
    selectedRating:string;
    products: IProduct[];
    toggleImage() : void
    {
        this.showImage=!this.showImage;
    }
    onratingClicked(message:string): void{
        this.selectedRating = message;
    }
}