import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeveragesComponent } from './beverages/beverages.component';
import { ChildLifecycleHooksComponent } from './child-lifecycle-hooks/child-lifecycle-hooks.component';
import { ParentLifecycleHooksComponent } from './parent-lifecycle-hooks/parent-lifecycle-hooks.component';
import { DemoDirectiveDirective } from './demo-directive.directive';
import { ViewChildComponent } from './view-child/view-child.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  //All component declarations
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    BeveragesComponent,
    ChildLifecycleHooksComponent,
    ParentLifecycleHooksComponent,
    DemoDirectiveDirective,
    ViewChildComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    // UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],  //services
  bootstrap: [AppComponent]
})
export class AppModule { }
