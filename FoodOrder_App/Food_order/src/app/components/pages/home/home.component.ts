import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'Food';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = []
  constructor(private foodservice: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservable: Observable<Food[]>
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        foodsObservable = this.foodservice.getAllFoodBySearch(params['searchTerm'])
      else if (params['tag'])
        foodsObservable = this.foodservice.getAllFoodsByTag(params['tag'])
      else
        foodsObservable = foodservice.getAll();

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods
      })
    })
  }

  ngOnInit(): void {
  }

}
