import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  addStatus:any[]=['Old Admission','New Admission','Current Admission'] 

  studentForm!: FormGroup
  
  constructor(private fb:FormBuilder,private api:ApiService, 
    public dialogRef: MatDialogRef<DialogComponent>) {}

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

  PostData(){
    this.api.PostAllStudentData(this.studentForm.value).subscribe({
      next:(res)=>{
      alert("Data Submitted");
      this.studentForm.reset();
      this.dialogRef.close();
    },
    error:(err)=>{
      alert("Failed to submit Data");
    }
    })
  }
  

}
