import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/model/Tag';
import { FoodService } from '../../../service/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent implements OnInit {
  tags?:Tag[];
  constructor(foodService:FoodService){
    foodService.getAllTags().subscribe(serverTags=>{
      this.tags=serverTags;
    });
  }
  ngOnInit(): void {
    
  }
}
