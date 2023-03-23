import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showlogin=false
  constructor() { }

  ngOnInit(): void {
  }
goSignup(){
  this.showlogin=false
}
goLogin(){
  this.showlogin=true
}

}
