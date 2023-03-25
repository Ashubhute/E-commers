import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';
import { Signup } from 'src/datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
 


  constructor(private sell:SellerService,private rout:Router) { }
  showlogin=false

  seller:FormGroup =new FormGroup({
   'name':new FormControl(''),
   'password':new FormControl(''),
   'email':new FormControl(''),
   'id':new FormControl(''),

  })
  log:FormGroup=new FormGroup({
   'name':new FormControl(''),
   'password':new FormControl(''),
  })
  
  
  ngOnInit(): void {}

  signUp(data:Signup){
    console.log(data)
    this.sell.userSignup(this.seller.value)
    this.rout.navigate(['seller-home'])

    }
   goSignup(){
  this.showlogin=false
}
goLogin(){
  this.showlogin=true
}




}
