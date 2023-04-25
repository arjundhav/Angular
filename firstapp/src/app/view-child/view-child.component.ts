import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoDirectiveDirective } from '../demo-directive.directive';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  @ViewChild( DemoDirectiveDirective )
  demoDirectiveDirective :  DemoDirectiveDirective  | undefined;

  constructor(){}
 
  ngOnInit(): void {}

  changeColor(color:string){
    this.demoDirectiveDirective?.change(color);
  }

  //countercomponent viewchild
  @ViewChild( CounterComponent )
  counterComponent :  CounterComponent  | undefined;

  inc(){
    this.counterComponent?.increasebyone();
  }

  dec(){
    this.counterComponent?.decreasebyone();
  }
  



}
