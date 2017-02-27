import { Component, OnInit } from '@angular/core';
import { Product, Category } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  customPlaceholder: string;
  categories: Category[];

  constructor() {
    this.customPlaceholder = 'Nazwa';
    this.categories = [
      {id: 1, name: 'AGD'},
      {id: 2, name: 'RTV'},
      {id: 3, name: 'spożywcze'}
      ];
  }

  ngOnInit() {
    this.product = new Product(1, null, {id: 1, name: 'AGD'}, 'dobry kubek');
    console.log(this.product);
  }

  onReset(productForm) {
    productForm.reset();
  }

  onSubmit(productForm){
    console.log(productForm.value, 'form value');
    console.log(productForm.valid, 'form valid');
  }

}
