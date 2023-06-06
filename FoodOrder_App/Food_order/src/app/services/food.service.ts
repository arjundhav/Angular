import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sample_Food, sample_tags } from 'Data';
import { Food } from 'Food';
import { Observable } from 'rxjs';
import { Tag } from 'src/Tag';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAG_URL, FOODS_URL } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }
  getAllFoodBySearch(searchTerm:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL+ searchTerm);
  }

  getAllFoodsByTag(tag:string):Observable <Food[]>{
    return tag==="All"?
    this.getAll():
     this.http.get<Food[]>(FOODS_BY_TAG_URL +tag );
  }
  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOODS_BY_ID_URL +foodId );
  }
  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAG_URL)
  }
}
