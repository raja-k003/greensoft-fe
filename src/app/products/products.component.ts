import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products:any = [];
  category:any = {};
  constructor(private commonService:CommonService,private router:Router){
     this.products = this.commonService.getProducts();
     for(let item of this.products){
    if (!this.category[item.order]) {
      this.category[item.order] = {name:"",products:[]};
    }
    this.category[item.order]['name'] = item.category;
    this.category[item.order]['products'].push(item);
     }
  }

 

  formatPrice(value: number): string {
    return `₹ ${value.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  }
  onViewProducts(item, id){
  this.router.navigateByUrl(`/product/${id}?product=${item.name}"`)
  }
  getProductName(name){
    const out = name.replace(/-/g, ' ');
    return out
  }
}
