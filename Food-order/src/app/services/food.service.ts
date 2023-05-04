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
}