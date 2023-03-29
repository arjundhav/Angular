import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from '../user-routing.module';
import { SavingAccComponent } from './saving-acc/saving-acc.component';
import { CurrentAccComponent } from './current-acc/current-acc.component';



@NgModule({
  declarations: [
    SavingAccComponent,
    CurrentAccComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
