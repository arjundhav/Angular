import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-lifecycle-hooks',
  templateUrl: './child-lifecycle-hooks.component.html',
  styleUrls: ['./child-lifecycle-hooks.component.css']
})
export class ChildLifecycleHooksComponent implements OnInit,OnChanges,DoCheck{

@Input() myvalue=""
  constructor(){
    console.log("constructor called");
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }

  ngOnChanges(){
    console.log("ngOnChanges called");
  }

  ngDoCheck(){
    console.log("ngDoCheck called");
  }

}
