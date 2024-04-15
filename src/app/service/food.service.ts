import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';
import { sample_foods, sample_tags } from '../../data';
import { Tag } from '../shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods;
  }
  getAllSearchFood(searchNameFood:string){
    return this.getAll().filter(food=>food.name.toLocaleLowerCase().includes(searchNameFood.toLocaleLowerCase()))
  }
  getAllTags():Tag[]{
    return sample_tags;
  }
  getAllFoodsByTag(tag:string):Food[]{
    return tag==="All" ? this.getAll() : this.getAll().filter(food=>food.tags?.includes(tag))
  }
  getFoodById(foodId:string):Food{
    return this.getAll().find(food=>food.id==foodId)?? new Food();
  }
}
