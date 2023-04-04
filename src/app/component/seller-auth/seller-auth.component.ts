import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SellerService } from 'src/app/services/seller.service';
import { Login, Signup } from 'src/datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
 


  constructor(private sell:SellerService) { }
  showlogin=false;
  Autherror:string='';

  seller:FormGroup =new FormGroup({
   'name':new FormControl(''),
   'password':new FormControl(''),
   'email':new FormControl(''),
   'id':new FormControl(''),

  })
  log:FormGroup=new FormGroup({
   'email':new FormControl(''),
   'password':new FormControl(''),
  })
  
  
  ngOnInit(): void {
    this.sell.reloadSeller()
  }

  signUp(data:Signup){
    console.log(data)
    this.sell.userSignup(this.seller.value)
   

    }
    login(data:Login){
    console.log(data)
    this.sell.userlogin(this.log.value)
    this.sell.isLoginerr.subscribe((err)=>{
      if(err){
        this.Autherror="email or password incorrect";
      }
      
    })
    }
   goSignup(){
  this.showlogin=false
}
goLogin(){
  this.showlogin=true
}




}
