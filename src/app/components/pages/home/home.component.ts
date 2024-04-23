import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/model/Food';
import { FoodService } from '../../../service/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  foods:Food[]=[];
  constructor(private foodService:FoodService,activateRoute:ActivatedRoute){
    let foodsObservalbe:Observable<Food[]>;
    activateRoute.params.subscribe((params)=>{
      if (params.search)
        foodsObservalbe=this.foodService.getAllSearchFood(params.search);
      else if (params.tag)
        foodsObservalbe=this.foodService.getAllFoodsByTag(params.tag);
      else
        foodsObservalbe=foodService.getAll();
        foodsObservalbe.subscribe((serverFoods)=>{
          this.foods=serverFoods;
        })
      
    })
  }
  ngOnInit(): void {
    
  }

}
