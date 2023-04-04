import { EventEmitter, Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Login, Signup } from 'src/datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  sellerLoggedIn=new BehaviorSubject<boolean>(false)
  isLoginerr=new EventEmitter<boolean>(false)

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

  userlogin(data:Login){
 console.log(data)
 this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
 {observe:`response`}).subscribe((res:any)=>
   {console.log(res)
    if(res && res.body && res.body.length){
      console.log('user logged in')
      localStorage.setItem('seller',JSON.stringify(res.body));
    this.route.navigate(['seller-home'])

    }else{
      console.log('login failed')
      this.isLoginerr.emit(true)
    }
  });
}
}
