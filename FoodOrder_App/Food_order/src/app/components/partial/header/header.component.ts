import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cartQuantity=0;
user!:User
  constructor(private cartService:CartService, private userservice:UserService) {
    cartService.getCartObservable().subscribe((newcart)=>{
      this.cartQuantity=newcart.totalCount
    })
    userservice.userObservable.subscribe((newUser)=>{
      this.user=newUser
    })
  }
  logout(){
    this.userservice.logOut();
  }
  ngOnInit(): void {
  }
  get isAuth(){
    return this.user.token
  }
}
