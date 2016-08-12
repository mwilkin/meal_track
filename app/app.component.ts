import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <food-list
      [foodList]="foods"
      (onFoodSelect)="foodWasSelected($event)">
    </food-list>
  </div>
`
})
export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Hamburger", "Didn't eat the bun!", 500, 0),
      new Food("Chocolate Shake", "No whipcream!", 600, 1),
      new Food("Apple", "I'm still hungry", 150, 2),
      new Food("Kind Bar", "Dark Chocolate, nuts & sea salt. Yum!", 200, 3)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
console.log(clickedFood);
  }
}
