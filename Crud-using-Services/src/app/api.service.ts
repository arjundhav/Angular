import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  PostAllStudentData(data:any){
    return this.http.post<any>("http://localhost:3000/StudentData",data)
  }

  GetAllStudentData(){
    return this.http.get<any>("http://localhost:3000/StudentData")
  }

  //delete
  DeleteStudent(id:number){
    return this.http.delete<any>("http://localhost:3000/StudentData/"+id)
  }

  //update
  UpdateStudentData(id:number,data:any){
    return this.http.put<any>("http://localhost:3000/StudentData/"+data.id,data)
  }
} 

