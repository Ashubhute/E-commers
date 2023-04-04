import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/datatype';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private product:ProductService) { }
 Add:FormGroup=new FormGroup({
  'name': new FormControl(''),
  'price'  :new FormControl(''),
  'category' :new FormControl(''),
  'color'  :new FormControl(''),
  'image'  :new FormControl(''),
  'Description'  :new FormControl(''),
  'id':new FormControl('')


 })
  ngOnInit(): void {
  }
  Aproduct(data:product){
 
 this.product.AddProduct(this.Add.value).subscribe((result)=>{
 console.log(result)
 })
  }
}
