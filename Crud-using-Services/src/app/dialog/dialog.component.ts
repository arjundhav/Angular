import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  addStatus: any[] = ['Old', 'New', 'Ongoing']
  studentForm!: FormGroup
  actionBtn:string='Save'

  constructor(
    private fb: FormBuilder, 
    private api: ApiService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editdata:any) { }


  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      status: ['', Validators.required],
      msg: ['', Validators.required],
      course: ['', Validators.required],
      date: ['', Validators.required],
      fees: ['', Validators.required],
    });
    if(this.editdata) {
      this.actionBtn = 'Update',
      this.studentForm.controls['name'].setValue(this.editdata.name);
      this.studentForm.controls['email'].setValue(this.editdata.email);
      this.studentForm.controls['status'].setValue(this.editdata.status);
      this.studentForm.controls['course'].setValue(this.editdata.course);
      this.studentForm.controls['fees'].setValue(this.editdata.fees);
      this.studentForm.controls['date'].setValue(this.editdata.date);
      this.studentForm.controls['msg'].setValue(this.editdata.msg);
    }
  }
  
Postdata(){
  if (this.editdata) {
    this.api.PostAllStudentData(this.studentForm.value).subscribe({
      next: (res) => {
        this.actionBtn = 'Save'
        alert("data submitted");
        this.studentForm.reset();
        this.dialogRef.close();

      },
      error: (res) => {
        alert("failed to update")
      }
    })
  } else {
    this.updateStudent()
  }
};

updateStudent(){
  this.api.UpdateStudentData(this.studentForm.value, this.editdata.id).subscribe({
    next: (res) => {
      alert("Student data updated successfully")
      this.studentForm.reset();
      this.dialogRef.close('update')
    }
  })
}

}
