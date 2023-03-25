import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Signup } from 'src/datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  sellerLoggedIn=new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient,private route:Router) { }
  userSignup(data:Signup){
   this.http.post(`http://localhost:3000/seller`,data,{observe:'response'}).subscribe((res)=>
   {
    this.sellerLoggedIn.next(true);
    localStorage.setItem('seller',JSON.stringify(res.body));
    this.route.navigate(['seller-home'])
    console.log(res);
  });
}
reloadSeller(){
  if(localStorage.getItem('seller')){
    this.sellerLoggedIn.next(true);
    this.route.navigate(['seller-home']);

  }
}
}
