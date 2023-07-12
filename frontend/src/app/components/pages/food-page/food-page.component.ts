import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Food;
  constructor(acticatedRoute:ActivatedRoute, foodService:FoodService){
    acticatedRoute.params.subscribe((param) => {
      if(param){
        this.food =foodService.getFoodById(param.food);
      }
    })
  }

}
