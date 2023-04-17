import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavingAccComponent } from './saving-acc/saving-acc.component';
import { CurrentAccComponent } from './current-acc/current-acc.component';



@NgModule({
  declarations: [
    SavingAccComponent,
    CurrentAccComponent
],
  imports: [
    CommonModule,
  ],
  exports: [
    SavingAccComponent,
    CurrentAccComponent
  ]
})
export class UserModule { 
  constructor(){
    console.log("User Module Loaded");
  }
}
