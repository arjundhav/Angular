import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavingAccComponent } from './user/saving-acc/saving-acc.component';
import { CurrentAccComponent } from './user/current-acc/current-acc.component';


const UserRoutes: Routes = [
  { path: 'user/saving', component: SavingAccComponent },
  { path: 'user/current', component: CurrentAccComponent }
];

@NgModule({
  declarations: [
    SavingAccComponent,
    CurrentAccComponent
  ],
  imports: [
    RouterModule.forChild(UserRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
