import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnInit{
@Input()
label!:String;
@Input()
bgColor='white';
  constructor() { }

  ngOnInit(): void {
  }

}
