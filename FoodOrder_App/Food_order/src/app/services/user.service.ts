import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from 'src/interfaces/IUserLogin';
import {User} from 'user'
import { USER_LOGIN_URL } from '../constants/urls';
import { ToastrService } from 'ngx-toastr';

const USER_KEY='User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject=new BehaviorSubject<User>(this.getUserFromLocalstorage());
  public userObservable!:Observable<User>
    constructor(private http: HttpClient ,private toastrService:ToastrService) {
      this.userObservable=this.userSubject.asObservable()
     }
     login(userLogin:IUserLogin):Observable<User>{
     return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(tap({
        next:(user)=>{
          this.setUserToLocalStorage(user)
          this.userSubject.next(user)
          this.toastrService.success(
            `Welcome to Food_Order ${user.name}!`,
            'Login successful'
          )
        },
        error:(errorResponse)=>{
          this.toastrService.error(errorResponse.error,'Login Failed')
        }
      }))
     }
     private setUserToLocalStorage(user:User){
      localStorage.setItem(USER_KEY,JSON.stringify(user))
     }
     logOut(){
      this.userSubject.next(new User());
      localStorage.removeItem(USER_KEY);
      window.location.reload()
     }

     private getUserFromLocalstorage():User{
      const userJson=localStorage.getItem(USER_KEY);
      if(userJson)
      return JSON.parse(userJson)as User;
      return new User();
     }
}
