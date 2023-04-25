import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-lifecycle-hooks',
  templateUrl: './parent-lifecycle-hooks.component.html',
  styleUrls: ['./parent-lifecycle-hooks.component.css']
})
export class ParentLifecycleHooksComponent implements OnInit {
  
  constructor() { }

  ngOnInit():void { }

  value:string|undefined
  comp1Exist:boolean=true
  submitValue(val:any){
    console.log(val.value)
  }

  destroybtn(){
    this.comp1Exist=false;
  }

}
