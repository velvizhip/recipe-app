import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {  
  recipes: Recipe[] = [
    new Recipe('Corn', 'Test Recipe', 'https://prods3.imgix.net/images/articles/2017_06/Non-Feature-grilled-mexican-street-corn-recipe-elotes.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=670')
  ];
  @Output() recipeWasSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
