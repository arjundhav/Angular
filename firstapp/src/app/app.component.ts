import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  name = "Arjun";

  //ngif
  isvalid: boolean = true;
  ishandle(valid: boolean) {
    this.isvalid = valid;

  }

  //ngswitch
  choose: any = '';
  selectValue(choose: any) {
    this.choose = choose.target.value;
  }

  //ngfor
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

// Employee data using track by method
  Employe:any[]=[]
  constructor(){
    this.Employe=[
    {
      id:1,
      name: "Arjun",
      desg: 'Software Developer',
      gender: 'male',
      age: 23,
    },
    {
      id:2,
      name: "Kunal",
      desg: 'Frontend Developer',
      gender: 'male',
      age: 24, 
    },
    {
      id:3,
      name: "Revati",
      desg: 'Java Developer',
      gender:'female',
      age: 25,
    },
    {
      id:4,
      name: "Pallavi",
      desg:'Python Developer',
      gender: 'female',
      age: 26,
    } 
    ]       
  }

  getMoreEmploye(){
    this.Employe=[
      {
        id:5,
        name: "Omkar",
        desg: 'Senior Developer',
        gender: 'male',
        age: 23,
      },
      {
        id:6,
        name: "Ravi",
        desg: 'Backend Developer',
        gender: 'male',
        age: 24, 
      },
      {
        id:7,
        name: "Rohini",
        desg: 'Jr Developer',
        gender:'female',
        age: 25,
      },
      {
        id:8,
        name: "Preeti",
        desg:'Django Developer',
        gender: 'female',
        age: 26,
      }
    ]
  }

  getTrackByMethod(index:number,Employe:any):string{
    return Employe.EmployeId
  }
  
  countryDetails:any[]=[
    {
      "country": "India",
      people:[
        {
          name: "Arjun"
        },
        {
          name: "Pooja"
        },
        {
          name: "Omkar"
        },
      ]
    },
    {
      "country": "USA",
      people:[
        {
          name: "Rohit"
        },
        {
          name: "Ravi"
        },
        {
          name: "Rohini"
        }
      ]
    },
    {
      "country": "UK",
      people:[
        {
          name: "Kunal"
        },
        {
          name: "Pallavi"
        },
        {
          name: "Revati"
        }
      ]
    }
  ]
  
  person:any[]=[ 
    {
      "name": "Arjun",
      "country":"India"
    },
    {
      "name": "Riddhi",
      "country":"USA"
    },
    {
      "name": "Pooja",
      "country":"UK"
    },
    {
      "name": "Riya",
      "country":"Russia"
    }
  ]

}
