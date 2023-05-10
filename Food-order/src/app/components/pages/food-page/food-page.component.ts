import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'food';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Food
  constructor(activated:ActivatedRoute,foodservice:FoodService,private cartService:CartService, private router:Router) {
    activated.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodservice.getFoodById(params['id']);
    })
   }

  ngOnInit(): void {}

  addToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }


}
