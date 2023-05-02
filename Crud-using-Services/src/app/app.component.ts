import { ApiService } from './api.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
deleteStudent(arg0: any) {
throw new Error('Method not implemented.');
}
  title = 'Crud-using-Services';
  constructor(private dialog:MatDialog,private api:ApiService){}
  displayedColumns:string[] = ['id','name','email','status','msg','course','fees','date','action']
  dataSource!: MatTableDataSource<DialogComponent>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit(){
    this.getallstudent()
  }

  getallstudent(){
  this.api.GetAllStudentData().subscribe({
  next:(res)=>{
    this.dataSource=new MatTableDataSource(res);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

  },
  error:()=>{
    alert("error while fetching the data")

  }
})
  }

  updateData(id:number){
    this.dialog.open(DialogComponent,{
      data:id
    }).afterClosed().subscribe((value)=>{
      if(value=='Update'){
        this.getallstudent()
      }
    })
  }


  deleteData(id:number){
    this.api.DeleteStudent(id).subscribe({
      next:(_res)=>{
        alert("data deleteed successfully")
        this.getallstudent()
      },
      error:()=>{
        alert("Not deleted")

      }
    })

  }


  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        width:'40%',
      },
    });
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

