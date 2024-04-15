import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/model/Food';
import { FoodService } from '../../../service/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  foods:Food[]=[];
  constructor(private foodService:FoodService,activateRoute:ActivatedRoute){
    activateRoute.params.subscribe((params)=>{
      if(params.search){
        console.log(1);
        this.foods=this.foodService.getAllSearchFood(params.search);
      }else{
        this.foods=foodService.getAll();
      }
    })
  }
  ngOnInit(): void {
    
  }

}
