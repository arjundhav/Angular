import { Injectable } from '@angular/core';
import { Sample_Food, sample_tags } from 'data';
import { Food } from 'food';
import { Tag } from 'src/Tag';


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

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getFoodById(id:string):Food{
    return this.getAll().find(food=>food.id===id)??new Food();
  }
  
}