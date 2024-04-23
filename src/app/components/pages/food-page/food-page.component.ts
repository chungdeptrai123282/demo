import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/model/Food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../../../service/food.service';
import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {
  food!:Food;
  constructor(activatedRoute:ActivatedRoute,foodService:FoodService,private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.id){
        foodService.getFoodById(params.id).subscribe(serverFood=>{
          this.food=serverFood;
        });
      }
    })
  }
  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
