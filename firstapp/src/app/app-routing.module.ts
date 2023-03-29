import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path:'' ,pathMatch:'full',redirectTo:'home'},
  { path: 'home' ,component:HomeComponent},
  { path:'nav',canActivate:[AuthGuard],component: NavComponent},
  { path:'about' ,component:AboutComponent},
  { path:'contact' ,component:ContactComponent},
  { path:'**' ,redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
