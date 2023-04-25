import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  addStatus:any[]=['Old Admission','New Admission','Current Admission'] 

  studentForm!: FormGroup
  
  constructor(private fb:FormBuilder) {}
  ngOnInit(): void {
    this.studentForm= this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      status: ['',Validators.required],
      msg: ['',Validators.required],
      course: ['',Validators.required],
      date: ['',Validators.required],
      fees: ['',Validators.required],
    })
  }

}
