import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
@Input() beverages="Tea"
@Output() newBeveragesEvent = new EventEmitter<string>() 
  constructor() { 
    //constructor is empty 
  }

  ngOnInit(): void {
    //'ngOnInit' is empty
  }

  addnewBeverages(value:string){
    this.newBeveragesEvent.emit(value);
  }


}
