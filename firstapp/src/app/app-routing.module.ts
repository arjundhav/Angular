import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path:'' ,pathMatch:'full',redirectTo:'home'},
  { path: 'home' ,component:HomeComponent},
  { path:'nav',component: NavComponent},
  { path:'about' ,component:AboutComponent},
  { path:'contact' ,component:ContactComponent},
  // { path:'user' ,loadChildren: () => import('./user/user.module').then(m => m.UserModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
