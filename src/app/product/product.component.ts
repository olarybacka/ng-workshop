import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  customPlaceholder: string;
  categories: string[];

  constructor() {
    this.customPlaceholder = 'Nazwa';
    this.categories = ['AGD', 'RTV', 'spożywcze'];
  }

  ngOnInit() {
    this.product = new Product(1, 'kubek', 'AGD', 'dobry kubek');
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
