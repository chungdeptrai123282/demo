import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';
import { sample_foods } from '../../data';

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
}
