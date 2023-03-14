import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  name = "Arjun";
  isvalid: boolean = true;

  ishandle(valid: boolean) {
    this.isvalid = valid;

  }

  choose: any = '';
  selectValue(choose: any) {
    this.choose = choose.target.value;
  }

  students:any[]=[{
    name: "Arjun",
    marks:59
  },
  {
    name: "Kunal",
    marks:87
  },
  {
    name: "Rohit",
    marks:90
  }
]

}
