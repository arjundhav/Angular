import { Component } from '@angular/core';
import { Food } from 'food';
import { FoodService } from 'src/app/services/food.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[]=[]
  constructor(private FoodService:FoodService) {
    this.foods=FoodService.getAll()
  }
}
