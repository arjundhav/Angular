import { Injectable } from '@angular/core';
import { Sample_Food } from 'data';
import { Food } from 'food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return Sample_Food;
  }

  getFoodBySearch(searchTerm:string):Food[]{
    return this.getAll().filter(food =>food.name.toLowerCase().includes(searchTerm
      .toLowerCase()))
  }

  getFoodByTag(tag:string):Food[]{
    return tag==="All"?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag));
  }

  getFoodById(id:string):Food{
    return this.getAll().find(food=>food.id===id)??new Food();
  }
  
}