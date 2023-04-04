import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddProductComponent } from './component/add-product/add-product.component';
import { HomeComponent } from './component/home/home.component';
import { SellerAuthComponent } from './component/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './component/seller-home/seller-home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'seller',component:SellerAuthComponent,
  },
  {
    path:'seller-home',component:SellerHomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'add-product',component:AddProductComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
