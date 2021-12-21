import { Injectable } from '@angular/core';
import { ProductModel } from '../models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productItems: Array<ProductModel> = [
    {
      id: 1,
      name: "Iphone",
      price: 3333,
      image: "https://www.pt.com.tr/uploads/images/iPhone%2012%20mini.png"
    },
    {
      id: 2,
      name: "Nokia 3310",
      price: 440,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Nokia_3310_blue_R7309170_wp.png/1200px-Nokia_3310_blue_R7309170_wp.png"
    },
    {
      id: 3,
      name: "Samsung",
      price: 23423,
      image: "https://cdn.pixabay.com/photo/2016/09/20/11/27/phone-1682317_960_720.png"
    },
  ];
  
  constructor() { }

  getProducts(): Array<ProductModel> {
    return this.productItems;
  }
}
