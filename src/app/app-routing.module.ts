import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './component/home/home.component';
import { SellerAuthComponent } from './component/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './component/seller-home/seller-home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'seller',component:SellerAuthComponent
  },
  {
    path:'seller-home',component:SellerHomeComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
