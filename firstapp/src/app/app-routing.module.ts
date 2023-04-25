import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.guard';
import {SavingAccComponent,CurrentAccComponent} from './user/user.module';

const routes: Routes = [
  { path:'' ,pathMatch:'full',redirectTo:'home'},
  { path:'home' ,component:HomeComponent},
  { path:'nav',canActivate:[AuthGuard],component: NavComponent},
  { path:'about' ,component:AboutComponent},
  { path:'contact' ,component:ContactComponent},
  { path:'**' ,redirectTo:'home'},
  { path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  { path:'saving',component:SavingAccComponent},
  { path:'current',component:CurrentAccComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
